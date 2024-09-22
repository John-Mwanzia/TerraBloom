"use client";

import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { User } from "@/app/admin/users/column";

export default function UserReportDownloadButton({ users }: { users: User[] }) {
  const handleUserReportDownload = async () => {
    const doc = new jsPDF();
    
    // Add a title
    doc.text("User Report", 14, 20);
    
    // Create the table structure
    autoTable(doc, {
      startY: 30, // Starting Y position
      head: [['First Name', 'Last Name', 'Email', 'Posts', 'Comments', 'Likes', 'Role']], // Table Headers
      body: users.map(user => [
        user.firstName, 
        user.lastName, 
        user.email, 
        user.posts.length, 
        user.comments.length, 
        user.Likes.length, 
        user.isAdmin ? 'admin' : 'user' // Role column
      ]), // Table body
    });

    // Save the PDF
    doc.save("users_report.pdf");
  };

  return (
    <button
      onClick={handleUserReportDownload}
      className="mt-6 rounded-lg bg-primary px-4 py-2 text-white"
    >
      Print User Reports
    </button>
  );
}
