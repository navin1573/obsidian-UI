import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-white text-xl font-bold mb-2">Obsidian</h2>
          <p className="text-sm max-w-sm">
            A private and extensible note‑taking app that works the way you think.
          </p>
        </div>


        <div className="justify-center flex flex-row md: gap-8 items-center md:items-start text-center md:text-left">
          <div>
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Download</a></li>
              <li><a href="#" className="hover:text-white">Plugins</a></li>
              <li><a href="#" className="hover:text-white">Themes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Community</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Forum</a></li>
              <li><a href="#" className="hover:text-white">Discord</a></li>
              <li><a href="#" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

 <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">        © {new Date().getFullYear()} Obsidian. All rights reserved.
      </div>
    </footer>
  )
}
