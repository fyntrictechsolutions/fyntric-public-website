"use client";

import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-crm-green flex items-center justify-center text-white">
              <MessageSquare className="w-4 h-4" />
            </div>

            <div>
              <span className="font-bold text-gray-900 text-sm">
                AI Multi-Channel CRM
              </span>
              <p className="text-[11px] text-gray-400">
                Customer Intelligence, Unified
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 font-medium">
            <a href="#features" className="hover:text-crm-green transition-colors">
              Features
            </a>

            <a href="#preview" className="hover:text-crm-green transition-colors">
              CRM Walkthrough
            </a>

            <a href="#calculator" className="hover:text-crm-green transition-colors">
              ROI Calculator
            </a>

            <a href="#faq" className="hover:text-crm-green transition-colors">
              FAQ
            </a>

            <a href="#" className="hover:text-crm-green transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-crm-green transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} AI Multi-Channel CRM. All rights reserved.
            </p>

            <p className="text-[10px] text-gray-400 mt-1 flex items-center justify-center md:justify-end gap-1">
              Official WhatsApp & Meta Business Graph API Integration
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}