import Join_waitlist from "./Join_waitlist";

export default function Hero({
  mainText,
  subText,
  mainTextStyle,
  subTextStyle,
}) {
  return (
    <div className="w-4/5 mx-auto my-auto flex flex-col my-12">
      <div className="align-center">
        <h1 className={mainTextStyle}>{mainText}</h1>
        <p className={subTextStyle}>{subText}</p>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto">
        <Join_waitlist />
      </div>
    </div>
  );
}
