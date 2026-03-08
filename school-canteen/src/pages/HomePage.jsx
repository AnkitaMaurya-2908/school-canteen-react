import React from 'react'
import HeroSection from '../components/HeroSection'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodList from '../components/FoodList/FoodList'

const HomePage = () => {
  return (
    <>
<div className='px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-x-auto scrollbar-hide bg-white'>
  <HeroSection/>
  <ExploreMenu/>
  </div>    
    </>
  )
}

export default HomePage