




import { BsTwitter, BsLinkedin } from "react-icons/Bs";
import { FaInstagram, } from "react-icons/fa"
import Team1 from "./Teamlist";


const Team = () => {
    return (<>
        <div className="Team py-4">
            <div className="flex pt-10 flex-row items-center justify-center ">

                <div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
                <h3 className="text-2xl font-bold text-darkBlue ">OUR<span className="text-orangeRed" > TEAM</span></h3>
                <div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

            </div>
            <p className=" container pb-8 pt-3 px-3 text-greyBlack px-1 mx-auto   text-base text-center">Meet the orchestrators behind 50 REIN. A symphony of passion, dedication, and expertise.
                We are more than individuals; we are a collective of dreamers, united by a shared mission to
                honor excellence. Each member contributes a distinct note to our melody, crafting a
                harmonious symphony of celebration.</p>


        </div>



        <section className="bg-gradient-to-r from-lightBlue to-darkBlue">
            <div className="  container py-4 mx-auto grid  gap-6 grid-cols-1    md:grid-cols-3 ">

                {/* first grid item */}

                {Team1.map((team, index)=>{
    return(
        <div className=" bg-darkBlue shadow-lg px-4 hover:scale-110  hover:bg-white transition  duration-500 " key={index}>
        <div className=" py-6  ">
            <img src={team.photo} alt="vita" className="w-[200px] h-[200px] mx-auto p-2 rounded-[100%] border-2 bg-white shadow-md   " />

            <div className="flex flex-col justify-center items-center py-2 ">
                <div className="flex flex-col  items-center">
                    <p className="text-l font-bold text-orangeRed  pt-3 ">
                       {team.Name}  </p>
                    <p className="text-base  text-greyBlack text-truncate  pt-2 pb-3 font-thin ">
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