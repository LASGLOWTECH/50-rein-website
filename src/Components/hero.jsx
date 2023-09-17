
import { Link } from "react-router-dom";
import Carouselitem from "./carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./faq";
const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, []);
  return (
    <>



      <div className=" Hero py-10 h-auto w-100 ">
        <div className="  container py-6 mx-auto flex flex-col items-between md:flex-row ">
          <div className="left px-4 py-6  max-width-medium  " data-aos="slide-right">

            <h1 className="text-darkBlue text-center pt-5 text-5xl  md:text-left md:text-5xl max-w-lg   font-bold">A Compedium of Excellence </h1>
            <p className="text-[18px] text-center md:text-left font-normal text-greyBlack pt-6  pb-10">
              50 REIN is curating an anthology of greatness in a compedium. A compedium where the journeys of Nigerian Real Estate Icons can be explored, their challenges understood, and their triumphs celebrated.
            </p>

            <Link to="/About" className=" mx-auto text-xl 
px-3 py-3 mt-8 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
              <button className=" text-xl">Learn more</button> </Link>

          </div>


          <div className="mt-20 px-3 bg-white  " data-aos="zoom-in-up">
            <img src="/services.jpg" alt="vita"  className="  w-full rounded-br-[30px] rounded-tl-[30px] md:w-[1500px] " />

        


          </div>

          {/* <div className="  relative flex flex-col mt-6 justify-between bg-green-300 h-[300] w-full rounded-br-[30px] rounded-tl-[30px] items-center  py-6 " data-aos="zoom-in-up">

          <img src="/services.jpg" alt="vita"  className="w-full  rounded-br-[30px] rounded-tl-[30px] h-auto " />

        





          </div> */}


        </div>


      </div>


      <section className="">
        <div className="  container py-6 mx-auto grid  gap-3 grid-cols-1    md:grid-cols-2 ">
          <div className="   rounded-md " data-aos="zoom-in-up">
            <div className="left px-4 py-12  ">

              <h3 className="text-lightBlue text-3xl  font-bold">Who we are</h3>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[100px] "></div>
              <p className="text-[18px]  text-greyBlack   text-truncate font-md py-6 ">
                50 REIN is an ideation with it’s core values and mandate encompass in amplifying the
                real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
                integrity, consistency, morals and delivery of values.  </p>

              <Link to="/About" className="  text-xl 
px-2 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>

          <div className=" bg-white  " data-aos="zoom-in-up">
            <div className="left px-4 py-12  ">

              <h4 className="text-lightBlue text-3xl  font-bold">What we do</h4>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[100px] "></div>
              <p className="text-[18px]  text-greyBlack   font-md py-6 ">
                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/services" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>



          <div className="mt-20  bg-white  " data-aos="zoom-in-up">
            <img src="/services.jpg" alt="vita"  className="w-full  rounded-br-[30px] rounded-tl-[30px] h-auto " />

        


          </div>

          <div className=" mt-20 rounded-md " data-aos="zoom-up">
            <div className="left px-4   ">

              <h2 className="text-darkBlue font-bold text-4xl">How we Started</h2>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[100px] "></div>
              <p className="text-[18px] text-greyBlack  font-md py-6 ">
                In the dynamic world of real estate, our journey began with a stumble, but it transformed
                into an unwavering quest for authenticity and dependability. Picture a group of young
                individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                to carve their path, they invested their time, resources, and aspirations into projects that held
                the promise of success. But the real estate landscape had its lessons to teach, and those
                lessons came at a cost.

              </p>

              <Link to="/About" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Explore</button> </Link>

            </div>


          </div>




          <div className=" bg-white mt-20 " data-aos="slide-right">
            <div className="left px-4   ">
              <p className="text-2xl  text-orangeRed font-md py-2">
                Realtors  </p>
              <h2 className="text-darkBlue font-bold text-4xl">Estate Companies That
                Have made differences</h2>

              <p className="text-[18px]  text-greyBlack font-md py-6 ">
                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/realtors" className="  text-xl 
px-3 py-3 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">View Details</button> </Link>

            </div>


          </div>


          <div className=" bg-white mt-20 " data-aos="flip-right">
            <img src="/mirrrorb.jpg" alt="vita" className="w-full mt-6 rounded-tl-[30px] rounded-br-[30px] h-auto " />





          </div>
        </div>

      </section>

      <h3 className="text-4xl  text-center mt-20 pb-2 font-bold px-6 text-darkBlue ">Testimonials</h3>

<div className="mt-10">
      <Carouselitem  />
      </div>

      <div className="md:mx-36 ">



        <Faq data-aos="flip-up" />
      </div>

    </>



  )
}
export default Home;
