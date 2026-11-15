export const crmStats = [
  { value: "3.2x", label: "Faster Response Time", desc: "Instant automated WhatsApp & IG replies" },
  { value: "0%", label: "Lead Leakage", desc: "Every Meta Ad lead captured directly" },
  { value: "24h & 48h", label: "Smart Reminders", desc: "Auto follow-up alerts for sales reps" },
  { value: "45%", label: "Higher Conversion", desc: "Compared to manual spreadsheet tracking" },
];

export const painPoints = {
  withoutCrm: [
    "Leads from WhatsApp & Instagram scattered across phones",
    "Slow manual replies — potential customers go to competitors",
    "Salespersons forget to follow up after the first contact",
    "No visibility into which Meta campaigns generate real sales",
    "Loss of leads and customer chats when a staff member leaves",
  ],
  withCrm: [
    "100% centralized auto-capture from WhatsApp, Instagram & Meta Ads",
    "Instant 24/7 AI greetings and qualification responses",
    "Automated 24h & 48h follow-up alerts and task reminders",
    "Clear revenue analytics tracked back to specific ad campaigns",
    "Secure centralized customer database with role-based access",
  ],
};

export const coreModules = [
  {
    id: "leads",
    title: "Omnichannel Lead Capture",
    badge: "Auto-Sync",
    description: "Capture leads automatically from Meta Ads (Facebook & Instagram), WhatsApp Business, and Website forms into one unified pipeline.",
    highlights: [
      "Auto-records customer name, phone number & ad campaign ID",
      "Instant push notifications to assigned sales reps",
      "Priority tagging: Hot, Warm, Cold lead categorization",
    ],
    videoReference: "Admin Workspace → Leads Table with WhatsApp source tags",
  },
  {
    id: "reminders",
    title: "24h & 48h Automated Follow-ups",
    badge: "Never Miss A Lead",
    description: "System alerts and automated reminder messages prevent leads from going cold when sales agents don't receive an initial reply.",
    highlights: [
      "Customizable scheduled follow-up triggers",
      "WhatsApp automated ping for unresponsive inquiries",
      "Manager alerts when a lead remains uncontacted past deadline",
    ],
    videoReference: "Sales Person Workspace → Follow-up status & automated reminders",
  },
  {
    id: "roles",
    title: "Multi-Tier Role Workspaces",
    badge: "Team Management",
    description: "Dedicated dashboards designed specifically for Admins, Business Managers, and individual Sales Reps.",
    highlights: [
      "Admin: Complete company oversight, revenue & integrations",
      "Business Manager: Team lead pipeline, conversion rates & task assignment",
      "Sales Rep: Personal assigned leads, daily calls & direct messaging",
    ],
    videoReference: "Admin, Business Manager, and Sales Person workspaces",
  },
  {
    id: "messages",
    title: "Direct WhatsApp & Social Chat",
    badge: "Built-in Inbox",
    description: "Chat with leads directly over WhatsApp and Instagram from within the CRM interface without switching apps or sharing company phones.",
    highlights: [
      "Pre-saved quick replies and product brochures",
      "Full conversation history attached to customer profile",
      "Request WhatsApp consent with one click",
    ],
    videoReference: "Sales Person Workspace → Messages Tab & WhatsApp Chat View",
  },
  {
    id: "analytics",
    title: "Real-Time Sales & Revenue Analytics",
    badge: "Executive Insights",
    description: "Visualize total revenue, outstanding amounts, top sales performers, payment statuses (Paid / Partial), and monthly trends.",
    highlights: [
      "Visual sales trend curves & product mix breakdown",
      "Conversion funnel: Assigned → Contacted → Converted",
      "Exportable monthly performance reports",
    ],
    videoReference: "Admin Dashboard → Sales & Revenue Trend graph & Payment Status",
  },
];

export const faqs = [
  {
    question: "How does the CRM connect with my Meta Ads (Facebook & Instagram)?",
    answer: "Our direct Meta Graph API integration connects to your Facebook Business Manager and Instagram professional account in less than 2 minutes. Every time a user submits a lead form or sends a DM, it instantly appears in your CRM pipeline with all campaign details.",
  },
  {
    question: "Does this require the official WhatsApp Business API?",
    answer: "Yes, we support both official Meta Cloud WhatsApp Business API and QR-code direct connections, allowing your team to send automated messages, reminders, and template updates with high deliverability.",
  },
  {
    question: "Can my sales team use this on their mobile devices?",
    answer: "Absolutely! The CRM is built fully responsive and optimized for mobile screens. Sales reps can view assigned leads, initiate WhatsApp chats, update statuses, and log calls directly from their smartphone browsers.",
  },
  {
    question: "How do the 24-hour and 48-hour automated reminders work?",
    answer: "When a new lead arrives, the countdown begins. If the customer hasn't responded or the salesperson hasn't logged a completion, the CRM automatically delivers a reminder notification to the sales rep and can optionally send a gentle follow-up template message to the client on WhatsApp.",
  },
  {
    question: "How fast can my business get onboarded?",
    answer: "You can be fully set up within 24 hours. Our onboarding team assists you with Meta Ads connection, WhatsApp setup, team account creation, and staff training.",
  },
];

export const testimonials = [
  {
    name: "Rahul Menon",
    role: "Founder, Zenith Real Estate",
    content: "Before using this CRM, our sales agents took 3 to 4 hours to call Meta ad leads, and half the clients forgot they filled the form. Now with instant WhatsApp auto-replies, our lead-to-booking rate jumped by 42%!",
    rating: 5,
    metrics: "+42% Conversion Rate",
  },
  {
    name: "Sneha Nair",
    role: "Marketing Director, Apex E-Commerce",
    content: "The 24h & 48h automated reminder feature alone saved our business thousands of dollars in wasted ad spend. Our sales managers now know exactly which rep followed up and when.",
    rating: 5,
    metrics: "Zero Missed Leads",
  },
  {
    name: "Faisal Rahman",
    role: "Managing Director, AutoDrive Motors",
    content: "Managing 8 salespeople across WhatsApp and Instagram was a nightmare of shared phones and lost chats. Having dedicated workspaces and one unified inbox changed everything.",
    rating: 5,
    metrics: "3.5x Faster Response",
  },
];
