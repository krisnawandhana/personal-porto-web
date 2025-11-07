export type Slide = {
  src: string;
  alt?: string;
  caption?: string;
  github?: string | null;
  demo?: string | null;
};

export type CarouselProps = {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  aspect?: string;
  pauseOnHover?: boolean;
  pauseOnInteraction?: boolean;
  className?: string;
};
