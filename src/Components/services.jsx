import Service from "./Servicelist";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (

        <>


            <div className="flex pt-5 Hero flex-col items-center h-[300px] justify-center ">


                <h3 className="text-4xl font-bold text-gray-600 ">Our Services</h3>
                <div className="border-2 mt-2  border-orangeRed   mx-auto rounded-md w-[100px] "></div>

            </div>







            <section className=" bg-gray-50 ">
                <div className="  container mx-auto grid  gap-t-3  grid-cols-1   items-center justify-center md:grid-cols-2 ">
                    <div className="    rounded-bl-[50px] " data-aos="fade-out">
                        <div className="left px-6 pt-6 md:pt-5 hover:scale-100 transition  duration-500  ">
                            <h4 className="text-darkBlue  py-3 text-3xl md:text-left text-center font-bold">What We Do</h4>


                            <p className="text-[18px]  text-center md:text-left pb-6 text-greyBlack leading-loose  font-md  ">
                                In a world where excellence is the standard, we rise above and beyond. Our mission is to transform your aspirations into reality, delivering unparalleled solutions that exceed expectations. With unwavering dedication and a commitment to innovation, we're here to guide you on your journey towards success.
                                Explore our services and experience a new dimension of excellence today.  </p>



                        </div>



                    </div>


                    <div className="  ">
                        <img src="/Heros7.jpg" alt="vita" className="w-full mt-4 md:mt-0 ] " data-aos="slide-up" />





                    </div>


                </div>


            </section>







            <section className="mt-10">
                <div className="  container py-6 md:pt-0 md:pb-6 mx-auto  ">


                    <div className="  grid py-3 gap-5 grid-cols-1    md:grid-cols-2">
                        {Service.map((items, index) => {
                            return (
                                <div className="left py-6 px-2  hover:scale-105 transition md:hover:bg-white   duration-500  shadow-sm hover:bg-gray-50" key={index}  data-aos-duration="1500" data-aos="slide-up">
                                    <span className="flex flex-col justify-center items-center md:items-start p-3   md:bg-orangeRed-50 md:justify-start "><img src={items.pics} alt="icon" className=" w-[120px]  p-2  shadow-lg rounded-[100%] " />
                                        <h4 className="text-darkBlue md:text-left text-center  text-xl capitalize pt-8 px-3 font-bold">{items.Title}</h4></span>
                                  
                                    <div className="border-2 mt-2 mb-6 mx-auto md:ml-6  border-orangeRed  rounded-md w-[100px]" data-aos="slide-down"> </div>

                                    <p className=" text-greyBlack text-[16px] text-center text-truncate font-md pt-3 px-6  leading-loose  md:text-left">{items.Info}
                                    </p>



                                </div>

                            )
                        })}


                    </div>



                </div>


            </section>





        </>
    )
}


export default Services;