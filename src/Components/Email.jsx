import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Email() {
  return (
    <>
      <span className="flex justify-center md:justify-start">
        <IoMailOutline size="30" className="text-white" />
        <Link
          to="mailto:support@mizrmo.com"
          className="text-sm my-auto text-white px-1 text-center"
        >
          support@mizrmo.com
        </Link>
      </span>
    </>
  );
}
