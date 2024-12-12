import React from "react";
import { InformationCircleIcon } from '@heroicons/react/outline';  // Importando o ícone de informação

const PriceTable = ({ cart, updateCart }) => {
  return (
    <div className="shadow rounded p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-[#013FB0]">Carpet Cleaning Quote</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left">Area</th>
            <th className="border-b py-2 text-center">Clean</th>
            <th className="border-b py-2 text-center">
              Protect
              <span className="relative group inline-block ml-2">
                <InformationCircleIcon className="h-5 w-5 text-blue-500" />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block text-sm bg-gray-700 text-white py-1 px-2 rounded">
                  Additional information about Protect service.
                </div>
              </span>
            </th>
            <th className="border-b py-2 text-center">
              Deodorize
              <span className="relative group inline-block ml-2">
                <InformationCircleIcon className="h-5 w-5 text-blue-500" />
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block text-sm bg-gray-700 text-white py-1 px-2 rounded">
                  Additional information about Deodorize service.
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cart.clean).map((area) => (
            <tr key={area}>
              <td className="border-b py-2 capitalize">{area}</td>
              {["clean", "protect", "deodorize"].map((service) => (
                <td key={service} className="border-b py-2 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => updateCart(service, area, -1)}
                      className="px-2 py-1 bg-[#013FB0] text-white rounded hover:bg-[#012d80]"
                    >
                      -
                    </button>
                    <span>{cart[service][area]}</span>
                    <button
                      onClick={() => updateCart(service, area, 1)}
                      className="px-2 py-1 bg-[#013FB0] text-white rounded hover:bg-[#012d80]"
                    >
                      +
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
