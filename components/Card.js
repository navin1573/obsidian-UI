'use client';
import React, { useRef, useEffect } from 'react';

export const Card = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const gradients = Array.from(svg.querySelectorAll('radialGradient')).filter(
      (grad) => !['f', 'g', 'h', 'i'].includes(grad.id)
    );

    let mouseX = 0.5;
    let mouseY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const handleMouseMove = (e) => {
      const rect = svg.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      const centerX = 256;
      const centerY = 256;
      const scaleX = 300;
      const scaleY = 300;

      const dx = (currentX - 0.5) * scaleX;
      const dy = (currentY - 0.5) * scaleY;

      for (const grad of gradients) {
        const transform = `matrix(${scaleX}, 0, 0, ${scaleY}, ${centerX + dx}, ${centerY + dy})`;
        grad.setAttribute('gradientTransform', transform);
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
<div className="bg-[#1a1a1a] rounded-2xl p-6 transition-all duration-300 transform hover:scale-120">
        <svg
     ref={svgRef}
    xmlns="http://www.w3.org/2000/svg"
    width={128}
    height={128}
    fill="none"
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          fill="#6C31E3"
          d="M95.575 118.9c-.775 5.85-6.5 10.4-12.175 8.825-8.1-2.225-17.475-5.7-25.9-6.35l-12.925-1a8.5 8.5 0 0 1-5.5-2.55L16.825 94.9a8.5 8.5 0 0 1-1.675-9.425S28.9 55.225 29.425 53.65c.5-1.575 2.4-15.3 3.5-22.65a8.394 8.394 0 0 1 2.75-5.075L62 2.225A8.525 8.525 0 0 1 74.4 3.3l22.1 28.1a9.25 9.25 0 0 1 1.9 5.6c0 5.325.45 16.25 3.4 23.3 2.875 6.825 8.125 14.25 10.875 17.875a4.33 4.33 0 0 1 .325 4.8 373.764 373.764 0 0 1-11.2 17.65c-3.75 5.575-5.475 12.475-6.25 18.275h.025Z"
        />
        <path
          fill="url(#c)"
          d="M41.475 119.575c10.35-21 10.05-36.05 5.65-46.75-4.05-9.9-11.575-16.125-17.5-20-.15.575-.325 1.1-.55 1.625L15.15 85.5a8.5 8.5 0 0 0 1.65 9.425l22.275 22.925a8.495 8.495 0 0 0 2.4 1.75v-.025Z"
        />
        <path
          fill="url(#d)"
          d="M69.6 76.95c2.8.3 5.55.9 8.2 1.9 8.5 3.175 16.25 10.3 22.625 24.075.45-.775.9-1.55 1.4-2.3a383.41 383.41 0 0 0 11.2-17.65 4.251 4.251 0 0 0-.325-4.8c-2.75-3.65-8-11.05-10.875-17.875-2.95-7.05-3.375-18-3.4-23.3 0-2.025-.65-4-1.9-5.6L74.4 3.3a8.473 8.473 0 0 0-.375-.425 24 24 0 0 1 .5 13.5 49.574 49.574 0 0 1-4.4 10.325l-1.8 3.55A42.751 42.751 0 0 0 63.475 48c-.3 7.35 1.2 16.6 6.125 28.95Z"
        />
        <path
          fill="url(#e)"
          d="M69.6 76.95c-4.925-12.35-6.45-21.6-6.125-28.975a42.751 42.751 0 0 1 4.85-17.75c.575-1.2 1.2-2.375 1.8-3.525 1.775-3.475 3.5-6.75 4.4-10.35a24 24 0 0 0-.5-13.5A8.525 8.525 0 0 0 62 2.25l-26.35 23.7a8.525 8.525 0 0 0-2.725 5.075l-3.2 21.25-.125.575c5.95 3.875 13.5 10.1 17.525 20a36.751 36.751 0 0 1 1.95 6.2c7-1.7 13.925-2.75 20.525-2.075v-.025Z"
        />
        <path
          fill="url(#f)"
          d="M83.4 127.75c5.675 1.55 11.4-3 12.175-8.85a46.75 46.75 0 0 1 4.85-15.975c-6.4-13.75-14.125-20.9-22.6-24.075-9-3.35-18.8-2.25-28.75.175 2.225 10.1.9 23.325-7.6 40.55 1 .45 2.025.75 3.125.825 0 0 6.1.5 13.4 1.025 7.25.5 18.1 4.275 25.4 6.3v.025Z"
        />
      </g>
    </g>
    <defs>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-7.25002 -47.25002 31.4875 -4.83142 49.112 102.835)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.4} />
        <stop offset={1} stopOpacity={0.1} />
      </radialGradient>
      <radialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-82.485 104.27 -8.832) scale(95.571 70.6085)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.6} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.1} />
      </radialGradient>
      <radialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-101.004 52.715 32.736) scale(73.3485 37.949)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.8} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.4} />
      </radialGradient>
      <radialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-19.24968 -39.25014 45.07134 -22.10461 105.235 121.335)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.3} />
        <stop offset={1} stopOpacity={0.3} />
      </radialGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h128v128H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h128v128H0z" />
      </clipPath>
    </defs>
  </svg>

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
