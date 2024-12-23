import { IoCallOutline } from "react-icons/io5";

export default function Phone() {
  return (
    <>
      <span className="flex justify-center md:justify-start">
        <IoCallOutline size="30" className="text-white" />
        <p className="text-sm text-white my-auto px-1 text-center">
          +233 24 741 0909
        </p>
      </span>
    </>
  );
}
