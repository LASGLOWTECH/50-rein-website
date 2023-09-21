
import { useEffect } from "react";
import AOS from 'aos';

import { useState } from "react";
const Ourstory  = () => {


    const [readmore, setReadmore] = useState(false)

    const handleClick = () => {
        setReadmore(!readmore)
    }



    useEffect(() => {
        AOS.init({ duration: 1000 });
    
    }, []);
    
    return (


        <>
        
        <div className="px-6 container mx-auto">
        <section className=" bg-white   flex  flex-col " >
            
        <div className=" ">
        <h2 className="text-darkBlue px-6 pt-20 font-bold text-4xl">Our History </h2>


                <div className="border-2 ms-6 border-orangeRed rounded-md w-[50px] "></div>
                <img src="/ourhistory.png" alt="vita" className="w-full -mt-2xl  md:-mt-[200px] rounded-tl-[30px] rounded-br-[30px]     " data-aos="slide-up" />





            </div>
            
            <div className="left px-4 pb-20  ">
            
               

                <p className="text-[18px] text-greyBlack mt-[5px]  -mt-[150px]">
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
                            about properties; it's about the people who make them come alive.
                        </span>

                    )}
                </p>

                {!readmore ? (<span className="text-lightBlue font-bold  pb-8  text-base" onClick={handleClick}>Readmore....</span>) :
                    (<span className="text-lightBlue  font-bold pb-2 text-base" onClick={handleClick}>read less</span>)
                }


            </div>

         

        </section> 
        
        </div>
        
        </>
      );
}
 
export default  Ourstory;