import React from "react";

function InputBox({
  label,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency,
  amount,
  onAmountChange,
}) {
  return (
    <div className="bg-white p-3 flex rounded-lg mb-2">
      <div className="w-1/2 ">
        <label className="text-black/40 inline-block ">{label}</label>
        <input
          className="w-full outline-none py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
