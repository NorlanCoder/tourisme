import { useState, useEffect } from 'react';




function Navbar() {

    const updateMenu = () => {
        if(!isMenuClicked){
            setIsMenuClicked(true)
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu-on-apear absolute flex z-10 flex-col w-screen left-1/2 opacity-100 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }else{
            setIsMenuClicked(false)
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu absolute flex flex-col z-10 w-[80%] left-1/2 opacity-0 duration-500 -translate-x-1/2 z-30 bg-[#e5e7e6f5]")
        }
    }
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu-on-apear absolute flex-col w-[0%] transform hidden opacity-0 duration-500  z-30 bg-[#e5e7e6f5]")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    return <>
    <div className={menu_class}>
         <div className="pt-6 px-4 select-none">
             <div className="md:text-xl rounded-lg w-full flex flex-col justify-center gap-y-4 font-extralight">
                 <div className='md:hidden flex z-20 justify-end text-[#55883b]'>
                     <svg className={burger_class} onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <line className='line1' x1="3" y1="12" x2="21" y2="12"></line>
                     <line className='line2' x1="3" y1="6" x2="21" y2="6"></line>
                     <line className='line3' x1="3" y1="18" x2="21" y2="18"></line>
                     </svg>
                 </div>
                 <a href="#home" className='border-b-2 w-full text-center border-green-600 py-3'><span className='mx-4'>Home</span></a>
                 <a href="#about" className='border-b-2 w-full text-center border-green-600 py-3'><span className='mx-4'>Blog</span></a>
                 <a href="#faq" className='border-b-2 w-full text-center border-green-600 py-3'><span className='mx-4'>About us</span></a>
                 <a href="#contact" className='border-b-2 rounded-b-xl w-full text-center border-green-600 pt-3 pb-7'><span className='mx-4'>More</span></a>
                 </div>
             </div>
         </div>
     <div className="navbar w-full py-4 z-40 flex items-center md:justify-between lg:bg-gray-100 bg-[#e5e7e6] md:px-24 px-6 justify-between select-none">
         <div className="logo z-10 mt-2">
             LOGO
         </div>
         <div className="menu z-20 mt-2">
             <div className="md:flex hidden font-extralight lg:gap-x-20 sm:gap-x-10">
                 <a href="#home">Home</a>
                 <a href="#blog">Blog</a>
                 <a href="#faq">About us</a>
                 <a href="#contact">More</a>
             </div>
             <div className='md:hidden flex z-20 justify-end text-[#55883b]'>
                 <svg className={burger_class} onClick={updateMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                     <line className='line1' x1="3" y1="12" x2="21" y2="12"></line>
                     <line className='line2' x1="3" y1="6" x2="21" y2="6"></line>
                     <line className='line3' x1="3" y1="18" x2="21" y2="18"></line>
                 </svg>
             </div>
         </div>
         
         <div className="download-button md:flex hidden z-20">
             <a href="#footer" className="md:flex hidden h-12 px-5 py-3 text-md font-md mx-auto rounded-lg bg-[#55883b] text-white">Sign up</a>
         </div>
     </div>
 
</>
    
}

// header component
function Header(){
return<>
<section id='home'>
    <div className="navbar bg-gray-50"><Navbar /></div>

    <div className="header flex justify-center mx-2">
        <div className="container w-full drop-shadow-2xl md:h-[700px] h-[500px] saturate-200 bg-hero-pattern bg-cover rounded-3xl">
            <div className="absolute w-full h-full bg-gray-950 rounded-3xl opacity-15"></div>
            <div className="title backdrop-opacity-100 w-full h-full flex justify-center items-center">
                <div className="content text-center">
                    <h1 className='text-white md:text-6xl text-4xl mb-10 text-center font-semibold'>Découvrez le monde à travers des <span className='block'>expériences uniques.</span></h1>
                    <a href="#" className='text-white border-2 px-6 py-2 rounded-3xl border-[#55883b] hover:text-white hover:bg-[#55883b] duration-500'>En savoir plus</a>
                </div>
                
            </div>
        </div>
    </div>
    </section>

    </>
}

export default Header;