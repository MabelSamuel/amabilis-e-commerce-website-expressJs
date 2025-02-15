import React from "react";

const CartTax = () => {
  return (
    <div className="border w-1/3 px-8 py-10 bg-gray-200 rounded-md md:w-full sm:w-full sm:text-sm sm:px-4">
      <h3 className="text-lg font-medium mb-6">Estimate Shipping And Tax</h3>
      <p>Enter your destination to get a shipping estimate.</p>
      <form className="mt-2">
        <div className="mb-4 space-y-1">
          <label htmlFor="country" className="mb-2">
            *Country
          </label>
          <select
            name="country"
            id="country"
            className="block w-full outline-lilac h-10 text-sm px-3 border border-gray-300"
          >
            <option value="">Nigeria</option>
          </select>
        </div>
        <div className="mb-4 space-y-1">
          <label htmlFor="country" className="mb-2">
            * Region / State
          </label>
          <select
            name="country"
            id="country"
            className="block w-full outline-lilac h-10 text-sm px-3 border border-gray-300"
          >
            <option value="">Rivers</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="zip" className="mb-2">
            * Zip / Postal Code
          </label>
          <input
            type="number"
            id="zip"
            className="w-full h-10 text-sm border px-3 border-gray-300"
          />
        </div>
        <button className="uppercase bg-lilac w-full rounded-full py-4 text-white font-medium text-sm hover:bg-black mt-8">
          Get a quote
        </button>
      </form>
    </div>
  );
};

export default CartTax;
