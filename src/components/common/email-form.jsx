import { useState } from "react";
import { Mail } from 'lucide-react';

import emailjs from "emailjs-com";

import '../../styles/email-form.css';

const EmailForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log("Form data: ", 
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_SENDER_PUBLIC_KEY
    )

    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_SENDER_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Error sending email");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} i className={`email-form ${!props.disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2 max-w-md mx-auto p-4 bg-[#36343d] shadow-md rounded z-[100000] absolute bottom-[4.5rem] sm:left-[15.5%] lg:left-[30.5%] xl:left-[32.5%] min-[1400px]:left-[34.5%] min-[1600px]:left-[36.5%] min-[1700px]:left-[40.5%]`}>
      <h2 className="text-lg font-bold mb-4 text-white flex flex-row gap-4 items-start align-middle"> <Mail size={28}/> Connect with me via email </h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded text-black"
        color="#518eff"
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full mb-3 p-2 border rounded h-32"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex items-center justify-center w-full"
      >
        Send
      </button>

      {status && 
        <p className="mt-3 text-sm text-white w-full items-center justify-center align-middle">
            {status}
        </p>}
    </form>
  );
};

export default EmailForm;
