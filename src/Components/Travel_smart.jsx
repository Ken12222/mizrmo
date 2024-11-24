export default function Travel_smart() {
  //Edit this content
  const data = [
    {
      id: "1",
      image: "../../images/leaf.svg",
      heading: "Cut Carbon Emissions",
      content:
        "Track CO₂ reduction through detailed reports and demonstrate your commitment to ESG goals.",
    },
    {
      id: "2",
      image: "../../images/car.svg",
      heading: "Save on parking",
      content:
        "No need for cash—secure payments happen via bank accounts or mobile money wallets.",
    },
    {
      id: "3",
      image: "../../images/people.svg",
      heading: "Boost Wellness",
      content:
        "Help employees save on commute costs and reduce travel-related stress",
    },
    {
      id: "4",
      image: "../../images/briefcase.svg",
      heading: "Build bonds",
      content:
        "Enable your employees to spend more time with each other and build lasting relationships.",
    },
  ];

  return (
    <div className="w-4/5 mx-auto py-16 text-center">
      <h1 className="pb-2 text-5xl text-center text-blue-800">
        Smarter Travel, Stronger Connections
      </h1>
      <p className="pb-5 text-xl">
        Businesses across Ghana are joining Mizrmo to support their employees
        and achieve sustainability goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
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
