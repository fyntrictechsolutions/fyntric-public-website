"use client";

import { useState } from "react";
import { faqs } from "@/data/crmData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number): void => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-white border-b border-crm-border"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-crm-green-soft text-crm-green border border-crm-green-border mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            Got Questions? We Have Answers.
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-2">
            Everything you need to know about setting up AI Multi-Channel CRM
            with your Meta ad accounts.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-crm-bg rounded-2xl border border-crm-border overflow-hidden transition-all hover:border-crm-green/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-crm-charcoal text-sm sm:text-base focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>

                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-crm-border flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen
                        ? "rotate-180 bg-crm-green-soft text-crm-green"
                        : "text-crm-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-crm-muted leading-relaxed border-t border-crm-border/60 pt-4 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}