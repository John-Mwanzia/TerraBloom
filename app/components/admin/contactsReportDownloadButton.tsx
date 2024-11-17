"use client";

import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";


// model Contact {
//   id        String   @id @default(auto()) @map("_id") @db.ObjectId
//   name      String
//   email     String
//   subject   String
//   message   String
//   createdAt DateTime @default(now())
// }



interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export default function ContactsReportDownloadButton({ contacts }: { contacts: Contact[] }) {
  const handleContactsReportDownload = () => {
    const doc = new jsPDF();
    
    // Add a title
    doc.text("Contacts Report", 14, 20);
    
    // Create the table structure
    autoTable(doc, {
      startY: 30, // Starting Y position
      head: [["Name", "Email", "Subject", "Message", "Created At"]], // Table header
      body: contacts.map(user => [
        user.name,
        user.email,
        user.subject,
        user.message,
        user.createdAt.toLocaleString(),
      ]), // Table body
    });

    // Save the PDF
    doc.save("contacts-report.pdf");
  };

  return (
    <button
      onClick={handleContactsReportDownload}
      className="mt-6 rounded-lg bg-primary px-4 py-2 text-white"
    >
      Print Contacts Report
    </button>
  );
}
