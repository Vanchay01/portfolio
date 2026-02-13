import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoMdPin } from "react-icons/io";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaTelegram,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bkgcsd8",
        "template_mvyb4lu",
        form.current,
        "7csjX-OvJvgUzwv97",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
        },
      );
  };

  return (
    <article className="overflow-hidden bg-slate-100  dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center py-6 ">
      <div className="md:flex justify-between w-full md:max-w-7xl px-4 pt-16 transition-colors duration-400 ">
        <div
          ref={ref}
          className="w-full md:w-1/2 pb-5 space-y-4 text-gray-700 dark:text-white"
        >
          <h1
            style={{ transitionDelay: "0ms" }}
            className={`mb-6 text-2xl sm:text-6xl font-bold text-gray-700 dark:text-gray-300 transition-all duration-700
            ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-400px]"
            }
            `}
          >
            Contact Information
          </h1>
          <p
            style={{ transitionDelay: "50ms" }}
            className={` transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}`}
          >
            I’m currently free and open to new opportunities, so please feel
            free to reach me anytime if you’d like to work together, share an
            idea, or simply start a conversation.
          </p>
          <div
            style={{ transitionDelay: "100ms" }}
            className={`mt-10 flex items-center justify-start transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}`}
          >
            <MdEmail size={25} color="#FFD803" className="mr-2" />
            <p>chaydouble0@gmail.com</p>
          </div>
          <div
            style={{ transitionDelay: "125ms" }}
            className={`flex items-center justify-start transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}`}
          >
            <IoMdPin size={25} color="#FFD803" className="mr-2" />
            <p>334 Kampong Rou, Svay Rieng</p>
          </div>
          <div
            style={{ transitionDelay: "150ms" }}
            className={`flex items-center justify-start transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}`}
          >
            <FaPhoneSquareAlt color="#FFD803" size={25} className="mr-2" />
            <p>(855) 60446580</p>
          </div>
          <div
            style={{ transitionDelay: "200ms" }}
            className={`flex items-center py-4 space-x-4 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-400px]"}`}
          >
            <a
              className="hover:scale-130 transition duration-75"
              href="https://www.linkedin.com/in/meas-vanchay-9799b036a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75"
              href="https://www.facebook.com/vanchay.21/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75"
              href="https://github.com/Vanchay01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={37} color="#FFD803" />
            </a>
            <a
              className="hover:scale-130 transition duration-75 "
              href="https://t.me/vanchayyy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram size={37} color="#FFD803" />
            </a>
          </div>
        </div>
        <div ref={ref} className=" w-full md:w-1/2 md:flex justify-end  ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full space-y-4 md:max-w-sm p-4 border-gray-900 dark:border-gray-100 rounded transition-colors duration-400 text-gray-700 dark:text-gray-300"
          >
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <input type="hidden" name="title" value="Website Contact" />
            <h1
              htmlFor=""
              style={{ transitionDelay: "0ms" }}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
            >
              Name
            </h1>
            <input
              type="text"
              name="name"
              style={{ transitionDelay: "50ms" }}
              className={`w-full  p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
              required
            ></input>
            <h1
              htmlFor=""
              style={{ transitionDelay: "100ms" }}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
            >
              Email
            </h1>
            <input
              type="email"
              name="user_email"
              style={{ transitionDelay: "150ms" }}
              className={`w-full  p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
              required
            />
            <h1
              htmlFor=""
              style={{ transitionDelay: "200ms" }}
              className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
            >
              Message
            </h1>
            <textarea
              name="message"
              style={{ transitionDelay: "250ms" }}
              className={`w-full  p-3 border rounded border-gray-900 dark:border-gray-100 text-gray-700 dark:text-white transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[400px]"}`}
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              style={{ transitionDelay: "300ms" }}
              className={`hover:blur-5 w-full  box-button px-6 py-2 rounded cursor-pointer transition-all duration-700
                ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-[400px]"
                }
                `}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contact;
