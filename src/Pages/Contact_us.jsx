import Hero from "../Components/Hero";
import call from "../../images/call_us.png";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { useState } from "react";

export default function Contact_us() {
  const [contactDetails, SetContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
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
            <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4 py-12">
              <span className="flex align-middle">
                <IoMailOutline size="30" className="text-white" />
                <p className="text-sm my-auto text-white px-1 text-center">
                  info@mizrmo.com
                </p>
              </span>
              <span className="flex align-middle">
                <IoCallOutline size="30" className="text-white" />
                <p className="text-sm text-white my-auto px-1 text-center">
                  +233 24 741 0909
                </p>
              </span>
              <span className="flex align-middle">
                <IoLocationOutline size="30" className="text-white" />
                <p className="text-sm my-auto text-white px-1 text-center">
                  Accra, Ghana
                </p>
              </span>
            </div>
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
          <form action="">
            <div className="grid grid-cols py-4">
              <label htmlFor="Name">Name</label>
              <input
                className="border-2 p-4 rounded-full outline-0"
                value={contactDetails.name}
                onChange={(e) => {
                  SetContactDetails({
                    ...contactDetails,
                    name: e.target.value,
                  });
                }}
                type="text"
                placeholder="eg: John Doe"
              />
            </div>
            <div className="grid grid-cols py-4">
              <label htmlFor="Name">Name</label>
              <input
                className="border-2 p-4 rounded-full outline-0"
                value={contactDetails.email}
                onChange={(e) => {
                  SetContactDetails({
                    ...contactDetails,
                    email: e.target.value,
                  });
                }}
                type="text"
                placeholder="eg: johndoe@email.com"
              />
            </div>
            <div className="grid grid-cols py-4">
              <label htmlFor="Message">Message</label>
              <textarea
                className="border-2 p-4 rounded-2xl outline-0"
                value={contactDetails.message}
                onChange={(e) => {
                  SetContactDetails({
                    ...contactDetails,
                    message: e.target.value,
                  });
                }}
                name=""
                id=""
                placeholder="Leave us a message"
              />
            </div>
            <button className="bg-blue-800 text-white w-full py-2 text-center rounded-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="grid grid-cols">
          <p className="py-8 text-2xl md:text-3xl lg:md:text-3xl text-center text-blue-800">
            Our Location
          </p>
          <div className="">
            <iframe
              width="100%"
              height="600"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=25%20Norley%20Link,%20North%20Dzorwulu,%20Accra+(mizrmo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps devices</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
