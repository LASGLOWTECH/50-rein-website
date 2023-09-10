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
        <div className="flex pt-8 pb-4 flex-row items-center justify-center ">

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

                        <p className="text-base  border-orangeRed rounded-md border-l-2 ps-2   text-greyBlack max-w-xl  font-md py-6 ">At 50 REIN, we are dedicated to the art of storytelling. We delve deep into the lives and
                            accomplishments of Nigerian Real Estate Icons, crafting narratives that breathe life into their
                            journeys. Through vivid profiles and insightful anecdotes, we bring their stories to the
                            forefront, chronicling their rise to becoming industry icons in a compendium. With each
                            profile, we aim to inspire, educate, and honor the individuals who’ve carved their names into
                            the annals of Nigerian real estate history</p>

                        <Link to="/faq" className="  text-xl 
px-3 py-3 rounded-md  bg-orangeRed text-white hover:bg-lightBlue  ">
                            <button className=" text-xl">know more</button> </Link>

                    </div>

                    {/* rounded square */}
                    <div className=" bg-white   ">
                        <img src="/aboutus.jpg" alt="vita" className="  w-full md:w-[600px] h-auto  md:py-20 " data-aos="slide-up" />





                    </div>
                </div>






            </div>


        </div>



        <section className="mx-auto px-6">





        </section>


        <section className=" bg-white container mx-auto grid  gap-3 grid-cols-1  py-6  md:grid-cols-2 " >
            <div className="left px-4 py-12 shadow-lg  ">
                <p className="text-2xl  text-orangeRed font-md ">
                    History </p>
                <h2 className="text-darkBlue font-bold text-4xl">How We Started</h2>

                <p className="text-base text-greyBlack font-md pt-6 pb-2  ">
                    In the dynamic world of real estate, our journey began with a stumble, but it transformed
                    into an unwavering quest for authenticity and dependability. Picture a group of young
                    individuals, brimming with enthusiasm and dreams of conquering the real estate realm. Eager
                    to carve their path, they invested their time, resources, and aspirations into projects that held
                    the promise of success. But the real estate landscape had its lessons to teach, and those
                    lessons came at a cost. <br /><br />

                    Amid the excitement of building dreams, setbacks arrived, knocking on the doors of
                    optimism. The investments, once filled with aspirations, faltered, and the journey that was
                    meant to be a success story was tinged with the harsh taste of loss. But amidst the
                    disappointment and trials, emerged a resolve that would define our purpose. <br /><br />

                    {readmore && (

                        <span className="">

                            In the midst of challenges, a spark of brilliance ignited within. Instead of being disheartened
                            by adversity, we were inspired to turn our experiences into a force for good. We recognized
                            the need for reliability and authenticity in the real estate industry. We saw the significance
                            of dependable guidance, and we aimed to be the bridge between aspiring investors and the
                            leaders who epitomized success.<br /><br />
                            Thus, 50 REIN was born – not as just a platform, but as a beacon of trust, resilience, and
                            transformation. Our story is one of evolution, from young hopefuls facing setbacks to
                            determined minds set on curating a space where genuine success stories in real estate could
                            shine. We set out on a mission to celebrate CEOs who not only excel in their ventures but
                            also lead with integrity and transparency. <br /><br />
                            Through meticulous research, relentless pursuit of authenticity, and a commitment to sharing
                            stories that matter, we have curated a collection of real estate icons who've weathered
                            storms and built empires. We present CEOs who aren't just names on buildings but
                            individuals who've shaped communities, inspired change, and uplifted the industry.
                            As we recount our journey, we invite you to join us on a voyage that transcends failures and
                            triumphs. Our story is a testament to the resilience of the human spirit and the power of
                            transformation. It's a narrative that reaffirms our belief that the real estate industry isn't just
                            about properties; it's about the people who make them come alive
                        </span>

                    )}
                </p>

                {!readmore ? (<span className="text-lightBlue font-bold pb-2 text-base" onClick={handleClick}>Readmore....</span>) :
                    (<span className="text-lightBlue  font-bold pb-2 text-base" onClick={handleClick}>read less</span>)
                }


            </div>

            <div className=" bg-white   ">
                <img src="/ourhistory.jpg" alt="vita" className="w-full h-auto  md:py-20 " data-aos="slide-left" />





            </div>

        </section>


        <section className="">
            <div className="  container py-6 mx-auto grid  gap-3 grid-cols-1    md:grid-cols-2 ">
                <div className="   rounded-md " data-aos="slide-up">
                    <div className="left px-6 pt-6 md:pt-20 hover:scale-110 transition  duration-500  ">
                        <span className="flex flex-row items-center justify-left"><GoGoal className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Goals</h4></span>

                        <div className="border-2 mt-1 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-l text-greyBlack  font-md  ">
                            To become a premier platform in Nigeria documenting the narratives of Real Estate Icons
                            while inspiring greatness  </p>



                    </div>



                </div>




                <div className=" bg-white   ">
                    <img src="/ourgoalsr.jpg" alt="vita" className="md:w-[400px] md:py-5 " data-aos="slide-left" />





                </div>




                <div className="  shadow-lg rounded-md  hover:scale-110 transition  duration-500  ">
                    <div className="left px-6 py-8 ">
                        <span className="flex flex-row items-center justify-left"><BsEye className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Vision</h4></span>

                        <div className="border-2 mt-1 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-l text-greyBlack text-truncate font-md py-6 ">
                            We envision a future where the stories of these Nigerian Real Estate Icons inspire
                            generations, where their achievements become building blocks for a resilient and thriving
                            real estate industry. Guided by their stories, we strive for a Nigeria where innovation is celebrated, progress is
                            unwavering, and the path to excellence is illuminated for all.  </p>



                    </div>


                </div>

                <div className=" bg-white   ">
                    <img src="/ourvision.jpg" alt="vita" className=" md:w-[400px]  md:py-2 " />





                </div>



                <div className=" bg-white shadow-lg  ">
                    <div className="left px-6 pt-8 hover:scale-110 transition  duration-500  ">
                        <span className="flex flex-row items-center justify-left"><BiBullseye className="text-4xl font-bold text-darkBlue " />
                            <h4 className="text-darkBlue text-2xl ps-3 font-bold">Our Mission</h4></span>

                        <div className="border-2 mt-2 ms-14 border-orangeRed rounded-md w-[100px] "></div>
                        <p className="text-base  text-greyBlack font-md py-6 ">
                            To curate, celebrate, and document the stories of these icons, highlighting their exceptional
                            contributions, innovations, and impacts on the Nigerian Real Estate Landscape, thereby
                            fostering industry growth and recognition.
                            We are committed to building a community where the lessons of these icons shape the minds
                            of emerging leaders, fueling an environment of growth and transformation.  </p>


                    </div>


                </div>


                <div className=" bg-white   ">
                    <img src="/ourmission.jpg" alt="vita" className="md:w-[400px] -full h-auto  md:py-20 " />





                </div>





            </div>


        </section>
    </>)
}


export default About;