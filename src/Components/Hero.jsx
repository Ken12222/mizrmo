import Join_waitlist from "./Join_waitlist";

export default function Hero({
  mainText,
  subText,
  mainTextStyle,
  subTextStyle,
  showJoinWaitlist,
}) {
  return (
    <>
      <div>
        <h1 className={mainTextStyle}>{mainText}</h1>
        <p className={subTextStyle}>{subText}</p>
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 mx-auto">
        {showJoinWaitlist && <Join_waitlist />}
      </div>
    </>
  );
}
