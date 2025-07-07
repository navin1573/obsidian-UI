import React from 'react'

export const Board = () => {
  return (
   <>
   <svg
     className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-20"
     xmlns="http://www.w3.org/2000/svg"
     preserveAspectRatio="none"
   >
     <filter id="grain">
       <feTurbulence type="turbulence" baseFrequency="1" numOctaves="0.9" stitchTiles="stitch" />
       <feColorMatrix type="saturate" values="0" />
     </filter>
     <rect width="100%" height="100%" filter="url(#grain)" />
   </svg>
   {/* card-1 */}
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 md:px-10 py-10">
<div className="bg-gradient-to-tr from-[#6c28d973] to-zinc-950 text-white p-10 rounded-lg md:m-10 border border-[rgba(255,255,255,0.15)]">
  <h3 className="text-lg font-semibold mb-2">Join us on Discord</h3>
  <p className="text-gray-400 text-sm leading-relaxed">
    Get help, ask questions, meet other Obsidian users, and learn about their setup.
  </p>
</div>
{/* card 2 */}
<div className="bg-gradient-to-tr from-[#6c28d973] to-zinc-950 text-white p-10 rounded-lg md:m-10 border border-[rgba(255,255,255,0.15)]">
  <h3 className="text-lg font-semibold mb-2">Developer docs</h3>
  <p className="text-gray-400 text-sm leading-relaxed">
   Learn how to build your own Obsidian plugins and themes, using our open API and documentation.
  </p>
</div>
{/* card 3 */}
<div className="bg-gradient-to-tr from-[#6c28d973] to-zinc-950 text-white p-10 rounded-lg md:m-10 border border-[rgba(255,255,255,0.15)]">
  <h3 className="text-lg font-semibold mb-2">Discussion forum</h3>
  <p className="text-gray-400 text-sm leading-relaxed">
Post feature requests, report bugs, and explore in-depth discussions about knowledge management.
  </p>
</div>

</div>


   </>
  )
}
