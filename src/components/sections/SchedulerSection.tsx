'use client';

import React, { useState } from 'react';
import { DesktopSchedulerForm } from '../scheduler/DesktopSchedulerForm';
import { MobileSchedulerForm } from '../scheduler/MobileSchedulerForm';
import { Icon } from '../ui/Icon';

interface SubmittedEnquiry {
  whatsappUrl: string;
  patientName: string;
  treatment: string;
  date: string;
  timeSlot: string;
}

export const SchedulerSection: React.FC = () => {
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SubmittedEnquiry | null>(null);

  const handleEnquirySuccess = (
    whatsappUrl: string,
    details: { patientName: string; treatment: string; date: string; timeSlot: string }
  ) => {
    setSubmittedEnquiry({
      whatsappUrl,
      ...details,
    });
  };

  return (
    <section id="quick-booking" className="w-full bg-surface py-10 lg:py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin">
        <div className="bg-surface-container-lowest p-4 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-surface-container/70">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 lg:mb-8">
            <div className="flex flex-col gap-1">
              <div className="self-start inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-primary-fixed/30 text-primary text-[11px] font-bold uppercase mb-1">
                <Icon name="calendar_month" className="text-sm" />
                <span>Appointment Enquiry</span>
              </div>
              <h2 className="font-headline-md text-[20px] sm:text-headline-md font-bold text-on-surface">
                Instant Appointment Enquiry
              </h2>
              <p className="font-body-sm text-xs sm:text-body-sm text-on-surface-variant">
                Select your preferred treatment, date, and branch. Your enquiry will connect directly with our clinic coordinator via WhatsApp.
              </p>
            </div>

            {/* Direct WhatsApp Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 text-primary bg-secondary-container/30 px-3.5 py-1.5 rounded-lg shrink-0">
              <Icon name="chat" className="text-base text-secondary" />
              <span className="font-label-sm text-label-sm font-semibold">
                Direct WhatsApp Communication
              </span>
            </div>
          </div>

          {/* Submitted Status Notification */}
          {submittedEnquiry ? (
            <div className="p-5 rounded-2xl bg-secondary-container/20 border border-primary/20 flex flex-col gap-3.5 animate-fade-in">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <Icon name="check_circle" className="text-xl" fill={true} />
                </div>
                <div>
                  <h4 className="font-headline-sm text-sm sm:text-base font-bold text-on-surface">
                    Appointment Enquiry Formatted!
                  </h4>
                  <p className="text-xs text-on-surface-variant">
                    We have opened WhatsApp on your device with your enquiry details.
                  </p>
                </div>
              </div>

              {/* Enquiry summary */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs bg-surface-container-lowest p-3 rounded-xl border border-surface-container">
                <div>
                  <span className="text-[10px] text-on-surface-variant block">Patient:</span>
                  <span className="font-semibold text-on-surface">{submittedEnquiry.patientName}</span>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant block">Treatment:</span>
                  <span className="font-semibold text-on-surface">{submittedEnquiry.treatment}</span>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant block">Preferred Date:</span>
                  <span className="font-semibold text-on-surface">{submittedEnquiry.date}</span>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant block">Slot:</span>
                  <span className="font-semibold text-on-surface">{submittedEnquiry.timeSlot}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
                <a
                  href={submittedEnquiry.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 h-11 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Icon name="chat" className="text-base text-secondary" />
                  <span>Open WhatsApp Conversation</span>
                </a>
                <button
                  onClick={() => setSubmittedEnquiry(null)}
                  className="w-full sm:w-auto px-5 h-11 rounded-lg bg-surface-container text-on-surface text-xs font-semibold hover:bg-surface-container-high transition-colors"
                >
                  New Enquiry
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop Form (>= md) */}
              <div className="hidden md:block">
                <DesktopSchedulerForm onSuccess={handleEnquirySuccess} />
              </div>

              {/* Mobile Form (< md) */}
              <div className="block md:hidden">
                <MobileSchedulerForm onSuccess={handleEnquirySuccess} />
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};
