import React from "react";

const QuoteSummary = ({ total }) => {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <h2 className="text-xl font-semibold text-[#013FB0] mb-4">Your Quote</h2>
      <p className="text-lg text-gray-700">
        Estimated Total: <strong className="text-[#013FB0]">${total.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default QuoteSummary;
