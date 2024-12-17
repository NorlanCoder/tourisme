import { useState, useEffect } from 'react';
import { FiArrowUpCircle } from "react-icons/fi";

function Footer(){
    return <>
        <section>
            <div>
                <div className="container bg-white mx-auto drop-shadow-4xl rounded-t-3xl mb-1 mt-12">
                    <div className="img bg-footer-top-bg" >
                        
                    </div>
                
                <div className="container bg-white mx-auto drop-shadow-4xl rounded-t-3xl mb-1">
                    <div className="content flex sm:flex-row gap-4 flex-col justify-between px-12 py-6">
                        <div className="right w-[60%]">
                            <div className="logo text-2xl font-bold text-green-700">TOURISM</div>
                            <div className="slogan"> <h1> Explore the word with us </h1> </div>
                            <div className="socials flex">
                                
                            </div>
                        </div>
                        <div className="left w-[40%] flex md:flex-row flex-col md:gap-8 gap-2">
                            <div className="menu">
                                <h1 className='text-lg font-semibold text-green-700'>Company</h1>
                                <h2 className=' text-base font-normal'>Home</h2>
                                <h2 className='text-base font-normal'>Blog</h2>
                                <h2 className='text-base font-normal'>About us</h2>
                                <h2 className='text-base font-normal'>Contact</h2>
                            </div>
                            <div className="resources">
                                <h1 className="text-lg font-semibold text-green-700">Resources</h1>
                                <h2 className="text-base font-normal">Blog</h2>
                                <h2 className="text-base font-normal">Terms and conditions</h2>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center mx-10 py-3">
                        <div>
                            <h1 className=''>© 2023 NerdX Digital</h1>
                        </div>
                        <div>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className='w-8 my-1 text-green-700' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg> </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
}

export default Footer
