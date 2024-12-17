import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/img/airport-4120835_1280.jpg'
import img2 from '../assets/img/south-india-2075399_1280.jpg'
import img3 from '../assets/img/desert-6826299_1280.jpg'
import img4 from '../assets/img/alleppey-3170776_1280.jpg'
import img5 from '../assets/img/airplane-4885803_1280.jpg'
import img6 from '../assets/img/hut-7032759_1280.jpg'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'

import { useCallback } from "react";

function Slider(){
    return <>
        <Swiper
                className='w-[90%] flex justify-center'
                effect={ 'coverflow' }
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={-100}
                slidesPerView={3}
                coverflowEffect={
                    {
                        rotate: 10,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                navigation={{
                    nextEl : '.swipper-button-next',
                    prevEl : '.swipper-button-prev',
                    clickable : true 
                }}
                autoplay={{
                    delay: 2500,
                    }}
                data-swiper-autoplay="2000"
                modules={[ Autoplay, EffectCoverflow, Pagination]}
                >
                    
                <SwiperSlide><img src={img1} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img2} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img3} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img4} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
                <SwiperSlide><img src={img5} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide>
                <SwiperSlide><img src={img6} className='w-92 rounded-2xl' alt="" srcset="" /></SwiperSlide> 
            </Swiper>
    </>
}

function Form(){
    return <>
        <section id='form'>
            <div className="container bg-white mx-auto drop-shadow-4xl rounded-3xl mt-12 mb-1">
            <div className="flex justify-between items-center px-5 py-8" >
                <div className="left w-[40%]">
                    <h1 className=' font-semibold md:text-5xl text-3xl text-gray-900'> Notre <span className='text-green-600'>équipe</span> est à votre <span className=' underline decoration-green-600'>écoute</span> <span className='text-green-600'>!</span></h1>
                </div>
                <div className="right w-[40%]">
                    <p className='font-medium text-sm'>Vous avez des questions, besoin d'informations ou envie de planifier votre prochain <span className=' underline decoration-green-600'>voyage</span> ?</p>
                </div>
            </div>
            <Slider />

            <div className="form-wrapper">
                <div className="form-title text-4xl m-6 font-semibold text-center text-gray-900">Contactez nous</div>

                <div className="form">
                    <form class="max-w-full md:mx-20 mx-6">
                        <div className="grid grid-cols-2 gap-4">
                           
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Nom</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Prenom</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                            <div>
                                <label for="small-input" class="block mb-1 ml-2 text-sm font-medium text-gray-900 ">Phone</label>
                                <input type="text" id="small-input" class="block w-full p-3 text-gray-900 border border-gray-200 rounded-2xl bg-gray-50 text-xs focus:outline-none focus:ring-green-500 focus:border-green-500"></input>
                            </div>
                             
                        </div>
                        <div className="submit-button w-full flex justify-center">
                            <input type="submit"  value="Envoyer" className='px-16 py-1 my-6 mx-auto border-2 cursor-pointer border-green-700 bg-green-700 text-white rounded-3xl' />
                        </div>
                    </form>
                </div>
            </div>

            </div>
        </section>
    </>
}

export default Form;