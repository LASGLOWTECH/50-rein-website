import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

import FAQ from "./Faqlist";
const Faq = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    
    }, []);

   
    const [itemsOpen, setItemsOpen] = useState(false)

    const handleClick = (index) => {
  
 
if (itemsOpen === index){
    return setItemsOpen(null)
    
    
}
setItemsOpen(index)
    }
    
   
    return (

        <>
            <div className="Faq">



            <div className="flex pt-8  flex-row items-center justify-center ">

<div className="border-2 mr-2 border-orangeRed rounded-md w-[50px] "></div>
<h3 className="text-2xl font-bold text-darkBlue   ">FAQ<span className="text-orangeRed" > </span></h3>
<div className="border-2 ms-2 border-orangeRed rounded-md w-[50px] "></div>

</div>
<h2 className=" pt-2 text-greyBlack text-3xl px-4 font-bold mx-auto text-center">Frequenly Asked Questions</h2>



                <div className="  container py-6 mx-auto grid  gap-2 grid-cols-1  md:grid-cols-1 ">

{FAQ.map((faqlist, index) => {
    return (
        <div className=" bg-white flex flex-col " key={index} data-aos="flip-right">

        <span className=" header flex flex-row justify-between px-6 py-3 border-l-3 bg-darkBlue text-white cursor items-center" onClick={() => handleClick(index)} >
            <p className="text-white  hover:text-orangeRed text-base">{faqlist.question}</p> 

            {itemsOpen ==index ? (<BiMinus className="text-white  bg-lightBlue rounded-[100%] " />) :
                (<BiPlus className="text-white bg-lightBlue rounded-[100%]" />)
            }</span>

            {itemsOpen === index ? (
        <div className=" bg-white px-3 py-3 ">
            <p className="text-darkBlue"> {faqlist.Answer} </p>
        </div>): null}

    </div>


    )
}
)}

            

                </div> 
            </div>




        </>
    );
}

export default Faq;