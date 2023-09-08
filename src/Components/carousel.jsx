import Team1 from './Teamlist';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BiStar } from "react-icons/Bi";
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
        <div className="flex py-2 flex-row items-center justify-center ">

<div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
<h3 className="text-xl font-bold text-darkBlue ">What People Say About us</h3>
<div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

</div>
        <Carousel responsive= {responsive}
         transitionDuration={1000}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
  
>

{Team1.map((testimonials, index)=>{

  return(
<div className="py-8 px-3 bg-white shadow-md" key={index}>
<p className="text-base text-greyBlack py-6 ">
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus vitae consectetur,
                                  dolorem suscipit, voluptatem similique ratione r?  </p>
                            <div className="flex flex-row justify-start ">
                            <BiStar className="text-l font-bold text-darkBlue pt-4 "/>

                            <img src={testimonials.photo} alt="vita" className="mt-4 w-[100px] w-[100px]  p-2 rounded-[100%] border-2 bg-darkBlue shadow-md   " />
                            <div className="flex flex-col justify-start ps-3  ">
                               
                                <p className="text-l font-bold text-greyBlack  pt-4 ">
                                   { testimonials.Name } </p>
                                <p className="text-base  text-greyBlack  font-thin ">
                                { testimonials.Position} </p>
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