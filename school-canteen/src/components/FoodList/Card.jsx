import React from 'react'
import Button from '../Home/Button'

const Card = ({name,image}) => {
  return (

       <div className="relative  flex items-center border border-gray-300 p-2 justify-center text-sm text-white/80 rounded-lg shadow-sm max-w-70">
        
            <img className="inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-md w-[300px] h-[200px] object-cover" src={image} alt="" />
                <Button className="absolute top-4 left-3 hidden md:block">{name}</Button>
            
        </div>

  )
}

export default Card