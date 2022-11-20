import React from 'react'
import { DetailsProduct } from './DetailsProduct'
import { SlideProduct } from './SlideProduct'

export const MainProduct = () => {
  return (

    <main className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <SlideProduct/>
        <DetailsProduct/>
    </main>
  )
}
