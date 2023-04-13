
import React from "react";
import home from "../assets/images/home.png";
import AOS from "aos";
import "aos/dist/aos.css";
import welcomeGIF from "../assets/images/welcome.gif";
const Home = () => {
  const social_media = [
    //  "logo-linkdein"
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-0 md:flex-row flex-col items-center"
    >
      <div
        className="flex-1 flex items-center justify-center h-full"
        data-aos="fade-right"
      >
        <img
          src={home}
          alt=""
          className="md:w-5/6 object-cover bg-cyan-600 rounded-full"
        />
      </div>
      <div className="flex-1" data-aos="fade-left">
      <div className="md:text-left text-center">
          

   <h4 className="md:text-2xl text-2xl md:leading-normal leading-5 text-white font-bold">
  <span className="text-cyan-600 md:text-6xl text-5xl ">
     Hello! 
    
<span class="text-sm md:animate-spin">Give a high-five to Jerry and see the magic </span>

    <img 
      src={welcomeGIF} 
      alt="Welcome GIF" 
      className={`welcome-gif w-16 h-16 rounded-full inline-block ml-4 hover:animate-spin `} 
    />
  </span>
  <br />
  My Name is <span>Mareeswari Petchimuthu</span>
  
</h4>

     <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
    <span className="text-cyan-600 inline-block">Software Engineer</span>
    
    </h4>

        </div>
      </div>
    </section>
  );
};

export default Home;
