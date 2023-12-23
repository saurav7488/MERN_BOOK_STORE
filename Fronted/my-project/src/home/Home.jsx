import React from 'react'
import Banner from '../component/Banner'
import FavouriteBook from './FavouriteBook'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'


const home = () => {
  return (
    <div className='' >
       <Banner/>
       <FavouriteBook/>
       <FavBook/>
       <PromoBanner/>
       <OtherBook/>
       <Review/>
    </div>
  )
}

export default home
