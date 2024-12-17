import { useState } from "react";
import axios from "axios";

export default function Contact_form() {
  const [contactDetails, SetContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      template: "default",
      user_name: "mizrmo",
      email: "support@mizrmo.com",
      message: `\n\nNew message from ${contactDetails.name} - ${contactDetails.email}, \nMessage: \n${contactDetails.message}`,
    };

    // Send form data to the server using Axios
    axios
      .post("http://mizrmo.ipv64.net:3040/authentication/support", data)
      .then((response) => {
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        alert("Failed to send email.");
      })
      .finally(() => {
        setLoading(false);
        setSubmitButtonText("Submit");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols py-4">
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          name="name"
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
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
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
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className="border-2 p-4 rounded-2xl outline-0"
          value={contactDetails.message}
          onChange={(e) => {
            SetContactDetails({
              ...contactDetails,
              message: e.target.value,
            });
          }}
          name="message"
          placeholder="Leave us a message"
        />
      </div>
      {loading ? (
        <button className=" bg-gray-600 text-white w-full py-2 text-center rounded-full">
          sending...
        </button>
      ) : (
        <button
          name="submit"
          value="Submit"
          className="bg-blue-800 text-white w-full py-2 text-center rounded-full"
        >
          Submit
        </button>
      )}
    </form>
  );
}
