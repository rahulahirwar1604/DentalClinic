import React from 'react';
import { Icon } from '../ui/Icon';
import { getWhatsAppGeneralUrl } from '../../config/clinic';

export const MobileBottomBar: React.FC = () => {
  const whatsappUrl = getWhatsAppGeneralUrl("Hello AuraDental Team, I would like to consult a doctor regarding dental treatment.");

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe bg-surface-container-lowest/95 backdrop-blur-xl border-t border-surface-container-high shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <div className="px-margin-mobile py-2.5 flex items-center gap-space-sm">
        
        {/* WhatsApp Quick Chat */}
        <a
          className="h-11 flex-1 min-w-0 px-2 flex items-center justify-center gap-1.5 rounded-lg bg-secondary-container text-on-secondary-fixed font-label-md text-label-md font-semibold hover:bg-secondary-fixed transition-colors active:scale-[0.98] select-none"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="chat" className="text-[18px] text-secondary shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <a
          className="h-11 flex-[1.4] min-w-0 px-2 flex items-center justify-center gap-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-sm transition-all active:scale-[0.98] select-none"
          href="#quick-booking"
        >
          <Icon name="calendar_month" className="text-[18px] shrink-0" />
          <span className="truncate">Book Appointment</span>
        </a>

      </div>
    </div>
  );
};
