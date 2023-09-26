import { Link } from "react-router-dom";


const Realtors = () => {
    return (
        <div className="Realero">


<section  className="Hero-about">
<div className="flex py-20 items-center justify-center flex-col space-y-3">

               <h1 className=" mt-20 max-w-2xl text-white tracking-wider  font-bold text-center text-4xl   md:text-5xl md:leading-normal">GREAT SPIRIT, WE ARE COMING <span className="text-orangeRed">SOON</span></h1>

               <Link to="/contact">
<div className="  bg-opacity-20 shadow-lg  flex items-center justify-center    bg-opacity-20 py-10 ">
    {/* <img src="/mirrrorb.jpg" alt="vita" className="w-full h-auto  " /> */}
   <h3 className="text-white text-2xl rounded-xl p-2 border-2 font-medium hover:bg-lightBlue border-lightBlue">CONTACT US</h3>
    
</div>
</Link>








</div>


</section>


          

          

        </div>
    )
}


export default Realtors;