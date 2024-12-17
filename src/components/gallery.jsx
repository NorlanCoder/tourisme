import { useState, useEffect } from 'react';
import { useCallback } from "react";


function Gallery(){
    return <>
        <section className="container flex justify-center mx-auto">
            <div className="container bg-gray-900 drop-shadow-2xl rounded-3xl">
                <div className="px-5 py-8" >
                    <div className="">
                        <h1 className=' font-semibold md:text-5xl text-4xl text-center text-white'> Our top-rated <span className='block'> and highty visited hotel</span></h1>
                    </div>
                    <div className="categories flex justify-center gap-4 my-6">
                        <div className="category1 rounded-3xl border border-1 border-green-500 md:text-xl px-4 py-1 bg-gray-800 text-gray-400">Attraction</div>
                        <div className="category2 rounded-3xl border border-1 border-green-500 md:text-xl px-4 py-1 bg-gray-800 text-gray-400">Restauration</div>
                        <div className="category3 rounded-3xl border border-1 border-green-500 md:text-xl px-4 py-1 bg-gray-800 text-gray-400">Tourisme</div>
                    </div>
                    <div class="grid md:grid-rows-2 grid-rows-3 grid-flow-col gap-4 py-1 md:mx-24 my-8">
                        <div className='bg-gallery-img1 rounded-xl bg-cover w-full h-60'></div>
                        <div className='bg-gallery-img2 rounded-xl bg-cover w-full h-60'></div>
                        <div className='bg-gallery-img3 rounded-xl bg-cover w-full h-60'></div>
                        <div className='bg-gallery-img4 rounded-xl bg-cover w-full h-60'></div>
                        <div className='bg-gallery-img5 rounded-xl bg-cover w-full h-60'></div>
                        <div className='bg-gallery-img6 rounded-xl bg-cover w-full h-60'></div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
}

export default Gallery;