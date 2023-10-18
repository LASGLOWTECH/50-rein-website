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
        <section className='mypolygon py-6'>
        <div className='mx-auto container '>
        
        <Carousel responsive= {responsive}
         transitionDuration={1000}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet",  "mobile"]}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
  
>

{Team1.map((testimonials, index)=>{

  return(
<div className="py-6 px-3 hover:bg-green-50 flex  rounded-[30px] ms-3 tansition duration-200 ease-in shadow-lg" key={index}>

                            <div className="flex mx-auto  flex-col py-3 items-center justify-center hover-blue-400 ">
                            
                       <div className=''>


                       <img src={testimonials.photo} alt="vita" className="mt-4 w-[150px]   p-2 rounded-[100%] border-2 bg-white-600 shadow-md   " />
                    
                       </div>

                                   <div className="flex flex-col  items-center  justify-center ps-3  ">
                               
                                <p className="text-2xl text-center font-bold text-greyBlack  pt-4 ">
                                   { testimonials.Name } </p>
                                <p className="text-base text-center py-2 text-greyBlack  font-thin ">
                                { testimonials.Position} </p>

                                <div className='flex mt-3 flex-row justify-center'>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                              <BiSolidStar className='text-orangeRed text-base'/>
                            
                              </div>

                              <p className="text-l text-center text-greyBlack  leading-loose pt-6 ">
                                {testimonials.text} </p>
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