
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





import Team1 from "./Teamlist";


const Team = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    
    }, []);
    



    return (<>
       

<div className="flex mt-20 bg-white mb-20 md:mb-3 flex-col items-center h-[300px] justify-center ">


<h3 className="text-4xl pt-6 font-bold text-gray-600  ">Our Team</h3>
<div className="border-2 my-2  border-orangeRed   mx-auto rounded-md w-[100px] "></div>
<p className=" container  py-6 px-6 text-greyBlack mx-auto  leading-loose text-[18px] text-center">Meet the orchestrators behind 50 REIN. A symphony of passion, dedication, and expertise.
                We are more than individuals; we are a collective of dreamers, united by a shared mission to
                honor excellence. Each member contributes a distinct note to our melody, crafting a
                harmonious symphony of celebration.</p>

</div>





        <section className="  bg-gradient-to-r from-gray-50  to-gray-50">
            <div className="  container pt-10 mx-auto grid  gap-3 grid-cols-1 px-6   md:grid-cols-4 ">

                {/* first grid item */}

                {Team1.map((team, index)=>{
    return(
        <div className=" shadow-md hover:scale-110  hover:bg-blue-50 transition my-6    bg-white duration-500 " data-aos="zoom-in-up" key={index}>
        <div className="  ">
            <img src={team.photo} alt="vita" className="w-[150px] h-[150px] mx-auto -mt-10 rounded-[100%]  bg-white shadow-md   " />

            <div className="flex flex-col justify-center items-center py-2 ">
                <div className="flex flex-col  items-center">
                    <p className="text-l font-bold text-darkBlue  pt-3 ">
                       {team.Name}  </p>
                    <p className="text-[16px]  text-gray-600  text-center pt-1 pb-10 font-thin ">
                        {team.Position} </p>
                </div>


          
              
            </div>




           
        </div>


    </div>


    )
})}

               


            </div>



            {/* end of grid */}






        </section>
    </>

    )
}


export default Team;