
import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  
  return (
     <section id="about" className="py-14 text-white">
       <div className="text-center mt-8">
         <h3 className="text-4xl font-semibold">
           About <span className="text-cyan-600">Me</span>
         </h3>
         <p className="text-gray-400 my-3 text-lg">My introduction</p>
         <div className="flex md:flex-row flex-col-reverse items-center md:gap-1 gap-2 px-1 max-w-7xl mx-auto">
           <div className="p-2">
             <div className="text-gray-300 my-3">
              <p className="text-justify leading-10 text-sm w-11/12 mx-auto">
              I am an individual who loves to solve complex problems, learn new technologies and continuously upgrade. With a background  in computer science and software development knowledge.
Through my previous experiences, I have gained skills in the area of stakeholder management, collaboration, complex problem solving, leadership qualities and time management.
all of which has been proved and recognised/ awarded in my previous roles.</p>
               <br></br>
              <br></br> 
            
              <a href="https://drive.google.com/file/d/1D3MY4WuxKsAu5fZobmGd43gPsvbx7qYo/view?usp=sharing" download>
              
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
        
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
  <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
    <div className="w-full h-full overflow-hidden rounded-xl">
      <img
        src={aboutImg}
        alt=""
        className="w-full object-cover transition-all duration-500 ease-in-out transform hover:scale-110"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
