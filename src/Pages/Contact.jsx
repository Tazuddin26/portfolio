import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_po8443b",
        "template_ib7286k",
        form.current,
        "SFsaNLstbDzz7RGyd"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <div id="contact" className="max-w-7xl mx-auto ">
      <div className="flex flex-col justify-center items-center space-y-3 mt-3">
        <p className="text-3xl text-white font-fn">Contact Me</p>
        <hr className="border-green-600 w-80  " />
      </div>
      <div className="lg:flex justify-center my-10 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" p-8 rounded shadow-md w-full max-w-md bg-gray-700 "
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-white font-fn">
            Send an Email
          </h2>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-white font-fn">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2 text-white font-fn">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-bold mb-2 text-white font-fn">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full font-fn p-2 px-6 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100  hover:bg-green-600"
          >
            Send Message
          </button>
          {isSent && (
            <p className="text-green-500 text-center font-fn mt-4">
              Your email has been sent successfully!
            </p>
          )}
        </form>
        <div className="lg:ml-5 ">
          <p className="text-white text-2xl font-fn text-center  ">Contact Information</p>
          <hr className="border-green-600  " />
          <div className="space-y-3 mt-5">
            <p className="text-white flex items-center font-fn text-xl gap-2">
              <AiOutlineMail size={28} className="text-blue-500" />{" "}
              <span className="">tazuddin26@gmail.com</span>
            </p>
            <p className="text-white flex items-center gap-2 ">
              <CiPhone size={28} className="text-blue-500" />{" "}
              <span>+880 1310 642581</span>
            </p>
            <p className="text-white flex items-center gap-2 ">
              <FaWhatsapp size={28} className="text-green-500" />{" "}
              <span>+880 1310 642581</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
