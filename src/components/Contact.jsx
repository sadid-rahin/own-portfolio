import React from 'react';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77d796f3-fb4d-4faf-b207-dff2b256fecc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section id="contact" className="font-Roboto py-20 bg-gray-900 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-bold mb-6">Get In Touch</h2>
        <p className="mb-8">Feel free to reach out for any web development projects or collaborations!</p>
        <form onSubmit={onSubmit} className="flex flex-col items-center space-y-4">
          <input type="text" name='name' placeholder="Your Name" className="w-full max-w-lg p-2 rounded" />
          <input type="email" name='email' placeholder="Your Email" className="w-full max-w-lg p-2 rounded" />
          <textarea placeholder="Your Message" name='message' className="w-full max-w-lg p-2 rounded h-32"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
