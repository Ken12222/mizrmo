import About_US from "../Components/About_us";
import Be_part from "../Components/Be_part";
import Hero from "../Components/Hero";
import Travel_smart from "../Components/Travel_smart";
import Why_Us from "../Components/Why_Us";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="bg-blue-800 w-full md:h-screen lg:h-screen flex justify-center items-center">
        <div className="w-5/6 mt-20 mb-5 mx-auto md:mt-0 lg:mt-0  flex  flex-col">
          <Hero
            mainText="Share the Ride, Share the Cost, Share the Fun"
            subText="Join Mizrmo today and transform your daily commutes and travels.  
          Connect with trusted drivers and riders, save on costs, and contribute
          to building a sustainable community."
            mainTextStyle="py-5 text-5xl text-white text-center"
            subTextStyle="text-white text-xl  md:w-4/5 text-center mx-auto"
            showJoinWaitlist={true}
          />
        </div>
      </section>
      <section>
        <About_US />
      </section>
      <section className="bg-gray-200 my-8">
        <Why_Us />
      </section>
      <section>
        <Be_part />
      </section>
      <section className="bg-gray-200 my-8">
        <Travel_smart />
      </section>
      <div className="pb-8">
        <Link
          className="flex justify-center md:col-span-2 lg:md:col-span-2"
          to="/contact_us"
        >
          <button className="w-5/6 btn sm:text-sm md:text-xl lg:text-xl hover:bg-blue-800 hover:text-yellow-400 text-blue-800 bg-yellow-400 py-2 md:w-2/4  text-center rounded-full">
            Contact us to learn more about our corporate partnership
          </button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
