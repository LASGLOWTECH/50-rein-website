
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Testimony from './Testimonials';
import { useEffect, useState } from "react";
import { RxAvatar } from "react-icons/rx"; 
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
      items: 2,
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

            <div className='  bg-gradient-to-r bg-gray-100 to-darkBlue   mx-auto px-6 py-20 bg-center' 
              
           >
<div className=" flex flex-col md:flex-row md:items-start items-center py-3 " key={index} >

  <div className=''><RxAvatar className='text-7xl fs-5 text-orangeRed '/> </div>

<div className=' flex justify-start flex-col '>

              <p className='pt-3 text-center md:text-left px-6  text-gray-800 font-normal text-base  ' data-aos-duration="1500" data-aos="slide-down">{Testimony.Subtext}
           </p>
                  < h4 className='text-grayBlack  text-center md:text-left  px-6  py-3  font-regular text-lg'> {Testimony.Title}</h4>
              
              
              </div>    
</div>
              

              

   
            </div>


          )

        })}




      </Carousel>






    </>
  )
}

export default Testifiers;