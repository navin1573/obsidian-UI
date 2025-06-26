import React from 'react'

export const Hero = () => {
  return (
    <>
     <section  className="px-4 pt-20 flex flex-col items-start md:items-start max-w-5xl mx-auto">
  <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left w-full">
    Sharpen your thinking.
  </h1>

  <p className="text-gray-400 text-xl md:text-2xl tracking-wide mt-6 text-center md:text-left w-full">
    The free and flexible app for <br className="hidden md:block" />
    your private thoughts.
  </p>

  <div className="mt-10 w-full flex justify-center md:justify-start">
   <a href="https://github.com/obsidianmd/obsidian-releases/releases/download/v1.8.10/Obsidian-1.8.10.AppImage" download>
  <button className="text-white bg-[#7C3AED] px-6 py-4 rounded-lg font-bold text-sm md:text-base">
    Get Obsidian for Windows
  </button>
</a>
  </div>
</section>

    </>
  );
};
