import React, { useEffect } from 'react'; // Import useEffect from React
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: "🌐",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      description: "Markup language for structuring web content.",
    },
    {
      name: "CSS3",
      icon: "🎨",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      description: "Stylesheets for designing visually appealing web pages.",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description: "Programming language for interactive web functionality.",
    },
    {
      name: "React",
      icon: "⚛️",
      link: "https://reactjs.org/",
      description: "JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      icon: "🟩",
      link: "https://nodejs.org/",
      description: "JavaScript runtime for server-side development.",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      link: "https://tailwindcss.com/",
      description: "Utility-first CSS framework for styling web applications.",
    },
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 lg:py-28 font-Roboto bg-skills-background bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10">
        <h2 className="text-center text-gray-900 text-5xl font-extrabold mb-10">MY SKILLS</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center px-6 md:px-20">
          {skills.map((skill, index) => (
            <div
              className="p-6 shadow-lg bg-white rounded-lg transition-transform duration-300 hover:shadow-xl hover:scale-105"
              key={skill.name}
              data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => window.open(skill.link, '_blank')} // Open the link in a new tab
              >
                <span className="text-6xl mb-4">{skill.icon}</span>
                <h3 className="mt-2 text-2xl font-semibold">{skill.name}</h3>
                <p className="mt-3 text-gray-600 text-base max-w-xs">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
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
      <Skills />
    </div>
  );
}

export default App;
