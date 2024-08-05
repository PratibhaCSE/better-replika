// pages/mortgage-calculator.tsx
import Head from 'next/head';
import { useState } from 'react';

export default function MortgageCalculator() {
  const [amount, setAmount] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interest, setInterest] = useState(3.5);
  const [years, setYears] = useState(30);
  const [result, setResult] = useState<number | null>(null);

  const calculateMortgage = () => {
    const loanAmount = amount - downPayment;
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment =
      (loanAmount * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    setResult(parseFloat(monthlyPayment.toFixed(2)));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Head>
        <title>Mortgage Calculator - Better.com</title>
      </Head>
      <div className="w-full max-w-screen-lg bg-green-50 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Mortgage Calculator</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Home Price</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (%)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term (Years)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
          <button
            onClick={calculateMortgage}
            className="w-full py-3 bg-green-300 text-gray-700 font-semibold rounded-md hover:bg-green-900 hover:text-white  focus:outline-none focus:ring-2 focus:ring-green-800"
          >
            Calculate
          </button>
          {result && (
            <div className="mt-6 bg-green-50 p-4 border border-green-300 rounded-md text-gray-700">
              <h3 className="text-lg font-semibold">Estimated Monthly Payment</h3>
              <p className="text-2xl font-bold">${result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
