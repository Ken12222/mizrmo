export default function Why_Us() {
  //Edit this content
  const data = [
    {
      id: "1",
      image: "../../images/shield.svg",
      heading: "Verified Users",
      content:
        "Every driver and rider completes ID verification, so you can travel with confidence.",
    },
    {
      id: "2",
      image: "../../images/wallet.svg",
      heading: "Cashless Transactions",
      content:
        "No need for cash—secure payments happen via bank accounts or mobile money wallets.",
    },
    {
      id: "3",
      image: "../../images/dollar.svg",
      heading: "Cost Savings",
      content:
        "Riders save money, and drivers offset fuel and maintenance costs.",
    },
    {
      id: "4",
      image: "../../images/leaf.svg",
      heading: "Sustainability",
      content:
        "Each shared ride reduces emissions and contributes to a cleaner, greener world.",
    },
    {
      id: "5",
      image: "../../images/people.svg",
      heading: "Community Impact",
      content: "Build connections with people in your city or beyond.",
    },
    {
      id: "6",
      image: "../../images/people.svg",
      heading: "Seamless User Experience",
      content:
        "Our user-friendly app makes finding and booking a ride quick and hassle-free. Drivers can list rides in minutes, and riders can book with a few taps.",
    },
  ];
  return (
    <div className="w-4/5 mx-auto py-16 text-center">
      <h1 className="pb-2 text-4xl md:text-5xl lg:md:text-5xl text-center text-blue-800">
        Why Choose Mizrmo?
      </h1>
      <p className="pb-5 text-xl">
        Mizrmo is designed to provide value for every user. Here's why thousands
        are ready to join us:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {data.map((data) => (
          <div className="p-5 bg-white rounded-lg" key={data.id}>
            <img src={data.image} alt="" />
            <p className="text-left text-blue-800 text-xl py-2">
              <strong>{data.heading}</strong>
            </p>
            <p className="text-left">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
