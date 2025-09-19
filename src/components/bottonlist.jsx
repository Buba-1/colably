/* ButtonList.jsx */
import React from "react";

export default function ButtonList({ onButtonClick }) {
  return (
    <div className="w-4/5 px-4 py-4 flex flex-row space-x-3 items-center justify-center border-b border-gray-300">
      <button
        onClick={() => onButtonClick("Button 1")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Button 1
      </button>

      <button
        onClick={() => onButtonClick("Button 2")}
        className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors"
      >
        Button 2
      </button>

      <button
        onClick={() => onButtonClick("Button 3")}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors"
      >
        Button 3
      </button>

      <button
        onClick={() => onButtonClick("Button 4")}
        className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors"
      >
        Button 4
      </button>
    </div>
  );
}
