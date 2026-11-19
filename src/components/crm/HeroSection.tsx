"use client";

import { CheckCircle2, Star, Play } from "lucide-react";
import LeadForm from "./LeadForm";

interface HeroSectionProps {
  onOpenDemoModal: () => void;
}

export default function HeroSection({
  onOpenDemoModal,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-crm-bg to-white border-b border-crm-border">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-crm-green/10 via-crm-green-light/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Conversion Copy & Proof */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-crm-green-soft border border-crm-green-border text-crm-green text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-crm-green animate-ping" />
              <span>AI Multi-Channel CRM for High-Growth Teams</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-crm-charcoal tracking-tight leading-[1.15]">
              Never Lose Another Lead From{" "}
              <span className="text-crm-green underline decoration-crm-green/30 decoration-wavy">
                WhatsApp, Instagram
              </span>{" "}
              & Meta Ads.
            </h1>

            <p className="text-base sm:text-lg text-crm-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-crm-charcoal font-semibold">
                Customer intelligence, unified.
              </strong>{" "}
              Manage every customer conversation in one place, trigger
              automatic 24h & 48h reminders, and turn meaningful inquiries into
              closed deals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crm-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-crm-slate font-medium">
                  <strong>Zero Lead Leakage:</strong> Auto-capture from
                  WhatsApp, IG & Meta Ads
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crm-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-crm-slate font-medium">
                  <strong>Smart Reminders:</strong> 24h & 48h automated
                  follow-up sequences
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crm-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-crm-slate font-medium">
                  <strong>Dedicated Workspaces:</strong> Admin, Sales Manager
                  & Rep dashboards
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crm-green flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-crm-slate font-medium">
                  <strong>Built-in WhatsApp Chat:</strong> Message leads
                  directly inside CRM
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer"
                  />
                </div>

                <div className="text-left">
                  <div className="flex items-center text-crm-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-crm-accent text-crm-accent"
                      />
                    ))}
                    <span className="ml-1.5 font-bold text-crm-charcoal text-sm">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-xs text-crm-muted font-medium">
                    Trusted by 500+ Indian Businesses
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-crm-border" />

              <a
                href="#preview"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-crm-green hover:text-crm-green-dark hover:underline"
              >
                <div className="w-8 h-8 rounded-full bg-crm-green-soft flex items-center justify-center text-crm-green border border-crm-green-border">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-crm-green" />
                </div>
                <span>See CRM Walkthrough</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Converting Sticky Lead Form */}
          <div className="lg:col-span-5 max-w-md mx-auto w-full">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}