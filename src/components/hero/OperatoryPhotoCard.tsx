import React from 'react';
import Image from 'next/image';

export const OperatoryPhotoCard: React.FC = () => {
  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm border border-surface-container-high bg-surface-container">
      <Image
        src="/images/operatory.jpg"
        alt="Pristine modern dental operatory at AuraDental Clinic with Zeiss microscope and ergonomic examination chair"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Floating Bottom Overlay Pills */}
      <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[11px] font-semibold text-on-surface shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          Indiranagar &amp; Bandra
        </div>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-[10px] font-bold text-primary shadow-sm">
          100% Sterile
        </div>
      </div>
    </div>
  );
};

