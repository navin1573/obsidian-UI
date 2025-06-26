import React from 'react'

export const Logo = () => {
   return (
      <>
         <div className='flex justify-center'>
            <div className="logo-wrapper w-60 h-60  p-8 rounded-[50px] hover:scale-115
             transition-transform duration-1000">
               <img src='obsidianlogo.svg' />
            </div>
         </div>
      </>
   )
}
