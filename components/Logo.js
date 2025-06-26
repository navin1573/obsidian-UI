import React from 'react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex justify-center">
      <div
        className="logo-wrapper w-60 h-60 p-8 rounded-[50px] hover:scale-110
        transition-transform duration-1000"
      >
        <Image
          src="/obsidianlogo.svg"
          alt="Obsidian logo"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};
