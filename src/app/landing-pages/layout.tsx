
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Software | Fyntric",
  description:
    "Simplify lead management and grow your business with Fyntric CRM.",
};

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
