import React from "react";

const ProductStockOverview: React.FC = () => {
  const stockData = [
    { name: "Beverages", count: 1250, percentage: "45%", color: "bg-blue-500" },
    { name: "Snacks", count: 800, percentage: "30%", color: "bg-green-500" },
    {
      name: "Household",
      count: 450,
      percentage: "15%",
      color: "bg-purple-500",
    },
    { name: "Others", count: 200, percentage: "10%", color: "bg-gray-300" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Product Stock Overview
      </h2>
      <div className="space-y-4">
        {stockData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-gray-700">{item.name}</span>
              <span className="text-gray-500">
                {item.count} items ({item.percentage})
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`${item.color} h-2.5 rounded-full`}
                style={{ width: item.percentage }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductStockOverview;
