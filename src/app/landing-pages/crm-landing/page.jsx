"use client";

import { useState } from "react";
import HeroSection from "@/components/crm/HeroSection";
import SocialProof from "@/components/crm/SocialProof";
import ProblemVsSolution from "@/components/crm/ProblemVsSolution";
import DashboardPreview from "@/components/crm/DashboardPreview";
import CrmFeatureShowcase from "@/components/crm/CrmFeatureShowcase";
import RoiCalculator from "@/components/crm/RoiCalculator";
import Testimonials from "@/components/crm/Testimonials";
import FaqSection from "@/components/crm/FaqSection";
import FinalCta from "@/components/crm/FinalCta";
import MobileFloatingCta from "@/components/crm/MobileFloatingCta";
import LeadModal from "@/components/crm/LeadModal";

export default function CrmLandingPage() {
const [demoModalOpen, setDemoModalOpen] = useState(false);
const [name, setName] = useState("");
const [message, setMessage] = useState(
  "I am interested in your CRM solution. I wish to know more about it."
);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div data-theme="light" className="min-h-screen flex flex-col bg-crm-bg selection:bg-crm-green/20 selection:text-crm-green-dark text-crm-charcoal">
      {/* Top Navbar */}
  

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero with High-Converting Lead Form */}
        <HeroSection onOpenDemoModal={handleOpenDemo} />

        {/* Integration channels & statistical counter proof */}
        <SocialProof />

        {/* Before vs After comparison */}
        <ProblemVsSolution onOpenDemoModal={handleOpenDemo} />

        {/* Interactive Dashboard Walkthrough mirroring product video */}
        <DashboardPreview onOpenDemoModal={handleOpenDemo} />

        {/* Core Features Grid */}
        <CrmFeatureShowcase onOpenDemoModal={handleOpenDemo} />

        {/* Interactive ROI Calculator */}
        <RoiCalculator onOpenDemoModal={handleOpenDemo} />

        {/* Social Proof Testimonials */}
        <Testimonials />

        {/* FAQs */}
        <FaqSection />

    {/* High-urgency Final Call to Action */}
<FinalCta
  onOpenDemoModal={handleOpenDemo}
  name={name}
  setName={setName}
  message={message}
  setMessage={setMessage}
/>  
      </main>

      {/* Sticky Bottom Floating Bar for Mobile Visitors */}
      <MobileFloatingCta onOpenDemoModal={handleOpenDemo} />

      {/* Instant Lead Capture Modal */}
      <LeadModal isOpen={demoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
