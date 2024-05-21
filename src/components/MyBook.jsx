import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import Cover from "./pages/Cover/Cover";
import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";
import FirstPage from "./pages/Hero/FirstPage";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/projects/Portfolio.png";
import ProjectImg2 from "../assets/projects/chatbot.png";
import ProjectImg3 from "../assets/projects/space.png";
import ProjectImg4 from "../assets/projects/phoenix.png";

const ProjectData = [
  {
    name: "Port Folio — Nawfal RAZOUK",
    description: "Portfolio website to include my professional projects and skills.",
    image: ProjectImg1,
    previewLink: "https://portfolio-nawfalrazouk7.vercel.app/",
  },
  {
    name: "Freelancer — RAZOUK Nawfal",
    description: "Chatbot website dynamically fetching data from the backend.",
    image: ProjectImg2,
    previewLink: "https://chatbot-razouk.vercel.app/",
  },
];
const ProjectData2 = [
  {
    name: "Space Portfolio",
    description: "Portfolio website to include my Frontend Mentor challenges.",
    image: ProjectImg3,
    previewLink: "https://space-portolio-main-five.vercel.app/",
  },
  {
    name: "It’s me Phoenix",
    description: "Parallax-Scrolling describe my nickname.",
    image: ProjectImg4,
    previewLink: "https://nawfalphoenix.vercel.app/",
  },
];

function MyBook(props) {
  return (
    <HTMLFlipBook width={600} height={700} showCover="true">
      <Page number={1}>
        <Cover coverImg={coverImg} title=" " />
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Skills />
      </Page>
      <Page number={4}>
        <Services />
      </Page>
      <Page number={5}>
        <About />
      </Page>
      <Page number={6}>
        <Projects ProjectData={ProjectData} />
      </Page>
      <Page number={7}>
        <Projects ProjectData={ProjectData2} />
      </Page>
      <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks" />
      </Page>
    </HTMLFlipBook>
  );
}

export default MyBook;
