import Join_waitlist from "./Join_waitlist";
import greater from "../../images/greater_than.svg";

export default function Be_part() {
  const data = [
    {
      id: "1",
      content: "Be among the first to experience Mizrmo.",
    },
    {
      id: "2",
      content: "Get exclusive launch updates and perks.",
    },
    {
      id: "3",
      content: "Help shape the future of shared mobility in Ghana.",
    },
  ];

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <h1 className="pb-2 text-2xl md:text-3xl lg:md:text-3xl text-center text-blue-800">
          Be Part of the Revolution. Join the Mizrmo Waitlist Today.
        </h1>
        <p className="w-3/5 mx-auto pb-5 text-sm text-center">
          Don't miss out on the future of mobility. By joining our waitlist,
          you'll get early access to Mizrmo's launch and exclusive perks
          designed just for our early users.
        </p>
      </div>

      <div className="w-4/5 mx-auto md:w-2/4 lg:w-2/4 shadow-xl p-2 bg-white rounded-lg m-5">
        <h1 className="text-center">
          <strong>What's in it for You?</strong>
        </h1>
        {data.map((data) => (
          <div key={data.id} className="flex justify-center">
            <img src={greater} alt="greater_than" />
            <p className="text-base md:text-xl lg:text-xl pt-2">
              {data.content}
            </p>
          </div>
        ))}
        <div>
          <Join_waitlist />
        </div>
      </div>
    </div>
  );
}
