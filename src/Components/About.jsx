// import { useState } from "react";
import { Link } from "react-router-dom";
// import Slides from './Herolist';
import { GoGoal } from "react-icons/go"
import { BiBullseye } from "react-icons/bi";
import { BsEye } from "react-icons/bs";




import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []);





    return (<>

        {/* Hheader test */}
        <div className="flex py-20 Hero2 flex-col items-center h-[300px] justify-center ">


            <h3 className="text-4xl font-bold text-gray-600 ">About Us</h3>
            <div className="border-2 mt-2  border-orangeRed   mx-auto rounded-md w-[100px] "></div>

        </div>

        {/* About Hero */}


        <div className="  h-auto w-100 " >
            <div className=" container mx-auto px-6" >
                <div className="   grid  md:grid-cols-2  items-center justify-center grid-cols-1    ">

                    <div className="left py-8 px-2">
                        <p className="text-2xl  text-orangeRed font-md pt-8">
                            Our Story  </p>
                        <h2 className="text-darkBlue font-bold  text-3xl pt-3 md:text-4xl"> A Journey of Resilience and Vision
                        </h2>

                        <p className="text-[18px]    leading-loose    text-greyBlack   font-md py-6 mt-5 " data-aos="slide-right ">At 50 REIN, we are dedicated to the art of storytelling. We delve deep into the lives and
                            accomplishments of Nigerian Real Estate Icons, crafting narratives that breathe life into their
                            journeys. Through vivid profiles and insightful anecdotes, we bring their stories to the
                            forefront, chronicling their rise to becoming industry icons in a compendium. With each
                            profile, we aim to inspire, educate, and honor the individuals who’ve carved their names into
                            the annals of Nigerian real estate history.</p>

                        <Link to="/ourhistory" className="  text-l mx-[35%]
 md:mx-[0] px-3 py-2  mt-2 rounded-lg bg-orangeRed text-white hover:bg-lightBlue  ">
                            <button className=" text-xl">know more</button> </Link>

                    </div>

                    {/* rounded square */}
                    <div className="  flex items-center justify-center  my-20">

                        <div className=" "  data-aos="slide-up">


                            <img src="/Iconic.jpg" alt="vita" className="  w-full  h-auto px-2 pt-3 " />

                        </div>





                    </div>
                </div>






            </div>


        </div>







        <section className=" Hero2 ">
            <div className="  container py-6 mx-auto grid  gap-t-3  grid-cols-1    md:grid-cols-2 ">
                <div className="  rounded-bl-[50px] " data-aos="fade-out">
                    <div className="left px-6 pt-6 md:pt-10 hover:scale-100 transition  duration-500  ">
                        <span className="flex flex-col items-center justify-center md:items-start md:justify-start "><GoGoal className="text-6xl my-3 font-bold text-orangeRed " />
                            <h4 className="text-darkBlue  py-3 text-3xl  font-medium">Our Goals</h4></span>


                        <p className="text-[18px]  text-center md:text-left pb-6 text-greyBlack leading-loose  font-md  ">
                            To become a premier platform in Nigeria documenting the narratives of Real Estate Icons
                            while inspiring greatness.  </p>



                    </div>



                </div>


                <div className="  ">
                    <img src="/ourgoalsr.jpg" alt="vita" className="w-full mt-4 md:mt-0 rounded-tr-[100px] " data-aos="slide-up" />





                </div>


            </div>


        </section>




        {/* our vision */}





        <section className=" Hero rounded-tl-[200px]">
            <div className="  container py-6 mx-auto grid  gap-t-3  grid-cols-1    md:grid-cols-2 ">
                <div className=" bg-white   rounded-bl-[50px] " data-aos="fade-out">
                    <div className="left px-6 pt-6 md:pt-10 hover:scale-100 transition  duration-500  ">
                        <span className="flex flex-col items-center justify-center md:items-start md:justify-start  "><BsEye className="text-6xl my-3 font-bold text-orangeRed " />
                            <h4 className="text-darkBlue  py-3 text-3xl  font-medium">Our Vision</h4></span>


                        <p className="text-[18px]  text-center md:text-left text-greyBlack leading-loose  pb-6 font-md  ">
                            We envision a future where the stories of these Nigerian Real Estate Icons inspire
                            generations, where their achievements become building blocks for a resilient and thriving
                            real estate industry.  </p>



                    </div>



                </div>


                <div className="  ">
                    <img src="/ourvision.jpg" alt="vita" className="w-full mt-4 md:mt-0 rounded-tr-[100px] " data-aos="slide-up" />





                </div>


            </div>


        </section>







        {/* our Mission */}




        <section className=" ">
            <div className="  container py-6 mx-auto grid  gap-t-3  grid-cols-1    md:grid-cols-2 ">
                <div className=" bg-white   rounded-bl-[50px] " data-aos="fade-out">
                    <div className="left px-6 pt-6 md:pt-10 hover:scale-100 transition  duration-500  ">
                        <span className="flex flex-col items-center justify-center md:items-start md:justify-start "><BiBullseye className="text-6xl my-3 font-bold text-orangeRed " />
                            <h4 className="text-darkBlue  py-3 text-3xl  font-medium">Our Mission</h4></span>


                        <p className="text-[18px]  text-center md:text-left text-greyBlack leading-loose  pb-6  font-md  ">
                            To curate, celebrate, and document the stories of these icons, highlighting their exceptional
                            contributions, innovations, and impacts on the Nigerian Real Estate Landscape, thereby
                            fostering industry growth and recognition.
                        </p>



                    </div>



                </div>


                <div className=" bg-blue-50 ">
                    <img src="/ourmission.jpg" alt="vita" className="w-full mt-4 md:mt-0 rounded-tr-[100px] " data-aos="slide-up" />





                </div>


            </div>


        </section>






    </>)
}


export default About;