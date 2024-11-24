import About_US from "../Components/About_us";
import Hero from "../Components/Hero";

export default function Home() {
  return (
    <main>
      <section className="bg-blue-800 w-full flex justify-center">
        <Hero />
      </section>
      <section>
        <About_US />
      </section>
    </main>
  );
}
