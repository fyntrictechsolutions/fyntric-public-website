
"use client";

import { useState } from "react";
import {
  Bell,
  Clock,
  Send,
  Shield,
  Smartphone,
} from "lucide-react";

interface DashboardPreviewProps {
  onOpenDemoModal: () => void;
}

type DashboardTab = "admin" | "leads" | "chat" | "salesperson";

export default function DashboardPreview({
  onOpenDemoModal,
}: DashboardPreviewProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>("admin");

  return (
    <section id="preview" className="py-16 sm:py-24 bg-white border-b border-crm-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-crm-green-soft text-crm-green border border-crm-green-border mb-3">
            <span>Inside AI Multi-Channel CRM</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-crm-charcoal tracking-tight">
            Built for High-Performance Sales Operations
          </h2>

          <p className="text-sm sm:text-base text-crm-muted mt-3">
            Interactive preview of the actual dashboards showcased in our product video. Explore the Admin, Leads pipeline, and Sales Rep workspaces.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-crm-subtle rounded-2xl max-w-2xl mx-auto border border-crm-border">
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-white text-crm-green shadow-md border border-crm-border"
                  : "text-crm-muted hover:text-crm-charcoal"
              }`}
            >
              Admin Dashboard
            </button>

            <button
              onClick={() => setActiveTab("leads")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "leads"
                  ? "bg-white text-crm-green shadow-md border border-crm-border"
                  : "text-crm-muted hover:text-crm-charcoal"
              }`}
            >
              Omnichannel Leads
            </button>

            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "chat"
                  ? "bg-white text-crm-green shadow-md border border-crm-border"
                  : "text-crm-muted hover:text-crm-charcoal"
              }`}
            >
              WhatsApp Inbox
            </button>

            <button
              onClick={() => setActiveTab("salesperson")}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "salesperson"
                  ? "bg-white text-crm-green shadow-md border border-crm-border"
                  : "text-crm-muted hover:text-crm-charcoal"
              }`}
            >
              Sales Rep & 24h Reminders
            </button>
          </div>
        </div>

        <div className="bg-crm-warm rounded-3xl border-2 border-crm-border shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="bg-white px-4 py-3 border-b border-crm-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />

              <div className="ml-3 hidden sm:flex items-center gap-2 bg-crm-subtle border border-crm-border px-3 py-1 rounded-lg text-xs text-crm-muted font-mono">
                <Shield className="w-3.5 h-3.5 text-crm-green" />
                <span>crm.yourbusiness.com/admin/dashboard</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-crm-green-soft text-crm-green font-bold px-2.5 py-1 rounded-full border border-crm-green-border">
                Live Preview
              </span>

              <button
                onClick={onOpenDemoModal}
                className="bg-crm-green text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow hover:bg-crm-green-dark cursor-pointer"
              >
                Launch Full Demo
              </button>
            </div>
          </div>

          {activeTab === "admin" && (
            <div className="p-4 sm:p-8 space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-crm-charcoal">
                    Good Morning, Admin 👋
                  </h3>
                  <p className="text-xs sm:text-sm text-crm-muted">
                    Here is what is happening with your multi-channel sales and Meta campaigns today.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs bg-white px-3 py-1.5 rounded-xl border border-crm-border font-semibold text-crm-slate">
                  <span>Current Year: 2026</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Total Leads
                  </div>
                  <div className="text-2xl font-black text-crm-charcoal">20</div>
                  <div className="text-[10px] text-crm-green font-semibold mt-1">↑ +100% this week</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Total Revenue
                  </div>
                  <div className="text-2xl font-black text-crm-green">₹3,03,600</div>
                  <div className="text-[10px] text-crm-muted font-medium mt-1">Confirmed deals</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Outstanding
                  </div>
                  <div className="text-2xl font-black text-amber-600">₹1,74,200</div>
                  <div className="text-[10px] text-amber-700 font-medium mt-1">Partial payments</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Paid Amount
                  </div>
                  <div className="text-2xl font-black text-crm-charcoal">₹1,53,400</div>
                  <div className="text-[10px] text-crm-green font-medium mt-1">Received</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Sales Persons
                  </div>
                  <div className="text-2xl font-black text-crm-charcoal">4</div>
                  <div className="text-[10px] text-crm-muted font-medium mt-1">Active reps</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-crm-border shadow-sm">
                  <div className="text-[11px] font-bold text-crm-muted uppercase tracking-wider mb-1">
                    Managers
                  </div>
                  <div className="text-2xl font-black text-crm-charcoal">2</div>
                  <div className="text-[10px] text-crm-muted font-medium mt-1">Supervisors</div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-crm-border shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-crm-charcoal">
                        Performance: Sales & Revenue Trend
                      </h4>
                      <p className="text-xs text-crm-muted">Monthly campaign performance</p>
                    </div>

                    <span className="text-xs font-bold text-crm-green bg-crm-green-soft px-2.5 py-1 rounded-lg">
                      ₹3,03,600 Total
                    </span>
                  </div>

                  <div className="h-44 w-full relative flex items-end pt-6 pb-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <path
                        d="M 0,110 L 80,110 L 160,110 L 240,110 L 320,10 L 400,110 L 480,110 L 500,110"
                        fill="none"
                        stroke="#0A5FE0"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <polygon
                        points="0,110 80,110 160,110 240,110 320,10 400,110 480,110 500,110 500,120 0,120"
                        fill="rgba(22, 119, 255, 0.1)"
                      />
                      <circle cx="320" cy="10" r="5" fill="#1677FF" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] text-crm-muted pt-2 border-t border-crm-subtle font-mono">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    <span>Jul</span><span className="font-bold text-crm-green">Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-crm-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-crm-charcoal mb-1">Conversion: Lead Rate</h4>
                    <p className="text-xs text-crm-muted mb-4">Direct WhatsApp & Meta leads</p>

                    <div className="flex items-center justify-center my-3">
                      <div className="relative w-28 h-28 rounded-full border-8 border-crm-green/20 border-t-crm-green flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-xl font-black text-crm-charcoal">14.3%</span>
                          <span className="block text-[9px] text-crm-muted uppercase font-semibold">Rate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs border-t border-crm-subtle pt-3">
                    <div className="flex justify-between text-crm-muted">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-crm-green" /> Assigned</span>
                      <span className="font-bold text-crm-charcoal">20</span>
                    </div>
                    <div className="flex justify-between text-crm-muted">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-crm-green-light" /> Converted</span>
                      <span className="font-bold text-crm-charcoal">3</span>
                    </div>
                    <div className="flex justify-between font-bold text-crm-charcoal pt-1 border-t border-dashed border-crm-border">
                      <span>Total Leads</span>
                      <span>21</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "leads" && (
            <div className="p-4 sm:p-8 space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-crm-charcoal">Admin Workspace: Leads Pipeline</h3>
                  <p className="text-xs text-crm-muted">
                    Live incoming customer inquiries captured from WhatsApp & Meta Ads
                  </p>
                </div>

                <span className="text-xs font-bold text-crm-green bg-crm-green-soft px-3 py-1.5 rounded-full border border-crm-green-border">
                  26 Leads Captured
                </span>
              </div>

              <div className="bg-white rounded-2xl border border-crm-border shadow-sm overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-crm-subtle text-crm-muted uppercase font-bold text-[10px] tracking-wider border-b border-crm-border">
                    <tr>
                      <th className="px-4 py-3">Lead ID</th>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Phone</th>
                      <th className="px-4 py-3">Source</th>
                      <th className="px-4 py-3">Message</th>
                      <th className="px-4 py-3">Priority</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-crm-subtle">
                    <tr className="hover:bg-crm-subtle/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-crm-muted">#102</td>
                      <td className="px-4 py-3 font-bold text-crm-charcoal">ALFAS DH 🦋</td>
                      <td className="px-4 py-3 font-mono text-crm-slate">919875137275</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          WhatsApp
                        </span>
                      </td>
                      <td className="px-4 py-3 text-crm-slate italic">"Hi"</td>
                      <td className="px-4 py-3">
                        <span className="bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded text-[10px]">HOT</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="bg-crm-green text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold hover:bg-crm-green-dark cursor-pointer">
                          Request WhatsApp
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-crm-subtle/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-crm-muted">#101</td>
                      <td className="px-4 py-3 font-bold text-crm-charcoal">Speeclox International Dtc</td>
                      <td className="px-4 py-3 font-mono text-crm-slate">919950000025</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                          Instagram DM
                        </span>
                      </td>
                      <td className="px-4 py-3 text-crm-slate italic">"Price details for Creta?"</td>
                      <td className="px-4 py-3">
                        <span className="bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded text-[10px]">WARM</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="bg-crm-green text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold hover:bg-crm-green-dark cursor-pointer">
                          Assign Rep
                        </button>
                      </td>
                    </tr>

                    <tr className="hover:bg-crm-subtle/80 transition-colors">
                      <td className="px-4 py-3 font-mono font-bold text-crm-muted">#97</td>
                      <td className="px-4 py-3 font-bold text-crm-charcoal">Ali Karanchodi</td>
                      <td className="px-4 py-3 font-mono text-crm-slate">919874452101</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1877F2] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                          Meta Lead Ad
                        </span>
                      </td>
                      <td className="px-4 py-3 text-crm-slate italic">"Hi, I am interested in Fortuner"</td>
                      <td className="px-4 py-3">
                        <span className="bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded text-[10px]">HOT</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="bg-crm-green text-white px-2.5 py-1 rounded-lg text-[10px] font-semibold hover:bg-crm-green-dark cursor-pointer">
                          Request WhatsApp
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div className="p-4 sm:p-8 animate-in fade-in">
              <div className="bg-white rounded-2xl border border-crm-border shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
                <div className="md:col-span-4 border-r border-crm-border bg-crm-subtle/50 p-3">
                  <div className="text-xs font-bold text-crm-muted uppercase px-2 mb-2">Assigned Leads</div>

                  <div className="space-y-1">
                    <div className="p-2.5 rounded-xl bg-white border border-crm-green shadow-xs cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs text-crm-charcoal">ALFAS DH 🦋</span>
                        <span className="text-[10px] text-crm-muted">2:36 PM</span>
                      </div>
                      <div className="text-[11px] text-crm-muted font-mono">919875137275</div>
                      <div className="text-xs text-crm-green font-medium mt-1 truncate">
                        ✓✓ Hi! Thank you for your interest...
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-crm-border transition-all cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs text-crm-slate">Test Lead Twelve</span>
                        <span className="text-[10px] text-crm-muted">1:12 PM</span>
                      </div>
                      <div className="text-[11px] text-crm-muted font-mono">9995000012</div>
                      <div className="text-xs text-crm-muted truncate">Interested in brochure...</div>
                    </div>

                    <div className="p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-crm-border transition-all cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs text-crm-slate">Ali Karanchodi</span>
                        <span className="text-[10px] text-crm-muted">11:04 AM</span>
                      </div>
                      <div className="text-[11px] text-crm-muted font-mono">919874452101</div>
                      <div className="text-xs text-crm-muted truncate">Meta Ad Lead form submitted</div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 flex flex-col justify-between p-4 bg-crm-subtle/30">
                  <div className="flex items-center justify-between pb-3 border-b border-crm-border">
                    <div>
                      <div className="font-bold text-sm text-crm-charcoal">ALFAS DH 🦋</div>
                      <div className="text-xs text-crm-green font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-crm-green inline-block" /> WhatsApp Connected
                      </div>
                    </div>

                    <button className="text-xs font-semibold text-crm-green bg-crm-green-soft px-3 py-1 rounded-lg border border-crm-green-border cursor-pointer">
                      Request WhatsApp Consent
                    </button>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="flex justify-start">
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-crm-border shadow-xs max-w-xs text-xs text-crm-slate">
                        <p>Hi, I saw your ad on Instagram. Can you send price details?</p>
                        <span className="text-[9px] text-crm-muted mt-1 block text-right">Oct 28, 2:36 PM</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-crm-green-soft p-3 rounded-2xl rounded-tr-none border border-crm-green-border shadow-xs max-w-sm text-xs text-crm-green-dark">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-crm-green mb-1 flex items-center gap-1">
                          <span>⚡ Instant AI Auto-Reply</span>
                        </div>
                        <p>Hi! 😊 Thank you for your interest in our services. How can I help you with your requirements today?</p>
                        <span className="text-[9px] text-crm-green-dark mt-1 block text-right font-semibold">✓✓ Delivered</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Write a message or choose quick reply..."
                      className="flex-1 bg-white border border-crm-border rounded-xl px-4 py-2 text-xs text-crm-slate focus:outline-none focus:ring-1 focus:ring-crm-green"
                    />
                    <button className="bg-crm-green text-white p-2.5 rounded-xl hover:bg-crm-green-dark shadow cursor-pointer">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "salesperson" && (
            <div className="p-4 sm:p-8 space-y-6 animate-in fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-crm-charcoal">Personal Overview: Sales Rep</h3>
                  <p className="text-xs text-crm-muted">You have 6 active follow-ups scheduled today</p>
                </div>

                <div className="flex items-center gap-2 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-semibold">
                  <Bell className="w-4 h-4 text-amber-600" />
                  <span>3 Automated Reminders Active</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-crm-border shadow-sm">
                  <h4 className="text-sm font-bold text-crm-charcoal mb-3 flex items-center justify-between">
                    <span>Today's Follow-up Schedule</span>
                    <span className="text-xs text-crm-green font-semibold">24h & 48h SLA</span>
                  </h4>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-red-50/60 rounded-xl border border-red-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-crm-charcoal">Test Lead Twelve</div>
                        <div className="text-[11px] text-red-600 font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3" /> 24-Hour Reminder: Pending Call
                        </div>
                      </div>
                      <span className="bg-red-500 text-white font-bold text-[10px] px-2 py-0.5 rounded">
                        Overdue
                      </span>
                    </div>

                    <div className="p-3 bg-crm-green-soft rounded-xl border border-crm-green-border flex items-center justify-between">
                      <div>
                        <div className="font-bold text-crm-charcoal">Test Lead Ten</div>
                        <div className="text-[11px] text-crm-green-dark font-medium">WhatsApp Call Scheduled</div>
                      </div>
                      <span className="bg-crm-green text-white font-bold text-[10px] px-2 py-0.5 rounded">
                        6:10 PM
                      </span>
                    </div>

                    <div className="p-3 bg-crm-subtle rounded-xl border border-crm-border flex items-center justify-between">
                      <div>
                        <div className="font-bold text-crm-charcoal">ALFAS DH</div>
                        <div className="text-[11px] text-crm-muted">Automated Follow-up Ping Sent</div>
                      </div>
                      <span className="bg-crm-border text-crm-slate font-bold text-[10px] px-2 py-0.5 rounded">
                        Assigned
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-crm-border shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-crm-charcoal mb-1">Personal Conversion Funnel</h4>
                    <p className="text-xs text-crm-muted mb-4">Track your closing ratio this month</p>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-crm-slate">
                          <span>Total Assigned Leads</span>
                          <span className="text-crm-charcoal font-bold">16</span>
                        </div>
                        <div className="w-full bg-crm-subtle h-2 rounded-full overflow-hidden">
                          <div className="bg-crm-green h-full w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-crm-slate">
                          <span>Contacted & Followed Up</span>
                          <span className="text-crm-green font-bold">9 (56%)</span>
                        </div>
                        <div className="w-full bg-crm-subtle h-2 rounded-full overflow-hidden">
                          <div className="bg-crm-green-light h-full w-[56%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-semibold mb-1 text-crm-slate">
                          <span>Converted Deals</span>
                          <span className="text-crm-green-dark font-bold">4 (25%)</span>
                        </div>
                        <div className="w-full bg-crm-subtle h-2 rounded-full overflow-hidden">
                          <div className="bg-crm-green-dark h-full w-[25%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenDemoModal}
                    className="w-full mt-4 bg-crm-green hover:bg-crm-green-dark text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow cursor-pointer"
                  >
                    <span>Test Salesperson Workflow on Mobile</span>
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
