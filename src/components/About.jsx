import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import your PDF file here

const About = () => {
  return (
    <section id="about" className="py-20 font-Roboto">
      <div className="flex justify-around items-center">
        <div>
          <img
            className=""
            data-aos="zoom-out-up"
            src="/src/assets/Image/aboutme-removebg.png"
            alt="About Me"
          />
        </div>
        <div>
          <div data-aos="zoom-out-down" className="flex flex-col items-center">
            <h2 className="lg:text-5xl text-4xl text-gray-900 font-extrabold mb-6">
              About Me
            </h2>
            <p className="max-w-2xl lg:text-left">
              I'm a web developer with a passion for building responsive and performant websites. I love working with modern web technologies like React and Node.js to create seamless web experiences. I’m always looking for new challenges to expand my knowledge and improve my skills.
            </p>
          </div>
          <a
            href="/MD-Sadid-Rahin-Nohan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block  py-3 px-6 rounded-full bg-gray-900 text-white transition duration-300 cursor-pointer"
          >
            RESUME
          </a>

        </div>
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
