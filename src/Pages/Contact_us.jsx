import Hero from "../Components/Hero";

export default function Contact_Us() {
  return (
    <div>
      <section className="w-full grid grid-cols md:grid-cols-2 lg:grid-cols-2 mx-auto bg-blue-800">
        <Hero
          mainText="Let’s Build the Future of Travel Together"
          subText="Got questions? Want to learn more about Mizrmo? We’re here to help. "
          mainTextStyle="py-5 text-5xl text-white text-center  md:w-4/5 md:text-left lg:text-left"
          subTextStyle="text-white text-xl text-center  md:w-4/5 md:text-left lg:text-left"
        />
        <img src="" alt="" />
      </section>
    </div>
  );
}
