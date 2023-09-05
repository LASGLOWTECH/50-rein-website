 
import { Link } from 'react-router-dom'; 
 const Failurepage = () => {
  return (
    <div className=" container my-10 mx-auto px-6">

      <h1 className="text-8xl text-orangeRed font-bold ">404</h1>
      <h5 className="text-2xl text-darkBlue pt-3">Page not found!</h5>
      <p className="text-base tracking-wider pt-3 ">
        Sorry the page your are trying to access does not exist, please enter a valid Url parameter
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Failurepage;