"use client";
import React, { useState } from "react";

const CopyToClipboard = () => {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const textToCopy: string = "9qsMuXpuh7U57RPdY1ahYD7r4b9KbqaRfyGwYmZHBj5q";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4 p-2 border border-gray-300 rounded">
        {textToCopy}
      </div>
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Copy to Clipboard
      </button>
      {copySuccess && <div className="mt-2 text-green-500">{copySuccess}</div>}
    </div>
  );
};

export default CopyToClipboard;
