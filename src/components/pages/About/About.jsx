import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Like a phoenix rising from the ashes, we can find strength and renewal in the face of adversity, transforming our challenges into opportunities for growth and rebirth."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
        I am Nawfal Razouk, an IT engineering student at Mines Rabat with a strong proficiency in both front-end and back-end development, including technologies like ReactJS, PHP, and Java. I have created various projects, such as portfolio websites and web applications, showcasing my skills in HTML, CSS, JavaScript, and cloud services.
        </p>{" "}
        <br />
        <p>
        Additionally, I have leadership experience as the founder of the Mines IT Club and am fluent in Arabic, French, and English, making me a versatile and valuable tech professional.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
  <a href="https://www.facebook.com/profile.php?id=61554968127571&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
    <MdFacebook className="social-btn" />
  </a>
  <a href="https://www.instagram.com/nawfalrazouk7?igsh=MWM0cGNxdHV3MzB3bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
    <AiFillInstagram className="social-btn" />
  </a>
  <a href="https://github.com/NawfalRAZOUK7" target="_blank" rel="noopener noreferrer">
    <AiFillGithub className="social-btn" />
  </a>
  <a href="https://www.linkedin.com/in/nawfal-razouk?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
    <AiFillLinkedin className="social-btn" />
  </a>
</div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="../../../assets/my_resume.pdf" className="primary-btn">
            Download Resume
          </a>
          <a href="https://chatbot-razouk.vercel.app/" className="outline-btn">
            Chat with my chatbot ! 
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
