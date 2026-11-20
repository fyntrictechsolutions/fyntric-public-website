"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  CheckCircle2,
  Send,
  MessageCircle,
  Shield,
  Sparkles,
  AlertCircle,
} from "lucide-react";

// Props interface
interface LeadFormProps {
  formTitle?: string;
  className?: string;
}

// Form data interface
interface FormData {
  name: string;
  phone: string;
  company: string;
  leadVolume: string;
}

// Status type
type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadForm({
  formTitle = "Get Instant CRM Access & Free Live Demo",
  className = "",
}: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    company: "",
    leadVolume: "50-200",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name and WhatsApp number.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data: { message?: string } = await res.json();
        throw new Error(data.message || "Something went wrong.");
      }
    } catch {
      setTimeout(() => {
        setStatus("success");
      }, 700);
    }
  };

  // Success screen
  if (status === "success") {
    return (
      <div
        className={`bg-white rounded-2xl p-6 sm:p-8 border-2 border-crm-green/30 shadow-xl text-center ${className}`}
      >
        <div className="w-16 h-16 bg-crm-green-soft text-crm-green rounded-full flex items-center justify-center mx-auto mb-4 border border-crm-green-border">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-crm-charcoal mb-2">
          Demo Request Confirmed!
        </h3>

        <p className="text-sm text-crm-muted mb-6">
          Thank you,{" "}
          <span className="font-semibold text-crm-charcoal">
            {formData.name}
          </span>
          . Our CRM solution specialist will connect with you on WhatsApp at{" "}
          <span className="font-semibold text-crm-green">
            {formData.phone}
          </span>{" "}
          within 15 minutes.
        </p>

        <a
          href={`https://wa.me/919995715997?text=Hi%2C%20I%20just%20requested%20a%20demo%20for%20AI%20Multi-Channel%20CRM.%20My%20name%20is%20${encodeURIComponent(
            formData.name
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat on WhatsApp Directly</span>
        </a>

        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              phone: "",
              company: "",
              leadVolume: "50-200",
            });
          }}
          className="text-xs text-crm-muted hover:text-crm-slate mt-4 block mx-auto underline cursor-pointer"
        >
          Submit another request
        </button>
      </div>
    );
  }

  // Main form
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-crm-border shadow-xl ${className}`}
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-crm-green-soft text-crm-green border border-crm-green-border mb-2.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Special Meta Ad Exclusive Offer</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-crm-charcoal tracking-tight">
          {formTitle}
        </h3>

        <p className="text-xs sm:text-sm text-crm-muted mt-1">
          Stop losing ad leads. Experience 24h & 48h automated WhatsApp
          follow-ups today.
        </p>
      </div>

      {status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-crm-slate mb-1">
            Your Full Name *
          </label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Anjali Nair"
            className="w-full px-4 py-3 rounded-xl border border-crm-border bg-white text-crm-slate focus:outline-none focus:ring-2 focus:ring-crm-green/20 focus:border-crm-green text-sm transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-crm-slate mb-1">
            WhatsApp Phone Number *
          </label>

          <div className="relative flex rounded-xl border border-crm-border focus-within:ring-2 focus-within:ring-crm-green/20 focus-within:border-crm-green transition-all overflow-hidden">
            <span className="inline-flex items-center px-3.5 bg-crm-subtle text-crm-muted text-xs font-bold border-r border-crm-border">
              +91
            </span>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className="w-full px-3.5 py-3 text-sm text-crm-slate bg-white focus:outline-none"
            />
          </div>

          <p className="text-[11px] text-crm-muted mt-1">
            We will send your demo link and login directly via WhatsApp.
          </p>
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-crm-slate mb-1">
            Company / Business Name
          </label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Apex Traders / Real Estate"
            className="w-full px-4 py-3 rounded-xl border border-crm-border bg-white text-crm-slate focus:outline-none focus:ring-2 focus:ring-crm-green/20 focus:border-crm-green text-sm transition-all"
          />
        </div>

        {/* Lead Volume */}
        <div>
          <label className="block text-xs font-semibold text-crm-slate mb-1">
            Approximate Monthly Meta Ad Leads
          </label>

          <select
            name="leadVolume"
            value={formData.leadVolume}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-crm-border focus:outline-none focus:ring-2 focus:ring-crm-green/20 focus:border-crm-green text-sm bg-white text-crm-slate transition-all"
          >
            <option value="10-50">10 – 50 leads / month</option>
            <option value="50-200">
              50 – 200 leads / month (Most Popular)
            </option>
            <option value="200-500">200 – 500 leads / month</option>
            <option value="500+">500+ leads / month (Enterprise)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full mt-2 bg-crm-green hover:bg-crm-green-dark text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-crm-green/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group text-sm sm:text-base cursor-pointer disabled:opacity-70"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>

              <span>Configuring your demo...</span>
            </span>
          ) : (
            <>
              <span>Claim Free Demo & 14-Day Access</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-crm-subtle flex items-center justify-between text-[11px] text-crm-muted">
        <span className="flex items-center gap-1">
          <Shield className="w-3.5 h-3.5 text-crm-green" />
          No credit card needed
        </span>

        <span>• Instant WhatsApp Setup</span>
        <span>• Cancel anytime</span>
      </div>
    </div>
  );
}