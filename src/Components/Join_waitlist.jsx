import { Link } from "react-router-dom";

export default function Join_waitlist() {
  return (
    <div className="my-5 md:w-3/4 lg:w-3/4 mx-auto flex justify-center">
      {/* <form className="p-1 flex"> */}
      {/* <input
          name="waitlist"
          placeholder="Enter Your Email"
          className="m-3 outline-0 w-full"
          type="text"
        /> */}
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSePDrMXqicR3G3j2aya4t6Du_qsZq6sOIrkPZ4DTorX2taV1A/viewform?usp=sf_link"
        target="blank"
        className="w-3/4 md:w-1/4 lg:1/4 btn border-0 bg-yellow-300 hover:bg-blue-800 ease-in-out duration-700 hover:text-yellow-400 rounded-full"
      >
        Join Waitlist
      </Link>
      {/* </form> */}
    </div>
  );
}
