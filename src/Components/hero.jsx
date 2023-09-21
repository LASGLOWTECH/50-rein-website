
import { Link } from "react-router-dom";
import Carouselitem from "./carousel";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Faq from "./faq";
const Home = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <>



      <div className=" Hero pb-8 pt-20 h-auto w-100 ">
        <div className="  container py-6 mx-auto flex flex-col items-between md:flex-row ">
          <div className="left px-4 py-6  max-width-medium  " data-aos="slide-right">

            <h1 className="text-darkBlue text-left pt-5 text-5xl  md:text-left md:text-6xl max-w-lg   font-bold">A Compedium of Excellence </h1>
            <p className="text-[18px] text-left md:text-left max-w-2xl font-normal text-greyBlack pt-6  pb-10">
              50 REIN is curating an anthology of greatness in a compedium. A compedium where the journeys of Nigerian Real Estate Icons can be explored, their challenges understood, and their triumphs celebrated.
            </p>

            <Link to="/About" className=" mx-auto text-xl 
px-3 py-3 mt-10 rounded-3xl bg-orangeRed text-white hover:bg-lightBlue  ">
              <button className=" text-xl">Learn more</button> </Link>

          </div>


          <div className="mt-5 flex flex-col mx-auto items-center justify-center  " data-aos="zoom-in-up" >
            < div className="flex flex-row mx-auto items-center justify-start ">            <h1 className=" text-[250px] md:text-[300px]  text-orangeRed"> 5</h1>
            <img src="/circlestroke.png" alt="vita" className="   -ml-[50px] animate-spin-slow  rounded-br-[30px] rounded-tl-[30px] w-[300px] md:w-[350px] " />

            </div>
            <div className="-mt-[110px]"> <h1 className="text-[100px] font-bold text-lightBlue">REIN</h1></div>
          </div>

          {/* <div className="  relative flex flex-col mt-6 justify-between bg-green-300 h-[300] w-full rounded-br-[30px] rounded-tl-[30px] items-center  py-6 " data-aos="zoom-in-up">

          <img src="/services.jpg" alt="vita"  className="w-full  rounded-br-[30px] rounded-tl-[30px] h-auto " />

        





          </div> */}


        </div>


      </div>


      <section className=" container  mx-auto ">
        <div className=" grid  gap-3 grid-cols-1    md:grid-cols-2 ">
          <div className="   rounded-md " data-aos="zoom-in-up">
            <div className="left px-2 pb-2  ">

              <h3 className="text-lightBlue text-3xl  font-bold">Who we are</h3>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[100px] " data-aos="slide-right"></div>
              <p className="text-[18px]  text-greyBlack   text-truncate font-md py-6 ">
                50 REIN is an ideation with it’s core values and mandate encompass in amplifying the
                real estate industry in Nigeria and projecting Nigeria real estate Icons to the world hence celebrating their unique heritage in professionalism,
                integrity, consistency, morals and delivery of values.  </p>

              <Link to="/About" className="  text-xl 
px-2 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>




          <div className=" mt-4 md:mt-10    " data-aos="zoom-in-up">
            <img src="/homeabout.png" alt="vita" className="  rounded-br-[30px] rounded-tl-[30px] h-auto " />




          </div>








          <div className=" bg-white mt-2 md:mt-20 " data-aos="slide-up">
            <div className="left px-4  md:py-12 ">

              <h4 className="text-lightBlue text-3xl  font-bold">What we do</h4>
              <div className="border-2 mt-2 border-orangeRed rounded-md w-[100px] "></div>
              <p className="text-[18px] max-w-4xl text-greyBlack   font-md py-6 ">
                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                we strive to inspire future industry leaders by creating a definitive collection that showcases
                the exemplary achievements of
                Real Estate Icons in Nigeria and in turn elevate the nation's real estate reputation globally.  </p>

              <Link to="/services" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                <button className=" text-base font-light">Read more</button> </Link>

            </div>


          </div>


          <div className="  -mt-10 md:mt-20  " data-aos="zoom-in-up">
            <img src="/homeserv.png" alt="vita" className="w-full  rounded-br-[30px] rounded-tl-[30px] " />




          </div>

         



        </div>




        <section className=" mt-5 mt-20  rounded-br-[30px] rounded-tl-[30px]  ">
          <h3 className="text-darkBlue pt-8 text-center font-bold text-3xl">How we Started</h3>
          <div className="border-2 mt-1  border-orangeRed   mx-auto rounded-md w-[100px] "></div>
          <div className=" flex-col  flex md:flex-row  ">


            <div className=" rounded-md" data-aos="zoom-up">
              <div className=" px-4   ">



                <p className="text-[18px] text-greyBlack  font-md py-6 ">
                  <span className=" text-3xl text-orangeRed">I</span>n the dynamic world of real estate, our journey began with a stumble, but it transformed
                  into an unwavering quest for authenticity and dependability. Picture a group of young
                  individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                  to carve their path, they invested their time, resources, and aspirations into projects that held
                  the promise of success. But the real estate landscape had its lessons to teach, and those
                  lessons came at a cost.

                </p>

                <Link to="/ourhistory" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  " >
                  <button className=" text-base font-light">Read more</button> </Link>

              </div>


            </div>


            <div className="pt-6  " data-aos="flide-down">
              <img src="/howstarted.png" alt="vita" className="w-full border-3  border-bl-blue ml-3 md:mt-2 rounded-tl-[30px] rounded-br-[30px]  " />





            </div>
          </div>
        </section>


        {/* REAL TORS SECTION */}




        <h3 className="text-darkBlue mt-20 text-center font-bold text-3xl">Real estate icons  That
          Have made differences <br />in the estate sector </h3>

        <div className="border-2 mt-2  border-orangeRed   mx-auto rounded-md w-[100px]  " data-aos="slide-up"></div>
        <section className=" mt-10 pb-6 bg-green-50 rounded-br-[30px] rounded-tl-[30px]  ">

          <div className=" flex-col  flex md:flex-row  ">


            <div className="pt-6 " data-aos="fade-in">
              <img src="/homevector.jpg" alt="vita" className="w-full  border-3 md:w-[600px] border-bl-blue  md:mt-6 rounded-tl-[30px] rounded-br-[30px] h-auto " />


            </div>

 <div className=" mt-5" data-aos="zoom-up">
              <div className=" px-10   ">



                <p className="text-[18px] text-greyBlack  max-w-lg font-md pt-8 pb-6 ">
         Our goal is to commemorate the remarkable journey of iconic real estate founders in an inspiring anthology. We aim to ensure that iconic
         founders and CEOs in real estate are brought to light.

                </p>

                <Link to="/realtors" className="  text-xl 
px-3 py-2 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  " >
                  <button className=" text-base font-light">Read more</button> </Link>

              </div>


            </div>


          </div>
        </section>









      </section>

      <h3 className="text-4xl  text-center mt-20 pfont-bold px-6 text-darkBlue ">Testimonials</h3>

      <div className="mt-2">
        <Carouselitem />
      </div>

      <div className=" mt-10 md:mx-36 ">



        <Faq data-aos="flip-up" />
      </div>

    </>



  )
}
export default Home;
