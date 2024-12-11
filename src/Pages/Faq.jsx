import { useState } from "react";
import Hero from "../Components/Hero";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Footer from "../Components/Footer";

export default function FAQ() {
  const [openAccordionID, setOpenAccordionID] = useState(null);
  const toggleAccordion = (id) => {
    setOpenAccordionID(openAccordionID === id ? null : id);
  };
  const data = [
    {
      id: "1",
      question: "What is Mizrmo?",
      ans: "Mizrmo is a community-driven ride-sharing platform that connects drivers with empty seats to riders heading in the same direction. Our aim is to provide safe, affordable, and sustainable travel options while fostering community connections. ",
    },
    {
      id: "2",
      question: "How does Mizrmo work? - For Riders ",
      ans: "Sign up, verify your ID, and search for available rides heading your way. Book a seat, prepay securely through cashless methods, and enjoy your journey. ",
    },
    {
      id: "22",
      question: "How does Mizrmo work? - For Drivers",
      ans: "Sign up, verify your ID, and list your available seats. Accept bookings from riders, complete the journey and earn money seamlessly via bank or mobile wallet transfers.",
    },
    {
      id: "3",
      question: "Is Mizrmo available in my area?",
      ans: "We are starting our services in the Greater Accra region, with plans to expand to other cities and regions in Ghana soon. Stay tuned for updates as we grow! ",
    },
    {
      id: "4",
      question: "How much does it cost to use Mizrmo? ",
      ans: "The cost depends on the estimated time and distance of the ride. However, due to the fact that it is a shared ride the estimated cost to the rider is a percentage of the cost of the ride, thus making it an affordable alternative to existing solutions. Riders can see the fare before booking, and drivers earn a portion of the ride cost after Mizrmo’s service fee is deducted.",
    },
    {
      id: "5",
      question: "How does Mizrmo ensure safety?",
      ans: "Safety is our top priority. All users shall be required to verify their identity with a government-issued ID (e.g., Ghana Card) during sign-up. Drivers and riders are also required to upload a profile picture for easy recognition. Additionally, all payments are cashless via bank or mobile wallet transfers, reducing the risk of fraud or theft and further enhancing the available KYC (Know-Your-Customer) database. ",
    },
    {
      id: "6",
      question: "How are payments processed between riders and drivers? ",
      ans: "When a rider books a ride, they make the payment upfront through the secure, cashless payment system. Mizrmo holds the funds in escrow until the ride is successfully completed. Once the ride is marked as completed by both the rider and driver, Mizrmo releases the payment to the driver’s linked bank account or mobile money wallet. This process ensures a safe and transparent transaction for both parties, protecting the rider’s payment and guaranteeing the driver receives their earnings. ",
    },
    {
      id: "7",
      question: "Can I trust the people I’m traveling with? ",
      ans: "Every Mizrmo user—driver or rider—is verified with an ID during the onboarding process.  This ensures that everyone in our community is accountable and can travel with peace of mind.",
    },
    {
      id: "8",
      question: "How do I sign up to Drive? ",
      ans: "To become a driver: Sign up on the Mizrmo platform. Verify your identity with a government-issued ID. Add your vehicle details, including your license plate and seating capacity. Once approved, you can start listing your available seats and earning money. Can companies use Mizrmo for their employees? Yes! We love to have companies onboard. Mizrmo offers companies the opportunity to encourage sustainable commuting for their employees. By partnering with us, companies can access detailed CO₂ reduction reports for their staff who indicate their companies name at signup. We anticipate that employees sharing rides will lead to reduced commuting stress, reduce parking demand, and more team bonding times during the rides.  ",
    },
    {
      id: "9",
      question: "Can companies use Mizrmo for their employees? ",
      ans: "Yes! We love to have companies onboard. Mizrmo offers companies the opportunity to encourage sustainable commuting for their employees. By partnering with us, companies can access detailed CO₂ reduction reports for their staff who indicate their companies name at signup. We anticipate that employees sharing rides will lead to reduced commuting stress, reduce parking demand, and more team bonding times during the rides. To make things even better we are giving companies the opportunity to even subsidize ride costs for their teams. ",
    },
    {
      id: "10",
      question: "What happens if there’s an issue during the ride?",
      ans: "If you experience any issues during a ride, you can report the incident directly through the app. Our customer support team is available to assist you promptly and ensure your concerns are resolved. ",
    },
    {
      id: "11",
      question: "Does Mizrmo support long-distance travel? ",
      ans: "Not yet! But we are building additional features for intercity travel. This service will connect riders and drivers traveling between cities, providing a fun, convenient and cost-effective option for long-distance trips. ",
    },
    {
      id: "12",
      question: "Can I deliver packages using Mizrmo? ",
      ans: "Not yet! But we are building additional features for peer-to-peer package delivery service for only registered members. This service will connect users who need to send a package so Drivers traveling to specific destinations can transport packages for users needing fast and affordable deliveries. ",
    },
    {
      id: "13",
      question: "What happens if I need to cancel a ride?",
      ans: "You can cancel your ride through the app. However, cancellation policies may apply depending on the timing of your cancellation. Details will be shared when booking. ",
    },
    {
      id: "14",
      question: "Is Mizrmo environmentally friendly? ",
      ans: "Absolutely. Mizrmo promotes shared travel, reducing the number of cars on the road and lowering carbon emissions. Our CO₂ reduction reports help users and companies track their environmental impact and contribute to sustainability goals. ",
    },
  ];
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
            mainTextStyle="py-5 text-5xl text-white text-center"
            subTextStyle="text-white text-xl  md:w-3/5 text-center mx-auto"
            showJoinWaitlist={true}
          />
        </div>
      </div>
      <main className="w-4/5 md:w-2/4 mx-auto py-8 grid grid-cols gap-4">
        <p className="text-center text-xl">
          Browse through the categories or search for your query to quickly find
          the information you need. If you don’t see an answer to your question,
          feel free to reach out to us—we’re always here to help!
        </p>
        {data.map((data) => (
          <div key={data.id} className="py-1">
            <a
              onClick={() => {
                toggleAccordion(data.id);
              }}
              className="flex justify-between border-b-2 cursor-pointer"
            >
              <p className="text-xl">{data.question}</p>
              {openAccordionID === data.id ? (
                <span>
                  <IoChevronUp />
                </span>
              ) : (
                <span>
                  <IoChevronDown />
                </span>
              )}
            </a>
            {openAccordionID === data.id ? (
              <p className="text-xl text-gray-500">{data.ans}</p>
            ) : null}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
