

// import React from 'react'

// const ASKText = () => {
//   return (
//     <div className="w-full flex justify-center items-center py-4 sm:py-6 bg-transparent">
//       <h1 className="text-[3rem] xs:text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] uppercase tracking-wide flex flex-wrap justify-center text-center">
//         <span className="stroke-only font-black">AYODHYA</span>
//         <span className="text-[#fab604] mx-1 sm:mx-3 md:mx-4 font-extrabold">SUPER</span>
//         <span className="stroke-only font-black sm:ml-2 md:ml-3 lg:ml-4">KINGS</span>
//       </h1>
//     </div>
//   )
// }

// export default ASKText;

import React from 'react'

const ASKText = () => {
  return (
    <div className="w-full flex justify-center items-center py-4 sm:py-6 bg-transparent">
      {/* Mobile View (stacked) */}
      <div className="sm:hidden text-center">
        <div className="text-[3rem] xs:text-[3.5rem] font-black text-[#fab604]">AYODHYA</div>
        <div className="text-[3rem] xs:text-[3.5rem] font-extrabold text-[#fab604]">SUPER</div>
        <div className="text-[3rem] xs:text-[3.5rem] font-black text-[#fab604]">KINGS</div>
      </div>

      {/* Desktop View (inline with strokes) */}
      <div className="hidden sm:block">
        <h1 className="text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] uppercase tracking-wide text-center">
          <span className="stroke-visible font-black">AYODHYA</span>
          <span className="text-[#fab604] mx-3 md:mx-4 font-extrabold">SUPER</span>
          <span className="stroke-visible font-black">KINGS</span>
        </h1>
      </div>
    </div>
  )
}

export default ASKText;