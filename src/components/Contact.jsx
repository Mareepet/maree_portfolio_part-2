
import React, { useState } from "react";
const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if all the fields are filled
    if (!name || !email || !message) {
      alert("Please fill all the fields and try again.");
      return;
    }
  
    // Check if the email is valid
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address and try again.");
      return;
    }
  
    const formData = { name, email, message };
    fetch("https://formspree.io/f/xdovpzel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.ok) {
          setName("");
          setEmail("");
          setMessage("");
          alert("Your message has been sent. Thank you!");
        } else {
          alert("Please fill the correct details and try again.");
        }
      })
      .catch((error) => console.error(error));
  };

  const contact_info = [
    { logo: "mail", text: "mareeswaripetchimuthu778@gmail.com" },
    { logo: "logo-linkedin", text:"https://www.linkedin.com/in/mareeswari-petchimuthu/" },
    { logo: "location", text: "Adelaide" },
  ];

  return (
    
    <section id="contact" className="py-20 px-4 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="Email" placeholder="Your Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />
            <textarea placeholder="Your Message" rows={10} value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
            <button type="submit" className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                {contact.logo === "logo-linkedin" ? (
      <a href={contact.text} target="_blank" rel="noopener noreferrer">
        <p className="md:text-base text-sm break-words">
          {contact.text}
        </p>
      </a>
      ) : (
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
      )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


