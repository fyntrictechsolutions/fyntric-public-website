"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

export default function MobileFloatingCta({ onOpenDemoModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom-2">
      <div className="flex items-center gap-2">
        <a
          href="https://wa.me/919995000000?text=Hi%2C%20I%20am%20interested%20in%20a%20demo%20of%20AI%20Multi-Channel%20CRM."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25D366] active:bg-[#1EBE5D] text-white text-xs font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenDemoModal}
          className="flex-[2] bg-crm-green active:bg-crm-green-dark text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-crm-green/30 cursor-pointer"
        >
          <span>Claim Free Demo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
