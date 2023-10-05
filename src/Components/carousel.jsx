import Team1 from './Teamlist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  BiSolidStar} from "react-icons/bi";

const Carouselitem=()=>{
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


    return(
        <>
        <section className='bg-white '>
        <div className='mx-auto container '>
        <div className="flex py-2 mb-3 px-2 flex-row items-center justify-center ">



</div>
        <Carousel responsive= {responsive}
         transitionDuration={1000}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet",  "mobile"]}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
  
>

{Team1.map((testimonials, index)=>{

  return(
<div className="py-6 px-3 bg-white hover:bg-green-50  tansition duration-200 ease-in shadow-lg" key={index}>
<p className="text-l text-center md:text-start text-greyBlack  leading-loose pb-4 ">
                                {testimonials.text} </p>
                            <div className="flex flex-row justify-start hover-blue-400 ">
                            
                       

                            <img src={testimonials.photo} alt="vita" className="mt-4 w-[100px] w-[100px]  p-2 rounded-[100%] border-2 bg-white-600 shadow-md   " />
                            <div className="flex flex-col justify-start ps-3  ">
                               
                                <p className="text-l font-bold text-greyBlack  pt-4 ">
                                   { testimonials.Name } </p>
                                <p className="text-base  text-greyBlack  font-thin ">
                                { testimonials.Position} </p>

                                <div className='flex mt-3 flex-row justify-start'>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                            
                              </div>
                                    </div> 
                            </div>

                           
                        </div>
  )
})}



</Carousel>
</div>
</section>;
        </>
    )
}

export default Carouselitem;