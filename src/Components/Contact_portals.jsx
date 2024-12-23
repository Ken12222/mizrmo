import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Email from "./Email";
import Phone from "./Phone";
import Location from "./Location";

export default function Contact_portals() {
  return (
    <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4 py-4">
      <Email />
      <Phone />
      <Location />
    </div>
  );
}
