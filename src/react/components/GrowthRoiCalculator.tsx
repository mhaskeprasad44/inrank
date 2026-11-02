import React, { useState } from 'react';

interface RoiState {
  monthlyTraffic: number;
  conversionRate: number;
  avgDealValue: number;
}

export const GrowthRoiCalculator: React.FC = () => {
  const [traffic, setTraffic] = useState<number>(3000);
  const [conversionRate, setConversionRate] = useState<number>(1.5);
  const [dealValue, setDealValue] = useState<number>(15000);

  // Baseline
  const currentMonthlyLeads = Math.round((traffic * conversionRate) / 100);
  const currentMonthlyRevenue = currentMonthlyLeads * dealValue;

  // Projected with Inrank SEO + High-Conversion Web (3x traffic + 3.2% conversion rate)
  const projectedTraffic = traffic * 2.8;
  const projectedRate = Math.min(conversionRate * 2.2, 4.5);
  const projectedMonthlyLeads = Math.round((projectedTraffic * projectedRate) / 100);
  const projectedMonthlyRevenue = projectedMonthlyLeads * dealValue;
  const monthlyRevenueLift = projectedMonthlyRevenue - currentMonthlyRevenue;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/20 p-6 sm:p-8 shadow-xl shadow-slate-200/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-100/80 text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            React Engine Active
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 font-display">
            Interactive Growth & ROI Forecaster
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Real-time projection model powered by React 19 & Inrank performance benchmarks.
          </p>
        </div>
        <div className="flex items-center gap-2 text-right">
          <div className="px-3.5 py-2 rounded-2xl bg-slate-900 text-white text-xs font-mono">
            React v{React.version}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Sliders Input */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              <span>Estimated Monthly Website Visitors</span>
              <span className="font-mono text-emerald-700 font-bold">{traffic.toLocaleString()} visitors/mo</span>
            </div>
            <input
              type="range"
              min="500"
              max="25000"
              step="250"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              <span>Current Inquiry Conversion Rate</span>
              <span className="font-mono text-emerald-700 font-bold">{conversionRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-700 mb-2">
              <span>Average Customer Value (Ticket Size)</span>
              <span className="font-mono text-emerald-700 font-bold">₹{dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>
        </div>

        {/* Projected Metrics Output */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
              Projected Monthly Lift
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mt-1 font-display tracking-tight">
              +₹{monthlyRevenueLift.toLocaleString()}
              <span className="text-xs text-slate-400 font-normal block sm:inline sm:ml-1">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 my-5 py-4 border-y border-slate-800 text-xs">
            <div>
              <div className="text-slate-400">Monthly Leads</div>
              <div className="text-base font-bold text-slate-100 font-mono mt-0.5">
                {currentMonthlyLeads} <span className="text-emerald-400">→ {projectedMonthlyLeads}</span>
              </div>
            </div>
            <div>
              <div className="text-slate-400">Conversion Rate</div>
              <div className="text-base font-bold text-slate-100 font-mono mt-0.5">
                {conversionRate}% <span className="text-emerald-400">→ {projectedRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <a
            href="/contact.html"
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold text-center transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40"
          >
            Claim Free Growth Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
