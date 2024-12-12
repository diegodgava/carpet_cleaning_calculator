import React from "react";
import { useCart } from "./hooks/useCart";
import PriceTable from "./components/PriceTable";
import QuoteSummary from "./components/QuoteSummary";

const App = () => {
  const { cart, calculateTotal, updateCart } = useCart();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 flex flex-col lg:flex-row lg:space-x-6">
        {/* Tabela de Preços */}
        <div className="flex-1">
          <PriceTable cart={cart} updateCart={updateCart} />
        </div>

        {/* Resumo do Orçamento */}
        <div className="w-full lg:w-1/3">
          <QuoteSummary total={calculateTotal()} />
        </div>
      </div>
    </div>
  );
};

export default App;
