import React from "react";
import Heading from "../Component/Heading/Heading";

const Contact: React.FC = () => {
  return (
    <div className="mt-24">
        <Heading title='Hire me'></Heading>
      <div className="bg-dark text-white  px-5  flex flex-col lg:flex-row justify-between">
        {/* Contact Info Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-5 text-green-400">
            Contact <span className="text-white">Info</span>
          </h2>
          <div className="mb-4 flex items-start">
            <span className="text-2xl mr-4">👔</span>
            <div>
              <h3 className="text-lg font-semibold">Name</h3>
              <p>Rakibul Hasan</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <span className="text-2xl mr-4">📍</span>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p>mymenshingh sadar,Mymensings, Bangladesh-5600</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <span className="text-2xl mr-4">📞</span>
            <div>
              <h3 className="text-lg font-semibold">Call / WhatsApp</h3>
              <p>+88-01943399738</p>
            </div>
          </div>
          <div className="mb-4 flex items-start">
            <span className="text-2xl mr-4">📧</span>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p>rakibulhasan3929@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-5 text-green-400">
            Contact <span className="text-white">Me</span>
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md border-2 border-green-400 bg-transparent text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md border-2 border-green-400 bg-transparent text-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md border-2 border-green-400 bg-transparent text-white focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded-md border-2 border-green-400 bg-transparent text-white focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition"
            >
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
