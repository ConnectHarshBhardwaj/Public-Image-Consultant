'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { CallToAction } from '@/components/CallToAction';

export default function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  // EMI Calculation: P * R * (1+R)^N / ((1+R)^N - 1)
  const calculateEMI = () => {
    const p = loanAmount;
    const r = (interestRate / 12) / 100;
    const n = loanTenure * 12;
    if (p === 0 || r === 0 || n === 0) return 0;
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * loanTenure * 12;
  const totalInterest = totalAmount - loanAmount;

  return (
    <main className="w-full relative selection:bg-[#d4af37] selection:text-[#0F172A] pt-24 min-h-screen bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-2 block">Financial Planning</span>
          <h1 className="text-4xl md:text-6xl font-black font-heading text-white uppercase tracking-tight mb-4">
            Property <span className="gold-gradient">EMI Calculator</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Plan your investment. Calculate your monthly installments for properties in Narela.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 bg-[#1e293b] p-8 md:p-10 rounded-2xl border border-[#d4af37]/20 shadow-2xl">
            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-bold uppercase tracking-widest text-sm">Loan Amount</label>
                  <span className="text-[#d4af37] font-black text-xl">₹ {(loanAmount).toLocaleString('en-IN')}</span>
                </div>
                <input 
                  type="range" 
                  min="500000" 
                  max="100000000" 
                  step="100000" 
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))} 
                  className="w-full h-2 bg-[#0F172A] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold">
                  <span>5L</span>
                  <span>10Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-bold uppercase tracking-widest text-sm">Interest Rate (p.a.)</label>
                  <span className="text-[#d4af37] font-black text-xl">{interestRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="15" 
                  step="0.1" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(Number(e.target.value))} 
                  className="w-full h-2 bg-[#0F172A] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold">
                  <span>5%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-white font-bold uppercase tracking-widest text-sm">Loan Tenure</label>
                  <span className="text-[#d4af37] font-black text-xl">{loanTenure} Years</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  step="1" 
                  value={loanTenure} 
                  onChange={(e) => setLoanTenure(Number(e.target.value))} 
                  className="w-full h-2 bg-[#0F172A] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2 font-bold">
                  <span>1 Yr</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#d4af37] to-[#b38b22] p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden text-[#0F172A]">
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Calculator className="w-48 h-48 -mt-6 -mr-6" />
              </div>
              
              <h3 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-[#0F172A]/20 pb-4 relative z-10">Monthly Payment Outline</h3>
              
              <div className="mb-8 relative z-10">
                <div className="text-sm font-semibold uppercase tracking-wider mb-2">Equated Monthly Installment (EMI)</div>
                <div className="text-5xl font-black font-heading">
                  <span className="text-2xl mr-1">₹</span>{emi.toLocaleString('en-IN')}
                </div>
              </div>
              
              <div className="space-y-4 border-t border-[#0F172A]/20 pt-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm">Principal Amount</span>
                  <span className="font-bold">₹ {loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sm">Total Interest</span>
                  <span className="font-bold">₹ {totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center border-t border-[#0F172A]/20 pt-4 mt-4">
                  <span className="font-black uppercase tracking-wider">Total Amount</span>
                  <span className="font-black text-xl">₹ {totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <button className="w-full mt-10 bg-[#0F172A] text-[#d4af37] font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-black transition-colors relative z-10 shadow-lg">
                Get Pre-Approved Loan
              </button>
            </div>
          </div>

        </div>
      </div>
      <CallToAction />
    </main>
  );
}
