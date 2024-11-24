import About_US from "../Components/About_us";
import Be_part from "../Components/Be_part";
import Hero from "../Components/Hero";
import Why_Us from "../Components/Why_Us";

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
    </main>
  );
}
