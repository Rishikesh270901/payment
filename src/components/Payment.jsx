import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PaymentTable from "./PaymentTable";

const Payment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-6">Policy Details</h4>
            <PaymentTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payment;
