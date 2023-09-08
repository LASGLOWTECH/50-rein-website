import Service from "./Servicelist";
import { BiBullseye } from "react-icons/Bi";
import { BsEye } from "react-icons/Bs";
import { Link } from "react-router-dom";


const Services = () => {
    return (


        <>
            <div className="flex pt-8 flex-row items-center justify-center ">

                <div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
                <h3 className="text-2xl font-bold text-darkBlue ">OUR<span className="text-orangeRed" > SERVICES</span></h3>
                <div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

            </div>
            <p className="text-xl text-center  text-darkBluefont-md py-2 px-4 ">
                What We do
            </p>


{/* About Hero */}


<div className="  Services-hero py h-[100vh] w-100 " style={{backgroundImage:"url(/officeteam.jpg)"}}>
<div className=" container pt-36 mx-auto px-6" >
    <div className="   pt-10 flex flex-col md:flex-row j items-center   ">

        <div className="left pt-12 px-4 ">
            
            <h2 className="text-white font-bold text-center  text-4xl"> OUR SERVICES
            </h2>

            <p className="text-base  text-center text-white  max-2xl  font-md pt-4  ">In a world where excellence is the standard, we rise above and beyond. Our mission is to transform your aspirations into reality, delivering unparalleled solutions that exceed expectations. With unwavering dedication and a commitment to innovation, we're here to guide you on your journey towards success. Explore our services and experience a new dimension of excellence today</p>
            <div className="border-2  mt-2 mx-auto border-orangeRed rounded-md w-[150px] "></div>
      

        </div>

        {/* rounded square */}

       
    </div>






</div>


</div>





            <section className="bg-cyanGreen">
                <div className="  container py-6 mx-auto  ">


                    <div className=" shadow-lg rounded-md grid  gap-3 grid-cols-1    md:grid-cols-2">
                        {Service.map((items, index) => {
                            return (
                                <div className="left p-4  hover:scale-105 transition  duration-500  bg-white"key={index} >
                                    <span className="flex flex-row justify-center  items-center  md:justify-start "><img src={items.pics} alt="icon" className=" w-[70px] h-[70px] p-2  bg-white rounded-[100%] text-white " />
                                        <h4 className="text-darkBlue text-l ps-3 font-bold">{items.Title}</h4></span>


                                    <p className=" text-greyBlack text-center text-truncate font-md pt-3 md:text-left">{items.Info}
                                    </p>



                                </div>

                            )
                        })}


                    </div>



                </div>


            </section>



            <div className="Our services">


            </div>

        </>
    )
}


export default Services;