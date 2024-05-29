import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const currencyOption = useCurrencyInfo(from);
  console.log(currencyOption);
  const option = Object.keys(currencyOption);

  function convert() {
    setConvertedAmount(amount * currencyOption[to]);
  }

  return (
    <>
      <div
        className="flex h-screen flex-wrap w-full justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <InputBox
                label="From"
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOption={option}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                amount={amount}
              />
              <InputBox
                label="To"
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOption={option}
                selectCurrency={to}
                amount={convertedAmount}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
