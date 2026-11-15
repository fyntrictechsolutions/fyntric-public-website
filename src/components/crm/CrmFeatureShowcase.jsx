"use client";

import { coreModules } from "@/data/crmData";
import {
  MessageSquare,
  Clock,
  Users,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  leads: MessageSquare,
  reminders: Clock,
  roles: Users,
  messages: MessageCircle,
  analytics: TrendingUp,
};

export default function CrmFeatureShowcase({ onOpenDemoModal }) {
  return (
    <section id="features" className="py-16 sm:py-24 bg-crm-bg border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-crm-green-soft text-crm-green border border-crm-green-border mb-3">
            Core CRM Capabilities
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            Engineered Specifically to Turn Meta Ad Clicks into Revenue
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-3">
            Every feature you saw in our CRM demo was built to remove friction, automate follow-ups, and ensure zero leads slip through the cracks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreModules.map((module) => {
            const Icon = iconMap[module.id] || MessageSquare;

            return (
              <div
                key={module.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-crm-border shadow-sm hover:shadow-xl hover:border-crm-green/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-crm-green-soft text-crm-green flex items-center justify-center border border-crm-green-border group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-crm-green bg-crm-green-soft px-2.5 py-1 rounded-full border border-crm-green-border">
                      {module.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-crm-charcoal mb-2 group-hover:text-crm-green transition-colors">
                    {module.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-crm-muted leading-relaxed mb-5">
                    {module.description}
                  </p>

                  <div className="space-y-2.5 border-t border-crm-subtle pt-4">
                    {module.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-crm-green flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-crm-slate font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-crm-subtle flex items-center justify-between text-xs text-crm-muted">
                  <span className="italic truncate max-w-[200px]">{module.videoReference}</span>

                  <button
                    onClick={onOpenDemoModal}
                    className="text-crm-green font-bold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="bg-gradient-to-br from-crm-dark via-crm-charcoal to-crm-green-deep rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-crm-green/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-crm-green-light bg-white/10 px-3 py-1 rounded-full border border-white/20">
                24-Hour Setup
              </span>

              <h3 className="text-xl sm:text-2xl font-black mt-4 mb-3 tracking-tight">
                Want this exact CRM running for your business?
              </h3>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Connect your Meta ad account, WhatsApp number, and invite your sales reps today with zero technical hassle.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenDemoModal}
                className="w-full bg-crm-green hover:bg-crm-green-light text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-crm-green/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Book 1-on-1 Setup Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-white/60 text-center mt-2">
                14-day risk-free trial included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
