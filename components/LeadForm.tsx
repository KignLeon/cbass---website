
import React, { useState } from 'react';
import { LeadFormValues } from '../types';

interface LeadFormProps {
  title?: string;
  buttonText?: string;
  isModal?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Get a Solar or Electrical Consultation", 
  buttonText = "Get My Consultation",
  isModal = false 
}) => {
  const [form, setForm] = useState<LeadFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    interest: 'Solar Installation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-amber-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fa-solid fa-check text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="text-slate-600">We'll reach out to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className={`${isModal ? '' : 'glass-card border border-white/20 shadow-2xl p-6 md:p-8 rounded-2xl'}`}>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">First Name</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              type="text" 
              placeholder="John" 
              value={form.firstName}
              onChange={(e) => setForm({...form, firstName: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Last Name</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              type="text" 
              placeholder="Doe"
              value={form.lastName}
              onChange={(e) => setForm({...form, lastName: e.target.value})}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
          <input 
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            type="email" 
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
          <input 
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            type="tel" 
            placeholder="(480) 000-0000"
            value={form.phone}
            onChange={(e) => setForm({...form, phone: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Service Interest</label>
          <select 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all appearance-none"
            value={form.interest}
            onChange={(e) => setForm({...form, interest: e.target.value})}
          >
            <option>Solar Installation</option>
            <option>Solar Maintenance</option>
            <option>Tesla Powerwall</option>
            <option>Electrical Repair</option>
            <option>EV Charger</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-amber-500/30 transition-all transform hover:-translate-y-1 active:scale-95"
        >
          {buttonText}
        </button>
        <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight">
          No pressure · No obligation · Arizona Licensed · Fast 24h Response
        </p>
      </form>
    </div>
  );
};

export default LeadForm;
