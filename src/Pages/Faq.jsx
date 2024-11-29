import { useState } from "react";
import Hero from "../Components/Hero";

export default function FAQ() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  return (
    <div>
      <div
        className="w-full h-full md:h-screen lg:h-screen flex align-middle bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url("../../images/faq_img.png")` }}
      >
        <div className="w-full my-auto">
          <Hero
            mainText="Frequently Asked Questions (FAQS)"
            subText="Find answers to the most common questions about our services, policies, and processes. Whether you're new to our platform or looking for specific details, we've got you covered."
          />
        </div>
      </div>
      <main className="w-4/5 md:w-2/4 mx-auto py-8 grid grid-cols gap-4">
        <p className="text-center text-xl">
          Browse through the categories or search for your query to quickly find
          the information you need. If you don’t see an answer to your question,
          feel free to reach out to us—we’re always here to help!
        </p>
        <button
          onClick={() => {
            setIsAccordionOpen(!isAccordionOpen);
          }}
          className="border-b-2"
        >
          What is Mizrmo ? <span>{">"}</span>
        </button>
        {!isAccordionOpen ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
            harum, libero ut tempore excepturi quisquam, modi, architecto illo
            ad doloribus earum deserunt? Est temporibus provident porro ratione,
            ut minima.
          </p>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
