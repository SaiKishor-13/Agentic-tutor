import React, { useState } from "react";

const letters = [
  {
    char: "അ",
    ipa: "a",
    label: "അ (a)",
    example: { word: "അമ്മ", translit: "amma", meaning: "mother" },
  },
  {
    char: "ആ",
    ipa: "ā",
    label: "ആ (aa)",
    example: { word: "ആമ", translit: "aama", meaning: "frog" },
  },
  {
    char: "ഇ",
    ipa: "i",
    label: "ഇ (i)",
    example: { word: "ഇല", translit: "ila", meaning: "leaf" },
  },
  {
    char: "ഈ",
    ipa: "ī",
    label: "ഈ (ee)",
    example: { word: "ഈട്ട്", translit: "eett", meaning: "brick" },
  },
  {
    char: "ഉ",
    ipa: "u",
    label: "ഉ (u)",
    example: { word: "ഉണ്ട്", translit: "undu", meaning: "there is" },
  },
];

const speak = (text, lang = "ml-IN") => {
  if (!("speechSynthesis" in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  // Optional: set voice preferences by searching speechSynthesis.getVoices()
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
};

const Letters = () => {
  const [index, setIndex] = useState(0);
  const [learned, setLearned] = useState(new Set());

  const current = letters[index];

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    setIndex((i) => Math.min(letters.length - 1, i + 1));
  };

  const toggleLearned = () => {
    setLearned((prevSet) => {
      const nextSet = new Set(prevSet);
      if (nextSet.has(index)) nextSet.delete(index);
      else nextSet.add(index);
      return nextSet;
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 pt-24 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Learn Letters</h2>
          <p className="text-sm text-gray-500 mt-1">
            Malayalam letters with audio and examples.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border rounded-xl shadow-sm p-6 relative">
          {/* Top row: Letter count + Listen */}
          <div className="flex items-start justify-between mb-6">
            <div className="text-sm font-medium text-gray-700">
              Letter {index + 1} of {letters.length}
            </div>

            <div>
              <button
                onClick={() => speak(current.char)}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm shadow-sm hover:opacity-90 transition"
                aria-label="Listen to letter"
              >
                Listen
              </button>
            </div>
          </div>

          {/* Main letter display */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-7xl md:text-9xl font-light leading-none">
              {current.char}
            </div>
            <div className="mt-3 text-sm text-gray-500">{current.label}</div>
          </div>

          {/* Example word box */}
          <div className="border rounded-lg p-4 mt-6 bg-gray-50">
            <div className="text-sm text-gray-500 mb-2">Example word</div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-2xl font-semibold">{current.example.word}</div>
                <div className="text-gray-500 text-sm">
                  {current.example.translit} ({current.example.meaning})
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    // Try Malayalam voice, fallback gracefully — we also pass the transliteration for clearer speech in some browsers
                    speak(
                      `${current.example.word} — ${current.example.translit}`,
                      "ml-IN"
                    )
                  }
                  className="px-3 py-2 rounded-md border bg-white text-sm shadow-sm hover:bg-gray-50 transition"
                  aria-label="Play example word"
                >
                  Play word
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
            {index + 1} / {letters.length}
          </div>

          <button
            onClick={next}
            disabled={index === letters.length - 1}
            className={`px-4 py-2 rounded-md text-sm border shadow-sm ${
              index === letters.length - 1
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

export default Letters;
