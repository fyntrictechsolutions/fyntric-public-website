"use client";

import { crmStats } from "@/data/crmData";
import { MessageCircle, Share2 } from "lucide-react";

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Integration channels */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-crm-muted mb-4">
            Directly Integrated With Official Meta Business Platforms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-crm-muted">
            <div className="flex items-center gap-2 bg-crm-subtle px-4 py-2 rounded-xl border border-crm-border">
              <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-crm-charcoal">
                WhatsApp Business API
              </span>
            </div>

            <div className="flex items-center gap-2 bg-crm-subtle px-4 py-2 rounded-xl border border-crm-border">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 text-white flex items-center justify-center">
                <InstagramIcon className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold text-crm-charcoal">
                Instagram DMs & Comments
              </span>
            </div>

            <div className="flex items-center gap-2 bg-crm-subtle px-4 py-2 rounded-xl border border-crm-border">
              <div className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center">
                <FacebookIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-crm-charcoal">
                Meta Instant Lead Ads
              </span>
            </div>

            <div className="flex items-center gap-2 bg-crm-subtle px-4 py-2 rounded-xl border border-crm-border">
              <div className="w-6 h-6 rounded-full bg-crm-green text-white flex items-center justify-center">
                <Share2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm font-semibold text-crm-charcoal">
                Website & Landing Page Webhooks
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {crmStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-crm-bg rounded-2xl p-5 sm:p-6 border border-crm-border text-center hover:border-crm-green/40 transition-colors"
            >
              <div className="text-2xl sm:text-4xl font-black text-crm-green tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-crm-charcoal mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-crm-muted">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
