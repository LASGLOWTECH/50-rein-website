const Realtors = () => {
    return (
        <div className="RealHero">



            <div className=" py-20 h-auto bg-gradient-to-r from-darkBlue to-darkBlue w-100 Hero-aout" >
                <div className=" container mx-auto px-2" >

                    <div className="flex flex-row  py-6 items-center justify-center ">

                        <div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
                        <h3 className="text-2xl font-medium text-white ">Realtors</h3>
                        <div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

                    </div>

                    <div className="   flex flex-col  justify-center items-center   ">

                        <div className="left   ">


                            <h1 className="text-white text-3xl font-bolder  text-center  md:text-4xl">Modern Times Realtors in the Esate Industry</h1>

                            <p className="text-base  text-white   text-center font-md py-6 ">At 50 REIN, we are dedicated to the art of storytelling. We delve deep into the lives and
                                accomplishments of Nigerian Real Estate Icons, crafting narratives that breathe life into their
                                journeys. </p>

                        </div>

                        {/* rounded square */}

                    </div>






                </div>


            </div>


            {/*  grid items  */}

            <div className="grid  gap-5 grid-cols-1 justify-between py-20 mx-auto md:px-20 md:grid-cols-2">

                <div className=" bg-cyanGreen rounded-2xl  shadow-lg  ">

                    <div className="grid  gap-2 md:grid-cols-2 md:grid-cols-2 flex  flex-col md:flex-row justify-between my-2  ">

                        <div className="p-3 bg-white  ">

                            <img src="/Team1.png" alt="vita" className="border-2  rounded-lg border-orangeRed  " />

                        </div>
                        <div className="flex flex-col pt-2 md:pt-2 bg-darkBlue px-6 md:pe-20  justify-start">

                            <h3 className="text-xl pt-5 text-orangeRed font-bold">Engr Mark</h3>
                            <p className="text-base  text-white font-lighter py-2 ">
                                Founder 50 Rein.  </p>

                            <p className="text-base  py-2 text-white font-md ">
                                Being passionate about creating a terrific impact in the Nigeria real estate industry,
                                we strive to inspire future industry leaders by creating a definitive collection that showcases
                                .  </p>


                        </div>
                    </div>


                    <div className="left px-6  ">

                        <h4 className="text-darkBlue text-2xl  pt-3  md:py-2 font-bold">About</h4>

                        <p className="text-base  text-greyBlack font-md pt-3 ">
                            Being passionate about creating a terrific impact in the Nigeria real estate industry,
                            we strive to inspire future industry leaders by creating a definitive collection that showcases
                            .  </p>



                    </div>


                </div>



                {/* Second grid items  */}
                <div className=" bg-white rounded-2xl  shadow-lg  ">


                    {/* <div className="">

                        <div className=" flex items-center justify-center bg-darkBlue py-6  h-[100px] shadow-lg  ">
                           

                        </div>


                    </div>
 */}


                    <div className="  bg-opacity-20 shadow-lg  flex items-center justify-center h-[70vh] rounded-ts-med Hero-about bg-opacity-20 mt-3 ">
                        {/* <img src="/mirrrorb.jpg" alt="vita" className="w-full h-auto  " /> */}
                        <h2 className="text-white text-3xl  p-2 border-2 border-orangeRed">50 REIGN</h2>
                        
                    </div>






                </div>


            </div>


        </div>
    )
}


export default Realtors;