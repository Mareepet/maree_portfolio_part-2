
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png" ;
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Tic Tac Toe",
      github_link: "https://github.com/Mareepet/tic-tac-toe",
      live_link: "https://mareepet.github.io/tic-tac-toe/",
    },
    {
      img: project2,
      name: "Uniq flowers App",
      github_link: "https://github.com/Mareepet/flowers_app",
      live_link: "https://uniq-flower-app.onrender.com/",
    },
    {
      img: project3,
      name: "Let's go to the Park",
      github_link: "https://github.com/Mareepet/Let-s-go-to-the-park",
      live_link: "https://lets-go-2-the-park.onrender.com/",
    },
    {
      img: project4,
      name: "Recipe's Point",
      github_link:
        "https://github.com/Mareepet/Recipe-s-point",
      live_link: "https://recipes-point.surge.sh/",
    },
    
  ];
  return (
    <section id="projects" className="py-14 text-white">
      <div className="text-center"><br />
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <br />
    
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-4/4 w-full">
        
          <Swiper
            slidesPerview={2.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
                
              },
             
            }}
           
             loop={true}
             autoplay={{
               delay: 3000,
             }}
       
             pagination={{
               clickable: true,
             }}
             modules={[Pagination, Autoplay]}
           >
        <br></br>
        <br></br>
        <br></br>
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl object-cover">
                  <img src={project_info.img} alt="" className="rounded-lg h-64 w-full object-fit" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                  
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Project;

