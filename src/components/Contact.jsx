import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="font-Roboto py-20 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-8">Feel free to reach out for any web development projects or collaborations!</p>
        <form className="flex flex-col items-center space-y-4">
          <input type="text" placeholder="Your Name" className="w-full max-w-lg p-2 rounded" />
          <input type="email" placeholder="Your Email" className="w-full max-w-lg p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full max-w-lg p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
