
"use client";

import { useState } from "react";
import {
  MessageSquare,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export default function Navbar({ onOpenDemoModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-crm-green flex items-center justify-center text-white shadow-md shadow-crm-green/20 group-hover:bg-crm-green-dark transition-colors">
              <MessageSquare className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-crm-charcoal text-lg sm:text-xl tracking-tight leading-tight">
                AI Multi-Channel <span className="text-crm-green">CRM</span>
              </span>

              <span className="text-[10px] tracking-wider font-semibold uppercase text-crm-muted">
                Customer Intelligence
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-crm-muted hover:text-crm-green transition-colors">
              Features
            </a>
            <a href="#preview" className="text-sm font-medium text-crm-muted hover:text-crm-green transition-colors">
              CRM Preview
            </a>
            <a href="#calculator" className="text-sm font-medium text-crm-muted hover:text-crm-green transition-colors">
              ROI Calculator
            </a>
            <a href="#faq" className="text-sm font-medium text-crm-muted hover:text-crm-green transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-crm-green-dark bg-crm-green-soft px-3 py-1.5 rounded-full font-medium border border-crm-green-border">
              <ShieldCheck className="w-4 h-4 text-crm-green" />
              <span>Official Meta & WhatsApp Partner</span>
            </div>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="inline-flex items-center gap-2 bg-crm-green hover:bg-crm-green-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-crm-green/20 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-crm-muted hover:text-crm-charcoal hover:bg-crm-subtle focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-crm-border px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-crm-slate hover:bg-crm-green-soft hover:text-crm-green"
          >
            Features
          </a>

          <a
            href="#preview"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-crm-slate hover:bg-crm-green-soft hover:text-crm-green"
          >
            CRM Dashboard Preview
          </a>

          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-crm-slate hover:bg-crm-green-soft hover:text-crm-green"
          >
            ROI Calculator
          </a>

          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-crm-slate hover:bg-crm-green-soft hover:text-crm-green"
          >
            FAQ
          </a>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-crm-green hover:bg-crm-green-dark text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-crm-green/20 transition-colors"
            >
              <span>Get Free Demo & 14-Day Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
