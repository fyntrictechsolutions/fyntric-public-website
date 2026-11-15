"use client";

import { painPoints } from "@/data/crmData";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProblemVsSolution({ onOpenDemoModal }) {
  return (
    <section className="py-16 sm:py-24 bg-crm-bg border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 mb-3">
            Why 70% of Meta Ad Budgets Are Wasted
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            The Difference Between Wasted Ad Spend and Predictable Revenue
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-3">
            Every minute an ad lead sits waiting on WhatsApp or Instagram, your chance of conversion drops by 391%. Here is how AI Multi-Channel CRM fixes it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Old Way */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  Without CRM (Manual Chaos)
                </span>
                <span className="text-2xl">⚠️</span>
              </div>

              <h3 className="text-xl font-bold text-crm-charcoal mb-4">
                Losing 40% - 60% of interested buyers
              </h3>

              <ul className="space-y-4">
                {painPoints.withoutCrm.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-crm-slate">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-crm-subtle bg-red-50/50 -mx-6 -mb-6 p-6 rounded-b-3xl">
              <p className="text-xs text-red-800 font-semibold text-center">
                Result: High cost per lead, low ROI, and frustrated sales reps.
              </p>
            </div>
          </div>

          {/* New Way */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-crm-green shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-2 bg-crm-green" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-crm-green bg-crm-green-soft px-3 py-1 rounded-full border border-crm-green-border">
                  With AI Multi-Channel CRM
                </span>
                <span className="text-2xl">🚀</span>
              </div>

              <h3 className="text-xl font-bold text-crm-charcoal mb-4">
                Automated lead capture & instant conversions
              </h3>

              <ul className="space-y-4">
                {painPoints.withCrm.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-crm-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-crm-slate font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-crm-subtle bg-crm-green-soft/70 -mx-6 -mb-6 p-6 rounded-b-3xl flex items-center justify-between">
              <span className="text-xs font-bold text-crm-green-dark">
                Result: 3.2x faster response, 0% lead loss.
              </span>

              <button
                onClick={onOpenDemoModal}
                className="text-xs font-bold text-white bg-crm-green hover:bg-crm-green-dark px-3.5 py-1.5 rounded-lg flex items-center gap-1 shadow transition-all cursor-pointer"
              >
                <span>Try It Free</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
