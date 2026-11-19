
"use client";

import { testimonials } from "@/data/crmData";
import { Star, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-crm-bg border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-crm-green-soft text-crm-green border border-crm-green-border mb-3">
            Real Customer Results
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            How Businesses Scale With AI Multi-Channel CRM
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-3">
            Read how businesses in real estate, e-commerce, and high-ticket sales transformed their Meta ad conversion rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-crm-border shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: t.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-xs font-bold text-crm-green bg-crm-green-soft px-2.5 py-1 rounded-full border border-crm-green-border">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-crm-slate italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-crm-subtle">
                <div className="w-10 h-10 rounded-full bg-crm-green text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-crm-charcoal flex items-center gap-1">
                    {t.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-crm-green" />
                  </h4>

                  <p className="text-xs text-crm-muted font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
