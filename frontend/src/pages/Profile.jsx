import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Learner");
  const [language, setLanguage] = useState("Malayalam");
  const [voiceSpeed, setVoiceSpeed] = useState(0.9);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile Saved!\nName: ${name}\nLanguage: ${language}\nVoice Speed: ${voiceSpeed}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <main className="max-w-3xl mx-auto px-6 pt-24 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <p className="text-sm text-slate-500 mt-1">
            Set your preferences for bilingual explanations and voice speed.
          </p>
        </header>

        <section>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6"
          >
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-200 p-2.5 text-slate-800 focus:ring-2 focus:ring-slate-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Preferred Language */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Preferred Language
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setLanguage("Malayalam")}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-150 ${
                    language === "Malayalam"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Malayalam
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("English")}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-150 ${
                    language === "English"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  English
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Bilingual explanations use this to choose primary labels.
              </p>
            </div>

            {/* Voice Speed */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Voice Speed (0.5–1.2)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="1.2"
                value={voiceSpeed}
                onChange={(e) => setVoiceSpeed(e.target.value)}
                className="w-full rounded-lg border border-slate-200 p-2.5 text-slate-800 focus:ring-2 focus:ring-slate-400 focus:outline-none"
              />
            </div>

            {/* Save Button */}
            <div>
              <button
                type="submit"
                className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Profile;
