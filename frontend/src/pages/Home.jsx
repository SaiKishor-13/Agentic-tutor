import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
      {/* Header */}
      <h1 className="text-3xl font-semibold mb-2">
        Bhoshini — <span className="font-bold">Malayalam Tutor</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 max-w-md mb-8">
        Learn Malayalam step-by-step with audio guidance, live speech feedback, and simple progress tracking.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Learn Letters
        </button>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Learn Words
        </button>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Learn Sentences
        </button>
        <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-300 transition">
          Progress
        </button>
        <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-300 transition">
          Profile
        </button>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500">
        Made with <span className="font-semibold">SpeechSynthesis</span> +{" "}
        <span className="font-semibold">react-speech-kit</span>
      </p>
    </div>
  );
};

export default Home;
