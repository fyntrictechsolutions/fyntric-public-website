
"use client";

import { useState } from "react";
import { Calculator, Sparkles, ArrowRight } from "lucide-react";

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

export default function RoiCalculator({
  onOpenDemoModal,
}: RoiCalculatorProps) {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(150);
  const [dealValue, setDealValue] = useState<number>(8000);

  const currentConversionRate = 0.08;
  const crmConversionRate = 0.14;

  const currentDeals = Math.round(monthlyLeads * currentConversionRate);
  const crmDeals = Math.round(monthlyLeads * crmConversionRate);
  const extraDeals = Math.max(1, crmDeals - currentDeals);
  const extraRevenue = extraDeals * dealValue;

  return (
    <section
      id="calculator"
      className="py-16 sm:py-24 bg-white border-b border-crm-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-crm-green-soft text-crm-green border border-crm-green-border mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Profit Tool</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            Calculate How Much Lost Revenue You Can Recover
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-3">
            See the financial impact of instant WhatsApp auto-replies and
            24h/48h automated follow-up reminders on your business.
          </p>
        </div>

        <div className="bg-crm-bg rounded-3xl p-6 sm:p-10 border border-crm-border shadow-xl max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-crm-charcoal">
                  Monthly Leads from Meta / WhatsApp:
                </label>

                <span className="text-base font-black text-crm-green bg-white px-3 py-1 rounded-xl border border-crm-border shadow-xs font-mono">
                  {monthlyLeads} leads
                </span>
              </div>

              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={monthlyLeads}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMonthlyLeads(Number(e.target.value))
                }
                className="w-full h-2.5 bg-crm-border rounded-lg appearance-none cursor-pointer accent-crm-green"
              />

              <div className="flex justify-between text-[11px] text-crm-muted mt-1 font-mono">
                <span>20 leads</span>
                <span>500 leads</span>
                <span>1,000 leads</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-crm-charcoal">
                  Average Revenue / Profit Per Closed Deal:
                </label>

                <span className="text-base font-black text-crm-green bg-white px-3 py-1 rounded-xl border border-crm-border shadow-xs font-mono">
                  ₹{dealValue.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={dealValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDealValue(Number(e.target.value))
                }
                className="w-full h-2.5 bg-crm-border rounded-lg appearance-none cursor-pointer accent-crm-green"
              />

              <div className="flex justify-between text-[11px] text-crm-muted mt-1 font-mono">
                <span>₹1,000</span>
                <span>₹25,000</span>
                <span>₹50,000</span>
              </div>
            </div>

            <div className="text-xs text-crm-muted bg-white p-3.5 rounded-xl border border-crm-border">
              💡{" "}
              <em>
                Based on 14.3% average closing conversion measured across active
                AI Multi-Channel CRM workspaces.
              </em>
            </div>
          </div>

          <div className="md:col-span-5 bg-gradient-to-br from-crm-green-dark to-crm-green rounded-2xl p-6 sm:p-8 text-white shadow-lg text-center flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-[11px] font-semibold text-crm-green-light mb-4 border border-white/10">
                <Sparkles className="w-3 h-3 text-crm-green-light" />
                <span>Estimated Monthly Gain</span>
              </div>

              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
                +₹{extraRevenue.toLocaleString("en-IN")}
              </div>

              <p className="text-xs text-white/75 font-medium">
                Extra monthly revenue recovered
              </p>

              <div className="my-6 border-t border-white/20 pt-4 space-y-2 text-xs text-left">
                <div className="flex justify-between text-white/75">
                  <span>Additional closed deals:</span>
                  <span className="font-bold text-white">
                    +{extraDeals} deals/mo
                  </span>
                </div>

                <div className="flex justify-between text-white/75">
                  <span>Follow-up response rate:</span>
                  <span className="font-bold text-white">99.8% (Instant)</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="w-full bg-white hover:bg-crm-green-soft text-crm-green font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <span>Claim Your Free Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
