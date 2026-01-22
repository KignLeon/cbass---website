
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import Modal from './components/Modal';
import { CONTACT_INFO, SERVICES, PARTNERS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* --- SECTION 1: HERO --- */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&w=1600&q=80" 
            alt="Solar installation in Arizona" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT COLUMN: Messaging */}
          <div className="text-white space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest">Licensed · Bonded · Insured</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Arizona’s Trusted <br />
              <span className="text-amber-500">Solar & Electrical</span> Experts
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium">
              Installation, Maintenance & Repair — backed by 14+ years of experience and 10,000+ homeowners served.
            </p>

            <div className="flex flex-wrap gap-6 text-sm md:text-base font-semibold">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-star text-amber-500"></i>
                A+ BBB Accredited
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-circle-check text-amber-500"></i>
                Free Project Estimates
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-amber-500"></i>
                Local AZ Technicians
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
                className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-amber-500/40 hover:-translate-y-1"
              >
                <i className="fa-solid fa-phone animate-shake"></i>
                {CONTACT_INFO.phone}
              </a>
              <button 
                onClick={openModal}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white border border-white/30 px-8 py-5 rounded-2xl font-bold text-xl transition-all"
              >
                Request Free Quote
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Lead Capture */}
          <div className="hidden lg:block">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: WHY INTEGRITY --- */}
      <section id="why-integrity" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">Our Difference</h2>
            <p className="text-4xl md:text-5xl font-black text-slate-900">Why Solar with Integrity?</p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just install panels; we build energy independence with elite-level craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "fa-hand-holding-dollar", title: "$0 Down Options", desc: "Start saving from day one with flexible financing that fits your budget." },
              { icon: "fa-certificate", title: "30% Tax Credit", desc: "Maximize your investment with federal solar incentives and local rebates." },
              { icon: "fa-shield-halved", title: "25-Year Warranty", desc: "Full peace of mind coverage on parts, labor, and energy production." },
              { icon: "fa-chart-line", title: "Monthly Savings", desc: "Stop renting your power. Own your energy and lock in low rates forever." },
              { icon: "fa-house-circle-check", title: "Boost Home Value", desc: "Solar homes sell faster and for significantly more than non-solar homes." },
              { icon: "fa-wrench", title: "Certified Techs", desc: "All work is performed by licensed, bonded, and local Arizona experts." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SERVICES --- */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
              <div className="bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest inline-block">Revenue Drivers</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Elite Solar & Electrical <br />Solutions</h2>
              <p className="text-xl text-slate-600">Comprehensive services for residential and commercial properties throughout Arizona.</p>
              
              <div className="grid grid-cols-1 gap-12 pt-8">
                {/* Solar Services Block */}
                <div>
                  <h4 className="flex items-center gap-3 text-2xl font-black text-slate-900 mb-6">
                    <span className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-white text-sm"><i className="fa-solid fa-sun"></i></span>
                    Solar Services
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.solar.map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <i className="fa-solid fa-circle-check text-amber-500 text-sm"></i>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Electrical Services Block */}
                <div>
                  <h4 className="flex items-center gap-3 text-2xl font-black text-slate-900 mb-6">
                    <span className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-sm"><i className="fa-solid fa-bolt"></i></span>
                    Electrical Services
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.electrical.map((s, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <i className="fa-solid fa-circle-check text-slate-900 text-sm"></i>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                 <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
                  className="inline-flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
                >
                  <i className="fa-solid fa-user-gear"></i>
                  Speak With a Technician
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                  alt="Technician working on panel" 
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-8 bg-amber-500 text-white p-8 rounded-3xl shadow-2xl animate-float">
                <div className="text-4xl font-black mb-1">10,000+</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-90">Systems Installed</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: TESLA POWERWALL --- */}
      <section id="tesla" className="py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" className="h-6 invert" alt="Tesla Logo" />
                <span className="h-8 w-[1px] bg-slate-700"></span>
                <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Certified Installer</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight">Energy Security with <br />Tesla Powerwall</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Store your solar energy for when the sun goes down or during utility outages. Power your home with clean, reliable, and automatic energy.
              </p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-bolt-lightning text-amber-500 mt-1"></i>
                  <span><strong>Whole-Home Backup:</strong> Protection during blackouts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-leaf text-amber-500 mt-1"></i>
                  <span><strong>Peak Shaving:</strong> Use stored energy during expensive utility hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-mobile-screen text-amber-500 mt-1"></i>
                  <span><strong>Smart Control:</strong> Manage everything from the Tesla app.</span>
                </li>
              </ul>
              <div className="pt-6">
                <button 
                  onClick={openModal}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-amber-500/20"
                >
                  <i className="fa-solid fa-battery-full mr-2"></i>
                  Ask About Powerwall
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1620714223084-8dfacc6dfd8d?auto=format&fit=crop&w=800&q=80" 
                  alt="Tesla Powerwall Install" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SOCIAL PROOF --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
               <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm">Testimonials</h2>
               <p className="text-4xl md:text-5xl font-black text-slate-900">What Arizona Says</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
              <div className="flex text-amber-500">
                {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
              </div>
              <span className="font-bold text-slate-900">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 italic text-xl text-slate-700 relative">
              <i className="fa-solid fa-quote-left absolute top-8 left-8 text-amber-500/20 text-6xl"></i>
              <p className="relative z-10">"Very professional. Explained everything clearly and did an excellent job. Our energy bill has plummeted since the installation."</p>
              <div className="mt-8 not-italic flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <div className="font-bold text-slate-900">Ariel G.</div>
                  <div className="text-sm text-slate-500">Phoenix, AZ</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 italic text-xl text-slate-700 relative">
              <i className="fa-solid fa-quote-left absolute top-8 left-8 text-amber-500/20 text-6xl"></i>
              <p className="relative z-10">"Muy profesional. Respondió todas mis preguntas y todo quedó perfecto. El equipo fue rápido y muy limpio durante el trabajo."</p>
              <div className="mt-8 not-italic flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">J</div>
                <div>
                  <div className="font-bold text-slate-900">Jonathan R.</div>
                  <div className="text-sm text-slate-500">Scottsdale, AZ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CREDENTIALS --- */}
      <section className="py-12 border-t border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">Trusted Partners & Technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            {PARTNERS.map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="h-8 md:h-12 w-auto object-contain" />
            ))}
            <span className="text-xl md:text-2xl font-black text-slate-900">Power Home Remodeling</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL CTA --- */}
      <section className="py-24 bg-amber-500">
        <div className="max-w-7xl mx-auto px-6 text-center text-white space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">Ready to Lower Your Energy Bills?</h2>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-90">
            Join thousands of Arizona families saving $1,500+ annually with solar. Your consultation is completely free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
              className="bg-white text-amber-600 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <i className="fa-solid fa-phone mr-2"></i>
              {CONTACT_INFO.phone}
            </a>
            <button 
              onClick={openModal}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all hover:bg-black hover:scale-105 active:scale-95"
            >
              Request Free Consultation
            </button>
          </div>
          <p className="text-sm font-bold tracking-widest uppercase opacity-80 pt-4">
            Licensed · Bonded · Insured · Arizona Based
          </p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 w-8 h-8 rounded flex items-center justify-center text-white font-black text-sm">
              I
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900">
              {CONTACT_INFO.logoText} <span className="text-amber-500 font-normal">ELECTRICAL</span>
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-semibold">
            <a href="mailto:jmunoz@integrityelectricalco.com" className="hover:text-amber-500 transition-colors">
              <i className="fa-solid fa-envelope mr-2"></i>
              {CONTACT_INFO.email}
            </a>
            <span className="text-slate-300">|</span>
            <span>Arizona ROC #315000</span>
            <span className="text-slate-300">|</span>
            <span>© {new Date().getFullYear()} Integrity Electrical Contracting LLC</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all border border-slate-100">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all border border-slate-100">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>

      {/* --- FLOATING ACTION BUTTON --- */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Enticing Popup Tooltip */}
        <div className="bg-white px-4 py-2 rounded-xl shadow-2xl border border-amber-100 text-slate-900 text-xs font-bold animate-float whitespace-nowrap mb-1">
          <span className="text-amber-500">⚡ New:</span> $0 Down Solar Options!
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white border-r border-b border-amber-100 rotate-45"></div>
        </div>
        
        <button 
          onClick={openModal}
          className="bg-amber-500 hover:bg-amber-600 text-white w-16 h-16 rounded-full shadow-2xl shadow-amber-500/50 flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 group relative"
        >
          <i className="fa-solid fa-file-invoice-dollar"></i>
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Free Estimate
          </span>
        </button>

        <a 
          href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
          className="bg-slate-900 hover:bg-black text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110 active:scale-95 sm:hidden"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      {/* --- LEAD MODAL --- */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm isModal={true} title="Secure Your Free Quote" buttonText="Check My Eligibility" />
      </Modal>

      {/* --- STICKY MOBILE CALL BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden">
        <div className="bg-white/80 backdrop-blur-lg border-t border-slate-200 p-4 flex gap-4">
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
            className="flex-1 bg-amber-500 text-white text-center font-black py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-phone"></i>
            CALL NOW
          </a>
          <button 
            onClick={openModal}
            className="flex-1 bg-slate-900 text-white text-center font-black py-4 rounded-xl shadow-lg"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
