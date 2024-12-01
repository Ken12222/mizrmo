import Hero from "../Components/Hero";
import call from "../../images/call_us.png";
import { useState } from "react";
import Contact_form from "../Components/Contact_form";
import Map from "../Components/Map";
import Contact_portals from "../Components/Contact_portals";
import Footer from "../Components/Footer";

export default function Contact_us() {
  return (
    <div>
      <section className="w-full h-screen flex align-middle bg-blue-800">
        <div className="w-4/5 mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="my-auto">
            <div className="mx-auto">
              <Hero
                mainText="Let’s Build the Future of Travel Together"
                subText="Got questions? Want to learn more about Mizrmo? We’re here to help. "
                mainTextStyle="py-5 text-5xl text-white text-center md:text-left lg:text-left"
                subTextStyle="text-white text-xl  md:w-4/5 text-center md:text-left lg:text-left"
              />
            </div>
            {/* easy access contact */}
            <Contact_portals />
          </div>
          <img
            className="min-h-80 w-full my-auto object-cover rounded-lg"
            src={call}
            alt=""
          />
        </div>
      </section>
      <div className="w-4/5 mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-8 py-8">
        <div className="grid grid-cols">
          <p className="py-8 text-2xl md:text-3xl lg:md:text-3xl text-center text-blue-800">
            Send Us a Message
          </p>
          <Contact_form />
        </div>
        <div className="grid grid-cols">
          <p className="py-8 text-2xl md:text-3xl lg:md:text-3xl text-center text-blue-800">
            Our Location
          </p>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
}
