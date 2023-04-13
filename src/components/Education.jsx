
import React from "react";
import girlstudy from "../assets/images/girlstudy.png";

const Education = () => {
  return (
    <section id="education" className="py-14 px-3 text-white">
      <div className="text-center"><br/>
     <h3 className="text-4xl font-semibold">
          Qualifi<span className="text-cyan-600">cat</span>ions
        </h3>
      
      </div>
     
      <div className="bg-gray-700 relative px-7 rounded-2xl py-2 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center"style={{ position: "relative" }}>
  
  <img
    src={girlstudy}
    alt=""
    className="rounded-full"
    style={{ maxHeight: "32rem", display: "block", margin: "0 auto"}}
  />
  <a href="#contact">
    <button className="btn-primary mt-10 animate-bounce text-center block" style={{ position: "absolute", left: "60%", top: "10%" }}>Say Hello</button>
  </a>
</div>
    <br/>
      <div>
           <h4 className="text-lg font-semibold text-center">
             -<span className="text-cyan-600"> Bachelor of computer science</span> <span className=" text-xs mt-5 text-gray-300">
                   Alagapha University India
             </span>
           </h4>
           <br />
           <h2 className="text-lg font-semibold text-center">
             -<span className="text-cyan-600 "> Software Engineering Immersive Course</span>  <span className=" text-xs mt-5 text-gray-300">
                   General Assembly Australia
             </span>
                    
           </h2>

         </div>
        
 
    </section>
    
  );
};

export default Education;

