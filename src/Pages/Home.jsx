import About_US from "../Components/About_us";
import Be_part from "../Components/Be_part";
import Hero from "../Components/Hero";
import Travel_smart from "../Components/Travel_smart";
import Why_Us from "../Components/Why_Us";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main>
      <section className="bg-blue-800 w-full md:h-screen lg:h-screen flex justify-center">
        <div className="w-4/5 mx-auto my-auto flex flex-col">
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
      <div className="w-full flex justify-center pb-8">
        <a className="sm:text-sm md:text-xl lg:text-xl bg-yellow-400 py-2 px-8 md:col-span-2 lg:md:col-span-2 md:w-2/4 text-center rounded-full w-4/5 mx-auto">
          <strong>Learn more about our corporate partnership</strong>
        </a>
      </div>
      <Footer />
    </main>
  );
}
