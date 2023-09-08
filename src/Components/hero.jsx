
import { Link } from "react-router-dom";
import Carouselitem from "./carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });

}, []);
  return (
    <>
      <div className="  py-4 h-auto w-100 Hero"></div>


      <div className=" bg-darkBlue py-2  h-auto w-100 Hero">
        <div className="  container py-6 mx-auto flex flex-col items-between md:flex-row ">
          <div className="left px-4 py-6  "  data-aos="slide-right">

            <h1 className="text-white text-center md:text-left text-4xl   max-w-2xl font-bold">An ode to the past and a commitment to the future. </h1>
            <p className="text-[16px] font-normal text-white py-6 ">
            An ode to the past and a commitment to the future. We are curating an anthology of 
greatness in a compendium. 
A compendium where the journeys of Nigerian Real Estate Icons can be explored, their
challenges understood, and their triumphs celebrated. Each profile stands as a testament to 
what can be achieved through dedication, determination, and unwavering commitment.
 </p>

            <Link to="/About" className="  text-xl 
px-3 py-3 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
              <button className=" text-xl">Learn more</button> </Link>

          </div>
          <div className="  relative flex flex-col justify-between items-center  py-6 "  data-aos="zoom-in-up">
          <p className="text-base pb-2 text-center md:text-right ps-4 text-white  font-md  ">
               <span className="text-orangeRed "> "</span>  Real estate is not just about bricks and mortar; it’s about vision, leadership, and community 
impact <span className="text-orangeRed "> "</span>  </p>
      
            <div className="right ms-60 w-[50px] h-[50px] animate-pulse mb-6 rounded-circle bg-white rounded-[100%]">
            </div>
            <div className="right w-[300px] h-[300px] animate-spin-3s flex items-center justify-center rounded-circle bg-orangeRed rounded-[100%]">

              <div className="rightcircle w-[290px] h-[290px] rounded-circle rounded-[100%]">



              </div>


            </div>

            <div className="right me-60 mt-5 w-[50px] h-[50px] animate-pulse gradient from-current rounded-circle bg-orangeRed rounded-[100%]">
            </div>
            

          </div>


        </div>


      </div>


      <section className="">
        <div className="  container py-10 mx-auto grid  gap-6 grid-cols-1    md:grid-cols-2 ">
          <div className=" bg-cyanGreen shadow-lg rounded-md ">
            <div className="left px-4 py-12  ">

              <h4 className="text-darkBlue text-2xl  font-bold"  data-aos="zoom-in-up">Who we are</h4>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[150px] "></div>
              <p className="text-l text-greyBlack text-truncate font-md py-6 ">
              50 REIN is an ideation with it’s core values and mandate encompass in amplifying the 
              real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
               integrity, consistency, morals and delivery of values....  </p>

              <Link to="/About" className="  text-xl 
px-2 py-1 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-xl font-light">Read more</button> </Link>

            </div>


          </div>

          <div className=" bg-white shadow-lg  "  data-aos="zoom-in-up">
          <div className="left px-4 py-12  ">

              <h4 className="text-darkBlue text-2xl  font-bold">What we do</h4>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[150px] "></div>
              <p className="text-base  text-greyBlack font-md py-6 ">
              Being passionate about creating a terrific impact in the Nigeria real estate industry,
               we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of 
              Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/services" className="  text-xl 
px-2 py-1 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-xl font-light">Read more</button> </Link>

            </div>


          </div>

          <div className=" bg-white shadow-lg  "  data-aos="zoom-in-up">
          <img src="/services.jpg" alt="vita" className="w-full h-auto " />

          <p className="text-base px-4  text-greyBlack font-md py-6 ">
                We are group of organized individuals, aiming for the projection
                of the image of outstanding Real estate companies, who have
                maintained their integrity over the years  </p>
      


          </div>
          <div className=" bg-cyanGreen shadow-lg rounded-md " data-aos="zoom-up">
            <div className="left px-4 py-12  ">

              <h4 className="text-darkBlue text-2xl  font-bold">How we Started</h4>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[150px] "></div>
              <p className="text-l text-greyBlack text-truncate font-md py-6 ">
              In the dynamic world of real estate, our journey began with a stumble, but it transformed 
into an unwavering quest for authenticity and dependability. Picture a group of young 
individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager 
to carve their path, they invested their time, resources, and aspirations into projects that held 
the promise of success. But the real estate landscape had its lessons to teach, and those 
lessons came at a cost............

  </p>

              <Link to="/About" className="  text-xl 
px-2 py-1 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-xl font-light">Explore</button> </Link>

            </div>


          </div>




          <div className=" bg-white shadow-lg  "  data-aos="zoom-up">
          <div className="left px-4 py-6  ">
          <p className="text-2xl  text-orangeRed font-md py-2">
             Realtors  </p>
              <h2 className="text-darkBlue font-bold text-4xl">Estate Companies That
                     Have made differences</h2>
           
              <p className="text-base  text-greyBlack font-md py-6 ">
              Being passionate about creating a terrific impact in the Nigeria real estate industry,
               we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of 
              Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/services" className="  text-xl 
px-2 py-1 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-xl font-light">View Details</button> </Link>

            </div>


          </div>


          <div className=" bg-white shadow-lg  "  data-aos="zoom-up">
          <img src="/mirrrorb.jpg" alt="vita" className="w-full h-auto " />

       
      


          </div>
        </div>


      </section>

<Carouselitem/>


    </>
  )
}
export default Home;
