import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  return (
    <section id="about" className=" py-20 font-Roboto">
      <div className='flex justify-around items-center'>
        <div>
          <img data-aos="zoom-out-up" src="/src/assets/Image/aboutme-removebg.png" alt="" />
        </div>
        <div>
        <div data-aos="zoom-out-down" className="container mx-auto flex flex-col items-center">
        <h2 className="text-5xl text-gray-900 font-extrabold mb-6">About Me</h2>
        <p className="max-w-2xl lg:text-left text-center ">
          I'm a web developer with a passion for building responsive and performant websites. I love working with modern web technologies like React and Node.js to create seamless web experiences. I’m always looking for new challenges to expand my knowledge and improve my skills.
        </p>
      </div>
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
      <About/>
    </div>
  );
}

export default App;