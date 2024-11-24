export default function Hero() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="align-center">
        <h1 className="py-5 text-5xl text-white text-center">
          Share the Ride, Share the Cost, Share the Fun
        </h1>
        <p className="text-white text-center text-xl md:w-4/5">
          Join Mizrmo today and transform your daily commutes and travels.  
          Connect with trusted drivers and riders, save on costs, and contribute
          to building a sustainable community. 
        </p>
      </div>
      <div className="my-5 bg-white w-fit rounded-full flex justify-center">
        <form className="m-1">
          <input
            placeholder="Enter Your Email"
            className="m-3 outline-0"
            type="text"
          />
          <button className="btn bg-yellow-300 rounded-full">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}
