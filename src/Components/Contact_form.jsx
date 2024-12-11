import { useState } from "react";
import axios from "axios";

export default function Contact_form() {
  const [contactDetails, SetContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState("Submit");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitButtonText(
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'
    );

    const data = {
      template: "default",
      user_name: "mizrmo",
      email: "ashartey2@gmail.com",
      subject: contactDetails.subject,
      message: `${contactDetails.subject}. \n\nNew message from ${contactDetails.name} - ${contactDetails.email}, \n\nMessage: \n${contactDetails.message}`,
    };

    // Send form data to the server using Axios
    axios
      .post("https://testing-server.ehealthgh.app:2004/send", data)
      .then((response) => {
        console.log(response.data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
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
        <label htmlFor="Message">Message</label>
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
      <button
        name="submit"
        value="Submit"
        className="bg-blue-800 text-white w-full py-2 text-center rounded-full"
      >
        Send Message
      </button>
    </form>
  );
}
