import { useState, useEffect } from 'react';
import { useCallback } from "react";
import { FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";

function Top (){
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const blogPosts = [
    {
      id: 1,
      },
    {
      id: 2,
      },
    {
      id: 3,
      },
    {
      id: 4,
      },
    {
      id: 5,
      },
    {
      id: 6,
      }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 3 ? 0 : prevIndex + 1
    );
  }, [blogPosts.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1
    );
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

    return <>
        <div className="container bg-white mx-auto drop-shadow-4xl rounded-3xl mt-12 mb-10">
            <div className="flex justify-between items-center px-5 py-8" >
                <div className="left w-[40%]">
                    <h1 className=' font-semibold md:text-5xl text-4xl text-gray-900'>Les lieux <span className='text-green-600'>touristiques</span> les plus <span className='text-green-600'>visités</span></h1>
                </div>
                <div className="right w-[40%]">
                    <p className='font-medium text-sm'>Découvrez les lieux incontournables qui attirent chaque année des millions de visiteurs à travers le monde. Laissez-vous inspirer par ces lieux mythiques, riches en histoire, en culture et en paysages à couper le souffle.</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 md:translate-x-md sm:translate-x-sm translate-x-mobile ease-in-out"
            style={{ '--current-index': currentIndex }}
            
          >
            
              <div
                className="md:w-1/3 sm:w-1/2 w-full h-96 flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img1-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                  <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/3 sm:w-1/2 w-full flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img2-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/3 sm:w-1/2 w-full flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img3-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/3 sm:w-1/2 w-full flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img1-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/3 sm:w-1/2 w-full flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img2-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div
                className="md:w-1/3 sm:w-1/2 w-full flex-shrink-0 px-4"
                role="article"
                aria-label="post.title"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden bg-img3-pattern bg-cover h-full transition-transform duration-300 hover:scale-105">
                <div className="content absolute bottom-0 p-4">
                    <h1 className='text-white font-bold'>Lac Oueme</h1>
                    <h2 className='inline-block'>Porto-novo</h2>
                    <div className="rate flex text-white">
                    <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
                    </div>
                  </div>
                  
                </div>
              </div>
            
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Next slide"
        >
          <FiChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={toggleAutoplay}
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? (
            <FiPause className="w-6 h-6 text-gray-800" />
          ) : (
            <FiPlay className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>
    </div>
        </div>
    </>
}

export default Top;