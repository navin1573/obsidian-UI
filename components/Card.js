import React from 'react';
import Image from 'next/image';

export const Card = () => {
  return (
    <div className="min-h-screen bg-transparent text-white flex items-center justify-center px-8 py-8">
      <div className="flex flex-col md:flex-row gap-16 max-w-6xl w-full">
        {/* Left Text Section */}
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Your thoughts are yours.</h3>
            <p className="text-gray-300">
              Obsidian stores notes privately on your device, so you can access them quickly, even offline. No one else can read them, not even us.
            </p>
            <hr className="mt-4 border-gray-700" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Your mind is unique.</h3>
            <p className="text-gray-300">
              With <span className="underline text-white">thousands of plugins</span> and themes, you can shape Obsidian to fit your way of thinking.
            </p>
            <hr className="mt-4 border-gray-700" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Your knowledge should last.</h3>
            <p className="text-gray-300">
              Obsidian uses open file formats, so you&apos;re never locked in. You own your data for the long term.
            </p>
          </div>
        </div>

        {/* Right Logo Section */}
        <div className="flex flex-col items-center text-center px-6 md:px-[100px]">
          <div className="bg-[#1a1a1a] rounded-3xl p-6">
            <Image
              src="/obsidianlogo.svg"
              alt="Obsidian Logo"
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <h2 className="text-2xl font-bold mt-6">Obsidian</h2>
          <p className="text-white font-semibold mt-2">Free without limits.</p>
          <a href="#" className="text-purple-400 mt-1 font-semibold hover:underline">
            Download now
          </a>
        </div>
      </div>
    </div>
  );
};
