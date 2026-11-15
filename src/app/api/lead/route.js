import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, company, leadVolume } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and WhatsApp phone number are required." },
        { status: 400 }
      );
    }

    console.log("New Meta Ad Lead Captured:", {
      name,
      phone,
      company: company || "N/A",
      leadVolume,
      capturedAt: new Date().toISOString(),
      source: "Meta Ad Landing Page",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead successfully captured. Our team will contact you on WhatsApp shortly.",
        lead: { name, phone },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error capturing lead:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
