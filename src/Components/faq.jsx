import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

import FAQ from "./Faqlist";
const Faq = () => {


   
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
<p className=" pt-2 text-greyBlack px-4 mx-auto text-base text-center">Frequent questions people would likely ask, have been answered</p>



                <div className="  container py-6 mx-auto grid  gap-2 grid-cols-1  md:grid-cols-1 ">

{FAQ.map((faqlist, index) => {
    return (
        <div className=" bg-white flex flex-col " key={index}>

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