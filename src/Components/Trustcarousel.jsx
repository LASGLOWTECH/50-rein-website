
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimony from './Testimonials';
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';



const Testifiers = () => {

  useEffect(() => {
    setInterval(() => {
      AOS.init({ duration: 3000 });

    }, 1000);

  }, []);



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <>


      <Carousel responsive={responsive}
       
       
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "desktop","mobile"]}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}

      >


        {Testimony.map((Testimony, index) => {
          return (

            <div className=' bg-gray-50 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 shadow-lg py-4 bg-center' key={index} 
              
            style=
            {{
              
              clipPath: "ellipse(100% 55% at 48% 44%)"
            }}>

              <div className='   flex justify-center  items-centerp-6 flex-col '>
              <p className='pt-3 text-center md:text-left px-6  text-gray-800 font-normal text-lg  ' data-aos-duration="1500" data-aos="slide-down">{Testimony.Subtext}
           </p>
              <div className='w-[50px] my-8 rounded-lg h-[3px] bg-darkGreen' data-aos="slide-right" />
                  < h4 className='text-grayBlack text-center md:text-left px-6  font-bold text-3xl'>  {Testimony.Title}</h4>
              </div>

              <img src=  {Testimony.Picture} alt='ourthrive-image ' className=' pt-5 w-full' />



            </div>


          )

        })}




      </Carousel>






    </>
  )
}

export default Testifiers;