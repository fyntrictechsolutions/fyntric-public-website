"use client";

import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle,
} from "lucide-react";

interface FinalCtaProps {
  onOpenDemoModal: () => void;
}

export default function FinalCta({
  onOpenDemoModal,
}: FinalCtaProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-crm-dark via-crm-charcoal to-crm-green-deep text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-crm-green/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-crm-green-light text-xs font-semibold mb-6">
          <Zap className="w-3.5 h-3.5 text-crm-green-light" />
          <span>Limited Time Meta Ad Offer: Free 14-Day Full Access</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
          Stop Letting Hot WhatsApp & Meta Leads Slip to Competitors.
        </h2>

        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Get your entire sales team onto the AI Multi-Channel CRM today.
          Experience instant automated lead capture, WhatsApp chat, and 24h
          & 48h reminders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto flex-1 bg-crm-green hover:bg-crm-green-light text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-crm-green/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-base cursor-pointer"
          >
            <span>Claim Free Demo & 14-Day Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919995000000?text=Hi%2C%20I%20am%20interested%20in%20a%20demo%20of%20AI%20Multi-Channel%20CRM."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-crm-green-light" />
            No credit card required
          </span>
          <span>• 2-Minute WhatsApp Setup</span>
          <span>• Full Staff Training Included</span>
        </div>
      </div>
    </section>
  );
}