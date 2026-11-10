'use client';

import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { getWhatsAppAppointmentUrl } from '../../config/clinic';

interface MobileSchedulerFormProps {
  onSuccess: (whatsappUrl: string, details: { patientName: string; treatment: string; date: string; timeSlot: string }) => void;
}

export const MobileSchedulerForm: React.FC<MobileSchedulerFormProps> = ({ onSuccess }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('Clear Aligners & Smile Design');
  const [branch, setBranch] = useState('Bengaluru Flagship - 100 Ft Rd, Indiranagar');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('Morning (10 AM - 1 PM)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      alert('Please enter your 10-digit mobile number.');
      return;
    }

    const whatsappUrl = getWhatsAppAppointmentUrl({
      patientName: patientName.trim(),
      phone: phone.trim(),
      treatment,
      branch,
      date,
      timeSlot: slot,
    });

    // Open WhatsApp directly
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }

    onSuccess(whatsappUrl, {
      patientName: patientName.trim(),
      treatment,
      date,
      timeSlot: slot,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      
      {/* 1. Patient Name */}
      <div className="flex flex-col gap-1">
        <label className="font-label-sm text-[13px] font-semibold text-on-surface">
          Patient Name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Rahul Sharma"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full h-12 px-3 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          required
        />
      </div>

      {/* 2. Treatment Select */}
      <div className="flex flex-col gap-1">
        <label className="font-label-sm text-[13px] font-semibold text-on-surface">
          Select Treatment
        </label>
        <div className="relative">
          <select
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className="w-full h-12 px-3 pr-9 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            required
          >
            <option value="Clear Aligners & Smile Design">Clear Aligners &amp; Smile Design (₹45,000+)</option>
            <option value="Microscopic Single-Sitting RCT">Microscopic Single-Sitting RCT (₹4,500+)</option>
            <option value="Swiss Titanium Dental Implants">Swiss Titanium Implant (₹28,000+)</option>
            <option value="Laser Teeth Whitening">Laser Teeth Whitening (₹6,000)</option>
            <option value="Pediatric Preventive Dentistry">Pediatric Preventive Care (₹1,500+)</option>
            <option value="Comprehensive Digital 3D Scan">Comprehensive Digital 3D Scan (₹500)</option>
          </select>
          <Icon name="expand_more" className="absolute right-3 top-3 text-on-surface-variant pointer-events-none" />
        </div>
      </div>

      {/* 3. Clinic Branch Select */}
      <div className="flex flex-col gap-1">
        <label className="font-label-sm text-[13px] font-semibold text-on-surface">
          Select Clinic Branch
        </label>
        <div className="relative">
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full h-12 px-3 pr-9 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            required
          >
            <option value="Bengaluru Flagship - 100 Ft Rd, Indiranagar">Bengaluru Flagship - 100 Ft Rd, Indiranagar</option>
            <option value="Mumbai Centre - Turner Rd, Bandra West">Mumbai Centre - Turner Rd, Bandra West</option>
          </select>
          <Icon name="expand_more" className="absolute right-3 top-3 text-on-surface-variant pointer-events-none" />
        </div>
      </div>

      {/* 4. Side-by-Side: Date & Slot Pickers */}
      <div className="grid grid-cols-2 gap-2 w-full min-w-0">
        <div className="flex flex-col gap-1 min-w-0">
          <label className="font-label-sm text-[12px] sm:text-[13px] font-semibold text-on-surface truncate">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full min-w-0 h-12 px-2 sm:px-2.5 rounded-lg bg-surface text-on-surface text-[12px] sm:text-[13px] focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            required
          />
        </div>

        <div className="flex flex-col gap-1 min-w-0">
          <label className="font-label-sm text-[12px] sm:text-[13px] font-semibold text-on-surface truncate">
            Preferred Slot
          </label>
          <div className="relative w-full min-w-0">
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full min-w-0 h-12 pl-2 pr-6 rounded-lg bg-surface text-on-surface text-[11px] sm:text-[12px] tracking-tight appearance-none focus:outline-none focus:ring-2 focus:ring-primary shadow-sm truncate"
              required
            >
              <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
              <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
              <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
              <option value="Emergency (Priority Slot)">Emergency (Priority Slot)</option>
            </select>
            <Icon name="expand_more" className="absolute right-1 top-3.5 text-on-surface-variant pointer-events-none text-[16px] sm:text-[18px]" />
          </div>
        </div>
      </div>

      {/* 5. Mobile Number Group */}
      <div className="flex flex-col gap-1">
        <label className="font-label-sm text-[13px] font-semibold text-on-surface">
          Mobile Number (for WhatsApp coordination) <span className="text-error">*</span>
        </label>
        <div className="flex items-center gap-1.5">
          <div className="h-12 px-3 rounded-lg bg-surface-container text-on-surface text-xs font-semibold flex items-center justify-center gap-1 shadow-sm shrink-0 border border-surface-container-high">
            <span>🇮🇳</span>
            <span>+91</span>
          </div>
          <input
            type="tel"
            placeholder="98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{10}"
            title="10-digit Indian Mobile Number"
            className="flex-1 h-12 px-3 rounded-lg bg-surface text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            required
          />
        </div>
      </div>

      {/* 6. Submit Button */}
      <button
        type="submit"
        className="w-full h-12 mt-1 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        <Icon name="chat" className="text-lg text-secondary" />
        <span>Enquire via WhatsApp</span>
      </button>

      {/* Direct WhatsApp Notice */}
      <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-on-surface-variant pt-1">
        <Icon name="verified_user" className="text-sm text-primary" />
        <span>Direct consultation request • Opens directly in WhatsApp</span>
      </div>

    </form>
  );
};
