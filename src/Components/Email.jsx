import { IoMailOutline } from "react-icons/io5";

export default function Email() {
  return (
    <>
      <span className="flex justify-center md:justify-start">
        <IoMailOutline size="30" className="text-white" />
        <p className="text-sm my-auto text-white px-1 text-center">
          support@mizrmo.com
        </p>
      </span>
    </>
  );
}
