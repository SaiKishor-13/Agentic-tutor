import React from "react";

const Progress = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <main className="max-w-5xl mx-auto px-6 pt-24 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Your Progress</h1>
          <p className="text-sm text-slate-500 mt-1">Track learned items and streaks.</p>
        </header>

        {/* Streak Card */}
        <section className="mb-8">
          <div className="rounded-2xl border border-slate-100 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-700">Streak</p>
                <h2 className="text-4xl font-extrabold mt-3">0 days</h2>
                <p className="text-sm text-slate-400 mt-2">Get started today!</p>
              </div>
              {/* optional icon / placeholder */}
              <div className="hidden sm:block">
                <div className="w-20 h-20 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.667 0 4 1.333 4 4s-3.333 4-4 4-4-1.333-4-4 3.333-4 4-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Small stat cards */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-700">Letters</p>
              <h3 className="text-2xl font-bold mt-4">0</h3>
              <p className="text-sm text-slate-400 mt-2">learned</p>
            </div>

            <div className="rounded-xl border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-700">Words</p>
              <h3 className="text-2xl font-bold mt-4">0</h3>
              <p className="text-sm text-slate-400 mt-2">learned</p>
            </div>

            <div className="rounded-xl border border-slate-100 shadow-sm p-6">
              <p className="text-sm font-medium text-slate-700">Sentences</p>
              <h3 className="text-2xl font-bold mt-4">0</h3>
              <p className="text-sm text-slate-400 mt-2">learned</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Progress;
