import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="mb-6 flex flex-col items-start">
            <img
              src={logo}
              alt="SQUARE MEDICAL BILLING logo"
              className="h-14 w-auto mb-2 object-contain"
            />
            <h4 className="text-sm font-black tracking-[0.1em] text-white uppercase">
              SQUARE MEDICAL BILLING
            </h4>
            <p className="text-[0.6rem] font-bold tracking-[0.2em] text-white/80 uppercase">
              TRUST-GROW-SUCCESS
            </p>
          </div>
          <p className="text-sm text-gray-400">
            Your trusted partner in healthcare revenue cycle management.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cyan-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-300">About</Link></li>
            <li><Link to="/services" className="hover:text-cyan-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-white">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Medical Transcription</li>
            <li>Medical Coding</li>
            <li>Charge Entry</li>
            <li>AR Calling</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-semibold text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 +91 96008 29498</li>
            <li>📧 office@squaremedicalbilling.in</li>
            <li>⏰ Available 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-gray-500">
        © 2026 SQUARE MEDICAL BILLING. All rights reserved. | HIPAA Compliant
      </div>
    </footer>
  );
}
