import Join_waitlist from "./Join_waitlist";

export default function Hero({ mainText, subText }) {
  return (
    <div className="w-4/5 mx-auto flex flex-col my-12">
      <div className="align-center">
        <h1 className="py-5 text-5xl text-white text-center">{mainText}</h1>
        <p className="text-white text-xl  md:w-4/5 text-center mx-auto">
          {subText}
        </p>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto">
        <Join_waitlist />
      </div>
    </div>
  );
}
