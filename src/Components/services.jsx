import Service from "./Servicelist";
import { BiBullseye } from "react-icons/Bi";
import { BsEye } from "react-icons/Bs";



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



            <section className="bg-cyanGreen">
                <div className="  container py-6 mx-auto  ">


                    <div className=" shadow-lg rounded-md grid  gap-3 grid-cols-1    md:grid-cols-2">
                        {Service.map((items, index) => {
                            return (
                                <div className="left p-4  hover:scale-105 transition  duration-500  bg-white"key={index} >
                                    <span className="flex flex-row justify-center  items-center  md:justify-start "><BsEye className="text-4xl w-[50px] h-[50px] p-2 font-bold bg-lightBlue rounded-[100%] text-white " />
                                        <h4 className="text-darkBlue text-l ps-3 font-bold">{items.Title}</h4></span>


                                    <p className=" text-greyBlack text-truncate font-md pt-3 md:text-left">{items.Info}
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