// // import React from 'react'
// // import Button from '../Home/Button'

// // const Card = ({name,image}) => {
// //   return (

// //        <div className="relative  flex items-center border border-gray-300 p-2 justify-center text-sm text-white/80 rounded-lg shadow-sm max-w-70">
        
// //             <img className="inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-md w-[300px] h-[200px] object-cover" src={image} alt="" />
// //                 <Button className="absolute top-4 left-3 hidden md:block">{name}</Button>
            
// //         </div>

// //   )
// // }

// // export default Card



// import React, { useState } from 'react'
// import Button from '../Home/Button'
// import { FaPlus } from "react-icons/fa6";
// import { FiMinus } from "react-icons/fi";

// const Card = ({ name, image }) => {
//   const [quantity, setQuantity] = useState(0)

//   const decrease = () => setQuantity(q => Math.max(0, q - 1))
//   const increase = () => setQuantity(q => q + 1)

//   return (
//     <div className="relative flex flex-col border border-gray-300 p-2 rounded-lg shadow-sm max-w-70 overflow-hidden">

//       {/* Image */}
//       <div className="relative">
//         <img
//           className="rounded-md w-[300px] h-[200px] object-cover"
//           src={image}
//           alt={name}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-md" />

//         {/* Name tag - top left */}
//         <Button className="absolute top-3 left-3 ">{name}</Button>

//         {/* Quantity controls - bottom left over image */}
//         <div className="absolute bottom-3 right-3 flex items-center gap-1">
//           {quantity > 0 && (
//             <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-md px-2 py-0.5 shadow">
//               <button
//                 onClick={decrease}
//                 className="text-gray-600 hover:text-black text-base leading-none transition-colors"
//               >
//                 <FiMinus className='size-4 text-[#463f3a]' />

//               </button>
//               <span className="text-sm font-semibold text-gray-800 min-w-[16px] text-center">
//                 {quantity}
//               </span>
//               <button
//                 onClick={increase}
//                 className="text-gray-600 hover:text-black text-base leading-none transition-colors"
//               >
//                               <FaPlus className='size-3 text-[#463f3a]' />

//               </button>
//             </div>
//           )}

//           {/* Plus icon to reveal quantity */}
//           {quantity === 0 && (
//             <button
//               onClick={increase}
//               className="w-7 h-7 flex items-center justify-center bg-white/90 backdrop-blur-sm text-gray-800 rounded-md text-lg font-medium shadow hover:bg-white active:scale-95 transition-all duration-150"
//             >
//               <FaPlus className='size-4 text-[#463f3a]' />

//             </button>
//           )}
//         </div>
//       </div>

//       {/* Order button - always visible below image */}
//       <button className="mt-2 w-full text-sm font-medium py-1.5 px-3 rounded-md bg-[#e07a5f] text-white hover:bg-[#ff9f1c] active:scale-95 transition-all duration-200">
//         Order
//       </button>

//     </div>
//   )
// }

// export default Card

import React, { useState } from "react"
import Button from "../Home/Button"
import { FaPlus } from "react-icons/fa6"
import { FiMinus } from "react-icons/fi"
import OrderModal from "../OrderModal"
import { students } from "../../assets/assests"

const Card = ({ name, image }) => {

  const [quantity, setQuantity] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const decrease = () => setQuantity(q => Math.max(0, q - 1))
  const increase = () => setQuantity(q => q + 1)

  return (
    <>
      <div className="relative flex flex-col border border-gray-300 p-2 rounded-lg shadow-sm max-w-70 overflow-hidden">

        <div className="relative">
          <img
            className="rounded-md w-[300px] h-[200px] object-cover"
            src={image}
            alt={name}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-md" />

          <Button className="absolute top-3 left-3">{name}</Button>

          {/* Quantity */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1">

            {quantity > 0 ? (
              <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-0.5 shadow">

                <button onClick={decrease}>
                  <FiMinus className="size-4 text-[#463f3a]" />
                </button>

                <span className="text-sm font-semibold">{quantity}</span>

                <button onClick={increase}>
                  <FaPlus className="size-3 text-[#463f3a]" />
                </button>

              </div>
            ) : (
              <button
                onClick={increase}
                className="w-7 h-7 flex items-center justify-center bg-white rounded-md shadow"
              >
                <FaPlus className="size-4 text-[#463f3a]" />
              </button>
            )}

          </div>
        </div>

        {/* Order */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-2 w-full text-sm py-1.5 rounded-md bg-[#e07a5f] text-white"
        >
          Order
        </button>

      </div>

      {showModal && (
        <OrderModal
          students={students}
          name={name}
          image={image}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

export default Card