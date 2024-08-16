import React from 'react'
import './assets/css/homePage.css'
import './assets/css/home.mobile.css'
import { lazy, Suspense } from 'react';
import JoinBestGymBanner from './components/JoinBestGymBanner';
import WhyBarbelFitness from './components/WhyBarbelFitness';
const HomeBgImg = lazy(() => import('./components/HomeBgImg'));

export default function HomePage() {
  return (
    <div className=''>
      <div className='homeBgContainer'>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeBgImg />
        </Suspense>
      </div>
      <div id='homeRoot'>
        <JoinBestGymBanner/>  
        <WhyBarbelFitness/>   
      </div>
          
    </div>
  )
}
