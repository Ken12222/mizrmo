export default function Hero() {
  return (
    <div className="w-4/5 mx-auto flex flex-col my-12">
      <div className="align-center">
        <h1 className="py-5 text-5xl text-white text-center">
          Share the Ride, Share the Cost, Share the Fun
        </h1>
        <p className="text-white sm:text-base md:w-4/5 text-center mx-auto">
          Join Mizrmo today and transform your daily commutes and travels.  
          Connect with trusted drivers and riders, save on costs, and contribute
          to building a sustainable community. 
        </p>
      </div>
      <div className="my-5 bg-white rounded-full md:w-2/4 lg:w-2/4 mx-auto">
        <form className="m-1 flex">
          <input
            placeholder="Enter Your Email"
            className="m-3 outline-0 w-full"
            type="text"
          />
          <button className="btn border-0 bg-yellow-300 hover:bg-blue-800 ease-in-out duration-700 hover:text-yellow-400 rounded-full">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
