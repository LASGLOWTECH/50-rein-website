 
import { Link } from 'react-router-dom'; 
 const Failurepage = () => {
  return (
    <div className=" container my-10 mx-auto px-6">
<img src='/error.gif' alt='404image' className='w-[500px]'></img> 
    
      <h1 className="text-6xl text-darkBlue font-bold pt-1">OOOPS!</h1>
      <p className="text-[18px]  pt-2 ">
        Sorry the page your are trying to access does not exist, please enter a valid Url parameter
      </p>
      <button className='bg-orangeRed px-3 py-2 mt-6 rounded-2xl text-white'>


      <Link to="/">Back to home</Link>
      </button>
     
    </div>
  );
}

export default Failurepage;