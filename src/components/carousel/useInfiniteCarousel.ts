"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Slide } from "./type";

export function useInfiniteCarousel({
  slides,
  autoPlay = true,
  interval = 3500,
  pauseOnHover = true,
  pauseOnInteraction = true,
} : {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  pauseOnHover?: boolean;
  pauseOnInteraction?: boolean;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const rafScrollRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  // minimal 2 item untuk loop; gandakan kalau 1
  const data = useMemo(
    () => (slides.length >= 2 ? slides : [...slides, ...slides]),
    [slides]
  );
  // [cloneLast, ...real, cloneFirst]
  const extended = useMemo(
    () => (data.length ? [data[data.length - 1], ...data, data[0]] : []),
    [data]
  );

  const [index, setIndex] = useState(1);
  const count = extended.length;
  const realLen = Math.max(0, count - 2);
  const realActive = realLen ? ((index - 1 + realLen) % realLen) : 0;

  // ===== Scroll helpers =====
  const scrollToIndex = (i: number, smooth = true) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const left = child.offsetLeft - (el.clientLeft ?? 0);
    el.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
    setIndex(i);
  };

  // matikan snap & smooth untuk teleport seketika (hindari animasi balik)
  const disableSnapAndSmooth = (el: HTMLElement) => {
    el.classList.add("no-snap");
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "auto";
    return () => {
      el.style.scrollBehavior = prev;
      requestAnimationFrame(() => el.classList.remove("no-snap"));
    };
  };

  const teleportToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const restore = disableSnapAndSmooth(el);
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return restore();
    const left = child.offsetLeft - (el.clientLeft ?? 0);
    el.scrollTo({ left });
    setIndex(i);
    restore();
  };

  // ===== API: next / prev =====
  const next = () => {
    if (count === 0) return;
    const lastReal = count - 2;
    if (index === lastReal) {
      // animasi ke cloneFirst; onScroll akan teleport ke real first
      scrollToIndex(count - 1, true);
    } else {
      scrollToIndex(index + 1, true);
    }
  };

  const prev = () => {
    if (count === 0) return;
    if (index === 1) {
      // animasi ke cloneLast; onScroll akan teleport ke real last
      scrollToIndex(0, true);
    } else {
      scrollToIndex(index - 1, true);
    }
  };

  // ===== Pause/Resume =====
  const pause = () => {
    isPausedRef.current = true;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resume = () => {
    isPausedRef.current = false;
    if (!autoPlay || data.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPausedRef.current && !isInteractingRef.current) next();
    }, interval);
  };

  // ===== Effects =====
  // set posisi awal (index 1) tanpa animasi
  useEffect(() => {
    const id = setTimeout(() => scrollToIndex(1, false), 0);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // autoplay lifecycle
  useEffect(() => {
    if (!autoPlay || data.length <= 1) return;
    resume();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, autoPlay, interval, data.length]);

  // hover/focus pause
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !pauseOnHover) return;
    const onEnter = () => pause();
    const onLeave = () => resume();
    viewport.addEventListener("mouseenter", onEnter);
    viewport.addEventListener("focusin", onEnter);
    viewport.addEventListener("mouseleave", onLeave);
    viewport.addEventListener("focusout", onLeave);
    return () => {
      viewport.removeEventListener("mouseenter", onEnter);
      viewport.removeEventListener("focusin", onEnter);
      viewport.removeEventListener("mouseleave", onLeave);
      viewport.removeEventListener("focusout", onLeave);
    };
  }, [pauseOnHover]);

  // interaksi (drag/scroll/wheel) pause sementara
  useEffect(() => {
    const el = trackRef.current;
    if (!el || !pauseOnInteraction) return;

    const onPointerDown = () => {
      isInteractingRef.current = true; pause();
    };
    const onPointerUp = () => {
      isInteractingRef.current = false; resume();
    };
    const onWheel = () => {
      isInteractingRef.current = true; pause();
      window.setTimeout(() => { isInteractingRef.current = false; resume(); }, 400);
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [pauseOnInteraction]);

  // sinkronisasi index + teleport saat menyentuh clone
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      if (rafScrollRef.current) cancelAnimationFrame(rafScrollRef.current);
      rafScrollRef.current = requestAnimationFrame(() => {
        if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);
        settleTimerRef.current = window.setTimeout(() => {
          const children = Array.from(el.children) as HTMLElement[];
          const center = el.scrollLeft + el.clientWidth / 2;

          let best = 0, bestDist = Infinity;
          for (let i = 0; i < children.length; i++) {
            const c = children[i];
            const mid = c.offsetLeft + c.clientWidth / 2;
            const dist = Math.abs(mid - center);
            if (dist < bestDist) { bestDist = dist; best = i; }
          }
          setIndex(best);

          if (best === 0) {
            teleportToIndex(count - 2);   // last real
          } else if (best === count - 1) {
            teleportToIndex(1);           // real first
          }
        }, 60);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafScrollRef.current) cancelAnimationFrame(rafScrollRef.current);
      if (settleTimerRef.current) window.clearTimeout(settleTimerRef.current);
    };
  }, [count]);

  // re-center saat resize (jaga slide aktif tetap center)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => scrollToIndex(index, false));
    ro.observe(el);
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return {
    viewportRef,
    trackRef,
    index,
    realLen,
    realActive,
    next,
    prev,
    pause,
    resume,
    scrollToIndex,
  };
}
