import About_US from "../Components/About_us";
import Be_part from "../Components/Be_part";
import Hero from "../Components/Hero";
import Travel_smart from "../Components/Travel_smart";
import Why_Us from "../Components/Why_Us";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <main>
      <section className="bg-blue-800 w-full flex justify-center">
        <Hero />
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
          Learn more about our corporate partnership
        </a>
      </div>
      <footer className="bg-blue-800">
        <Footer />
      </footer>
    </main>
  );
}
