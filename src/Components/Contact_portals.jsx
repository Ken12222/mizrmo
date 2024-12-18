import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

export default function Contact_portals() {
  return (
    <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
      <span className="flex justify-center md:justify-start">
        <IoMailOutline size="30" className="text-white" />
        <p className="text-sm my-auto text-white px-1 text-center">
          support@mizrmo.com
        </p>
      </span>
      <span className="flex justify-center md:justify-start">
        <IoCallOutline size="30" className="text-white" />
        <p className="text-sm text-white my-auto px-1 text-center">
          +233 24 741 0909
        </p>
      </span>
      <span className="flex justify-center md:justify-start">
        <IoLocationOutline size="30" className="text-white" />
        <p className="text-sm my-auto text-white px-1 text-center">
          Accra, Ghana
        </p>
      </span>
    </div>
  );
}
