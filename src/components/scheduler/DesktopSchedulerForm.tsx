'use client';

import React, { useState } from 'react';
import { Icon } from '../ui/Icon';
import { getWhatsAppAppointmentUrl } from '../../config/clinic';

interface DesktopSchedulerFormProps {
  onSuccess: (whatsappUrl: string, details: { patientName: string; treatment: string; date: string; timeSlot: string }) => void;
}

export const DesktopSchedulerForm: React.FC<DesktopSchedulerFormProps> = ({ onSuccess }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('General Checkup & 3D Scan');
  const [branch, setBranch] = useState('Bengaluru Flagship - 100 Ft Rd, Indiranagar');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [slot, setSlot] = useState('Morning (10 AM – 1 PM)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      alert('Please enter your full name.');
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

    // Open WhatsApp in a new tab
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
      {/* 3-Column Responsive Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* 1. Patient Name */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Patient Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full h-12 px-3.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            required
          />
        </div>

        {/* 2. Mobile Number */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Mobile Number <span className="text-error">*</span>
          </label>
          <div className="relative">
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9+ -]{10,14}"
              title="Enter your 10-digit mobile number"
              className="w-full h-12 px-3.5 pl-10 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
              required
            />
            <Icon name="call" className="text-on-surface-variant absolute left-3 top-3 text-base" />
          </div>
        </div>

        {/* 3. Select Treatment */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Select Treatment
          </label>
          <div className="relative">
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full h-12 px-3.5 pr-8 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer shadow-sm"
            >
              <option value="General Checkup & 3D Scan">General Checkup &amp; 3D Scan</option>
              <option value="Clear Aligners & Smile Design">Clear Aligners &amp; Smile Design</option>
              <option value="Microscopic Root Canal (RCT)">Microscopic Root Canal (RCT)</option>
              <option value="Swiss Titanium Dental Implants">Swiss Titanium Dental Implants</option>
              <option value="Laser Teeth Whitening">Laser Teeth Whitening</option>
              <option value="Pediatric Gentle Dentistry">Pediatric Gentle Dentistry</option>
              <option value="Complete Full Mouth Rehab">Complete Full Mouth Rehab</option>
            </select>
            <Icon name="expand_more" className="text-on-surface-variant absolute right-3 top-3 pointer-events-none text-base" />
          </div>
        </div>

        {/* 4. Select Clinic Branch */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Select Clinic Branch
          </label>
          <div className="relative">
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full h-12 px-3.5 pr-8 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer shadow-sm"
            >
              <option value="Bengaluru Flagship - 100 Ft Rd, Indiranagar">Bengaluru Flagship (Indiranagar)</option>
              <option value="Mumbai Centre - Turner Rd, Bandra West">Mumbai Centre (Bandra West)</option>
            </select>
            <Icon name="location_on" className="text-on-surface-variant absolute right-3 top-3 pointer-events-none text-base" />
          </div>
        </div>

        {/* 5. Preferred Date */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split('T')[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-12 px-3.5 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer shadow-sm"
            required
          />
        </div>

        {/* 6. Preferred Time */}
        <div className="flex flex-col gap-1.5">
          <label className="font-label-sm text-label-sm font-semibold text-on-surface">
            Preferred Time Slot
          </label>
          <div className="relative">
            <select
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              className="w-full h-12 px-3.5 pr-8 bg-surface-container-low rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer shadow-sm"
            >
              <option value="Morning (10 AM – 1 PM)">Morning (10 AM – 1 PM)</option>
              <option value="Afternoon (2 PM – 5 PM)">Afternoon (2 PM – 5 PM)</option>
              <option value="Evening (5 PM – 8 PM)">Evening (5 PM – 8 PM)</option>
              <option value="Priority Emergency Slot">Priority Emergency Slot</option>
            </select>
            <Icon name="schedule" className="text-on-surface-variant absolute right-3 top-3 pointer-events-none text-base" />
          </div>
        </div>

      </div>

      {/* Action Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-surface-container">
        <div className="flex items-center gap-2 text-xs text-on-surface-variant">
          <Icon name="chat" className="text-secondary text-base" />
          <span>Enquiry message will open directly in WhatsApp with the clinic reception desk.</span>
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
        >
          <Icon name="chat" className="text-[18px]" />
          <span>Enquire via WhatsApp</span>
        </button>
      </div>

    </form>
  );
};
