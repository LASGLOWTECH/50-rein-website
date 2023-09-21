// import { useState } from "react";
import { Link } from "react-router-dom";
// import Slides from './Herolist';
import { GoGoal } from "react-icons/go"
import { BiBullseye } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useState } from "react";



import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    
  useEffect(() => {
    AOS.init({ duration: 1000 });

}, []);

    const [readmore, setReadmore] = useState(false)

    const handleClick = () => {
        setReadmore(!readmore)
    }



    return (<>

        {/* Hheader test */}
        <div className="flex pt-20 pb-4 flex-row items-center justify-center ">

            <div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
            <h3 className="text-2xl font-bold text-darkBlue ">ABOUT<span className="text-orangeRed" > US</span></h3>
            <div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

        </div>

        {/* About Hero */}


        <div className="  h-auto w-100 " >
            <div className=" container mx-auto px-6" >
                <div className="   flex flex-col md:flex-row justify-between items-center   ">

                    <div className="left py-8 px-2">
                        <p className="text-2xl  text-orangeRed font-md py-2">
                            Our Story  </p>
                        <h2 className="text-darkBlue font-bold  text-3xl  md:text-4xl"> A Journey of Resilience and Vision
                        </h2>

                        <p className="text-[18px]  border-orangeRed rounded-md border-l-2 ps-2   text-greyBlack max-w-xl  font-md py-6 mt-5 " data-aos="slide-right ">At 50 REIN, we are dedicated to the art of storytelling. We delve deep into the lives and
                            accomplishments of Nigerian Real Estate Icons, crafting narratives that breathe life into their
                            journeys. Through vivid profiles and insightful anecdotes, we bring their stories to the
                            forefront, chronicling their rise to becoming industry icons in a compendium. With each
                            profile, we aim to inspire, educate, and honor the individuals who’ve carved their names into
                            the annals of Nigerian real estate history.</p>

                        <Link to="/faq" className="  text-xl 
px-3 py-3 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                            <button className=" text-xl">know more</button> </Link>

                    </div>

                    {/* rounded square */}
                    <div className=" borderst  ">
                        <img src="/aboutus.jpg" alt="vita" className="  w-full md:w-[600px] h-auto  md:py-20 " data-aos="slide-up" />





                    </div>
                </div>






            </div>


        </div>



        <section className="mx-auto px-6">





        </section>


        


        <section className="">
            <div className="  container py-6 mx-auto grid  gap-3 grid-cols-1    md:grid-cols-2 ">
                <div className="   rounded-md " data-aos="fade-out">
                    <div className="left px-6 pt-6 md:pt-10 hover:scale-110 transition  duration-500  ">
                        <span className="flex flex-row items-center justify-left"><GoGoal className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Goals</h4></span>

                        <div className="border-2 mt-1 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-[18px] text-greyBlack  font-md  ">
                            To become a premier platform in Nigeria documenting the narratives of Real Estate Icons
                            while inspiring greatness  </p>



                    </div>



                </div>




                <div className=" borderst ">
                    <img src="/ourgoalsr.jpg" alt="vita" className="md:w-[400px] md:py-5 " data-aos="slide-up" />





                </div>




                <div className="  rounded-md mt-6  hover:scale-110 transition  duration-500  ">
                    <div className="left px-6 py-8 ">
                        <span className="flex flex-row items-center justify-left"><BsEye className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Vision</h4></span>

                        <div className="border-2 mt-1 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-[18px] text-greyBlack text-truncate font-md py-6 ">
                            We envision a future where the stories of these Nigerian Real Estate Icons inspire
                            generations, where their achievements become building blocks for a resilient and thriving
                            real estate industry.  </p>



                    </div>


                </div>

                <div className=" bg-white mt-9  ">
                    <img src="/ourvision.jpg" alt="vita" className=" md:w-[400px]  md:py-2 " />





                </div>



                <div className=" bg-white   ">
                    <div className="left px-6 pt-8 hover:scale-110 transition  duration-500  ">
                        <span className="flex flex-row items-center justify-left"><BiBullseye className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Mission</h4></span>

                        <div className="border-2 mt-2 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-[18px]  text-greyBlack font-md py-6 ">
                            To curate, celebrate, and document the stories of these icons, highlighting their exceptional
                            contributions, innovations, and impacts on the Nigerian Real Estate Landscape, thereby
                            fostering industry growth and recognition.
                              </p>


                    </div>


                </div>


                <div className="  borderst   ">
                    <img src="/ourmission.jpg" alt="vita" className="md:w-[400px] -full h-auto  md:py-20 " />





                </div>





            </div>


        </section>
    </>)
}


export default About;