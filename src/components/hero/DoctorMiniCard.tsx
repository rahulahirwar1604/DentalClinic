import React from 'react';
import Image from 'next/image';
import { Icon } from '../ui/Icon';

export const DoctorMiniCard: React.FC = () => {
  return (
    <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container shadow-sm flex flex-col gap-2">
      
      {/* Top row: Avatar + Name + AIIMS tag */}
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-secondary/40 shadow-sm">
          <Image
            src="/images/doctor-avatar.jpg"
            alt="Portrait of Dr. Rajesh Kumar, senior implantologist"
            fill
            className="object-cover"
            sizes="44px"
          />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-secondary flex items-center justify-center text-on-secondary shadow-sm">
            <Icon name="verified" className="text-[9px]" fill={true} />
          </div>
        </div>

        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-[15px] font-bold text-on-surface truncate">
              Dr. Rajesh Kumar
            </h3>
            <span className="font-label-sm text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-primary font-semibold shrink-0">
              AIIMS Alum
            </span>
          </div>
          <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
            Senior Implantologist • MDS
          </p>
        </div>
      </div>

      {/* Bottom row: 2 micro-stats */}
      <div className="grid grid-cols-2 gap-2 pt-0.5">
        <div className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-surface-container-low">
          <Icon name="verified_user" className="text-primary text-[16px]" />
          <div className="flex flex-col">
            <span className="font-label-sm text-[12px] font-bold text-on-surface leading-tight">18+ Years</span>
            <span className="font-label-sm text-[9px] text-on-surface-variant leading-none">Experience</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 px-2 rounded-lg bg-surface-container-low">
          <Icon name="sentiment_satisfied" className="text-primary text-[16px]" />
          <div className="flex flex-col">
            <span className="font-label-sm text-[12px] font-bold text-on-surface leading-tight">15,000+</span>
            <span className="font-label-sm text-[9px] text-on-surface-variant leading-none">Painless Implants</span>
          </div>
        </div>
      </div>

    </div>
  );
};

