// src/components/PaymentTable.js

import React from 'react';
// import './styles.css'; // Import custom styles if needed

const PaymentTable = () => {
  const data = [
    { name: 'John Doe', amount: '$500', date: '2024-07-01', paid: 'Yes' },
    { name: 'Jane Smith', amount: '$300', date: '2024-07-15', paid: 'No' },
    { name: 'Alice Johnson', amount: '$400', date: '2024-07-20', paid: 'Yes' },
    { name: 'Bob Brown', amount: '$250', date: '2024-07-22', paid: 'No' },
    { name: 'Charlie Davis', amount: '$600', date: '2024-07-25', paid: 'Yes' },
    { name: 'Emily Clark', amount: '$350', date: '2024-07-30', paid: 'No' },
    { name: 'John Doe', amount: '$500', date: '2024-07-01', paid: 'Yes' },
    { name: 'Jane Smith', amount: '$300', date: '2024-07-15', paid: 'No' },
    { name: 'Alice Johnson', amount: '$400', date: '2024-07-20', paid: 'Yes' },
    { name: 'Bob Brown', amount: '$250', date: '2024-07-22', paid: 'No' },
    { name: 'Charlie Davis', amount: '$600', date: '2024-07-25', paid: 'Yes' },
    { name: 'Emily Clark', amount: '$350', date: '2024-07-30', paid: 'No' },
  ];

  return (
    <div className="p-4 max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="py-2 px-4 text-left text-gray-600">Customer Name</th>
            <th className="py-2 px-4 text-left text-gray-600">Amount</th>
            <th className="py-2 px-4 text-left text-gray-600">Date</th>
            <th className="py-2 px-4 text-left text-gray-600">Paid</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4 text-gray-700">{item.name}</td>
              <td className="py-2 px-4 text-gray-700">{item.amount}</td>
              <td className="py-2 px-4 text-gray-700">{item.date}</td>
              <td className="py-2 px-4 text-gray-700">{item.paid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
