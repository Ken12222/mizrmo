import { IoLocationOutline } from "react-icons/io5";

export default function Location() {
  return (
    <>
      <span className="flex justify-center md:justify-start">
        <IoLocationOutline size="30" className="text-white" />
        <p className="text-sm my-auto text-white px-1 text-center">
          Accra, Ghana
        </p>
      </span>
    </>
  );
}
