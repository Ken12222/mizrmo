import { useState } from "react";

export default function Contact_form() {
  const [contactDetails, SetContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form action="">
      <div className="grid grid-cols py-4">
        <label htmlFor="Name">Name</label>
        <input
          className="border-2 p-4 rounded-full outline-0"
          value={contactDetails.name}
          onChange={(e) => {
            SetContactDetails({
              ...contactDetails,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="eg: John Doe"
        />
      </div>
      <div className="grid grid-cols py-4">
        <label htmlFor="Name">Name</label>
        <input
          className="border-2 p-4 rounded-full outline-0"
          value={contactDetails.email}
          onChange={(e) => {
            SetContactDetails({
              ...contactDetails,
              email: e.target.value,
            });
          }}
          type="text"
          placeholder="eg: johndoe@email.com"
        />
      </div>
      <div className="grid grid-cols py-4">
        <label htmlFor="Message">Message</label>
        <textarea
          className="border-2 p-4 rounded-2xl outline-0"
          value={contactDetails.message}
          onChange={(e) => {
            SetContactDetails({
              ...contactDetails,
              message: e.target.value,
            });
          }}
          name=""
          id=""
          placeholder="Leave us a message"
        />
      </div>
      <button className="bg-blue-800 text-white w-full py-2 text-center rounded-full">
        Send Message
      </button>
    </form>
  );
}
