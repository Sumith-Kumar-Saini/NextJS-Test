"use client";
import { useState } from "react";

const Page = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-5xl">Hello {num}</h1>
      <button
        className="text-4xl bg-blue-400 rounded-sm px-4 py-3"
        onClick={() => setNum((prev) => prev + 1)}
      >
        click
      </button>
    </div>
  );
};

export default Page;
