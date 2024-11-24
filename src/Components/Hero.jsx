import Join_waitlist from "./Join_waitlist";

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
      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto">
        <Join_waitlist />
      </div>
    </div>
  );
}
