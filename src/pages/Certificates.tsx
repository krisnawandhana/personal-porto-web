"use client";
import { useState } from "react";
import { projects as certificates } from "../data/certificateData";

export default function Certificates() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section className="px-6 py-12 text-white">
      <header className="text-center mb-10">
        <h2 className="text-4xl font-heading mb-3">Certificates</h2>
        <p className="text-gray-400">A selection of verified professional certifications</p>
      </header>

      {/* Grid of certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.id}
            className="group relative rounded-xl overflow-hidden border border-[#2a2a2a] hover:border-primary transition cursor-pointer"
            onClick={() => setSelectedPdf(cert.credentialUrl)}
          >
            {/* 🔴 Number Badge */}
            <span
              className="
                absolute top-3 left-3 z-10
                flex items-center justify-center
                w-8 h-8 md:w-10 md:h-10
                rounded-full
                bg-white text-primary font-extrabold text-sm md:text-base
                shadow-[0_3px_0_rgba(0,0,0,0.8)]
                border-2 border-black
                select-none
                transition-transform duration-300 group-hover:-translate-y-1
              "
            >
              {index + 1}
            </span>

            {/* Image */}
            <div className="overflow-hidden rounded-xl h-64 flex items-center justify-center bg-[#1b1b1b]">
              <img
                src={`preview/certificates/${cert.imageUrl}.jpg`}
                alt={cert.name}
                className="w-full h-full object-contain transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col justify-end transition">
              <div className="p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-primary text-sm">View Credential →</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal preview */}
      {selectedPdf && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="relative w-[90vw] h-[80vh] bg-[#121212] rounded-xl overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedPdf}
              title="Certificate Preview"
              className="w-full h-full border-0"
            ></iframe>

            {/* Close button */}
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-3 right-3 bg-primary text-black font-bold px-3 py-1 rounded-md shadow hover:bg-white transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
