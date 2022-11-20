import { useState } from 'react';
import { PrevIcon } from '../icons/PrevIcon';
import { NextIcon } from '../icons/NextIcon';
const imgProduct1 = "https://http2.mlstatic.com/D_NQ_NP_940337-MLM29592677576_032019-O.jpg";
const imgProduct2 = "https://http2.mlstatic.com/D_NQ_NP_747089-MLM43189396165_082020-O.jpg";
const imgProduct3 = "https://m.media-amazon.com/images/I/41bwEWSI1hS._SL500_.jpg";
const imgProduct4 = "https://http2.mlstatic.com/D_NQ_NP_752418-CBT45576875165_042021-V.jpg";
const imgProduct5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiy84f1nZGSmFtDiMqvyx2LiCy3762EkxnQ&usqp=CAU";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];

export const SlideProduct = () => {

  const [Index, setIndex] = useState(0);
  const HandlePreImage =  () => {
    Index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(Index - 1);
  };
  const HandleNextImage = () =>{
    Index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(Index + 1);
  };

  return (
        <section className="grid md:grid-cols-4 md:gap-4">
            <div className="relative col-span-4">
                <img src={ARRAY_IMGS[Index]} alt="" className='aspect-[16/12] mx-auto'/>
                <div className='absolute top-1/2 left-0 flex w-full translate-y-1/2 justify-between px-4'>
                  <button onClick={ HandleNextImage } className='grid h-10 w-10 place-items-center rounded-full bg-white hover:bg-blue-300'>
                    <PrevIcon/>
                  </button>
                  <button onClick={ HandlePreImage } className='grid h-10 w-10 place-items-center rounded-full bg-white hover:bg-blue-300'>
                    <NextIcon/>
                  </button>
                </div>
            </div>
            <img src={imgProduct2} alt="" className='hidden md:block' />
            <img src={imgProduct3} alt="" className='hidden md:block' />
            <img src={imgProduct4} alt="" className='hidden md:block' />
            <img src={imgProduct5} alt="" className='hidden md:block' />
        </section>
  )
}
