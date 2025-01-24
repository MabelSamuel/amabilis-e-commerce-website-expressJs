import React from 'react';

import Slider from '@/components/home/Slider';
import Product from '@/components/home/new arrival/Product';
import Support from '@/components/home/support/Support';

function Home() {
  return (
    <div className='h-fit'>
        <Slider/>
        <Support/>
        <Product/>
    </div>
  )
}

export default Home