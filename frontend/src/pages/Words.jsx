import React, { useState } from "react";

/**
 * Words.jsx
 * Component name: Words
 *
 * - Small sample dataset (3 words)
 * - Listen button for word (speechSynthesis)
 * - Play sentence button for example sentence
 * - Mark as learned toggle
 * - Prev / Next pagination
 */

const WORDS = [
  {
    word: "വീട്",
    translit: "vīṭŭ",
    meaning: "house",
    sentence: {
      ml: "ഇത് എന്റെ വീട് ആണ്.",
      en: "This is my house.",
    },
  },
  {
    word: "പുസ്തകം",
    translit: "pustakam",
    meaning: "book",
    sentence: {
      ml: "അവൾ ഒരു പുതിയ പുസ്തകം വായിക്കുന്നു.",
      en: "She is reading a new book.",
    },
  },
  {
    word: "പൂവ്",
    translit: "pūv",
    meaning: "flower",
    sentence: {
      ml: "അവൻ പൂവുകൾ കൊണ്ടുവന്നു.",
      en: "He brought flowers.",
    },
  },
];

const speak = (text, lang = "ml-IN") => {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  // Optional: you can choose a voice after voices load
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
};

const Words = () => {
  const [index, setIndex] = useState(0);
  const [learned, setLearned] = useState(new Set());

  const current = WORDS[index];

  const next = () => setIndex((i) => Math.min(WORDS.length - 1, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  const toggleLearned = () => {
    setLearned((s) => {
      const ns = new Set(s);
      if (ns.has(index)) ns.delete(index);
      else ns.add(index);
      return ns;
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Learn Words</h2>
          <p className="text-sm text-gray-500 mt-1">
            Practice words with pronunciation and example sentences.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border rounded-xl shadow-sm p-6 relative">
          {/* Top row: Word count + Listen */}
          <div className="flex items-start justify-between mb-6">
            <div className="text-sm font-medium text-gray-700">
              Word {index + 1} of {WORDS.length}
            </div>

            <div>
              <button
                onClick={() => speak(current.word)}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm shadow-sm hover:opacity-90 transition"
                aria-label="Listen to word"
              >
                Listen
              </button>
            </div>
          </div>

          {/* Main word display */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-7xl md:text-8xl font-light leading-none">
              {current.word}
            </div>
            <div className="mt-3 text-sm text-gray-500">
              {current.meaning} • {current.translit}
            </div>
          </div>

          {/* Example sentence box */}
          <div className="border rounded-lg p-4 mt-6 bg-gray-50">
            <div className="text-sm text-gray-500 mb-2">Example sentence</div>

            <div className="flex flex-col gap-3">
              <div className="">
                <div className="text-lg md:text-xl font-medium">{current.sentence.ml}</div>
                <div className="text-gray-500 text-sm mt-1">{current.sentence.en}</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => speak(current.sentence.ml)}
                  className="px-3 py-2 rounded-md border bg-white text-sm shadow-sm hover:bg-gray-50 transition"
                  aria-label="Play example sentence"
                >
                  Play sentence
                </button>
              </div>
            </div>
          </div>

          {/* Mark as learned */}
          <div className="mt-6">
            <button
              onClick={toggleLearned}
              className={`px-4 py-2 rounded-md text-sm shadow-sm border ${
                learned.has(index)
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {learned.has(index) ? "Learned ✓" : "Mark as learned"}
            </button>
          </div>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`px-4 py-2 rounded-md text-sm border shadow-sm ${
              index === 0 ? "text-gray-300 border-gray-200" : "bg-white"
            }`}
          >
            Previous
          </button>

          <div className="text-sm text-gray-500">
            {index + 1} / {WORDS.length}
          </div>

          <button
            onClick={next}
            disabled={index === WORDS.length - 1}
            className={`px-4 py-2 rounded-md text-sm border shadow-sm ${
              index === WORDS.length - 1
                ? "text-gray-300 border-gray-200"
                : "bg-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Words;
