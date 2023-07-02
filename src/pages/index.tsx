import Typewriter from "typewriter-effect";
import Arrow from "../../public/assets/arrow.png";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Pfp from "../../public/assets/pfpp.png";
import SchoolIcon from "../../public/assets/icon-school.svg";
import Python from "../../public/assets/icons8-python.svg";
import Email from "../../public/assets/icons8-email.svg";
import Link from "next/link";
import Java from "../../public/assets/icons8-java.svg";
import React from "../../public/assets/icons8-react.svg";
import Javascript from "../../public/assets/icons8-javascript.svg";
import C_lang from "../../public/assets/icons8-c-programming.svg";
import SQL from "../../public/assets/icons8-sql.svg";
import Tailwind from "../../public/assets/icons8-tailwind-css.svg";
import Git from "../../public/assets/icons8-git.svg";
import Fullstack from "../../public/assets/icons8-fullstack-developer.svg";
import Developer from "../../public/assets/icons8-developer-64.png";
import Researcher from "../../public/assets/icons8-research.svg";


export default function Home() {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <div className="flex p-10 pt-20 pb-20 lg:p-24 flex-col lg:flex-row text-white lg:gap-10">
        <div className="lg:w-1/2 lg:p-12 lg:pr-6 lg:pb-32">
          <h1 className="lg:text-5xl text-5xl font-JetBrainsMono font-semibold mb-10 lg:mb-10">
            {">"} Zakaria <span>Elharmouzi_</span>
          </h1>
          <h1 className="lg:text-5xl text-5xl font-Montserrat font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-5 lg:mb-10">
            {/* <h1 className="lg:text-5xl font-Montserrat font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 background-animate"> */}
            Fullstack developer <span className="text-white">&</span> Software
            Engineer
          </h1>
          <p className="text-justify mb-10 text-lg">
            Bringing Ideas to Life through Technology.
          </p>
          <AnchorLink href="#about">
            <h1 className="px-6 py-2 text-black font-JetBrainsMono font-bold text-xl bg-white rounded-md w-full flex items-center justify-center lg:w-fit brightness-100 hover:brightness-75 transition-all duration-150 mb-10 lg:mb-0">
              About me
            </h1>
          </AnchorLink>
        </div>
        <div className="lg:w-1/2 h-80 lg:h-auto lg:p-12 lg:pb-24">
          <div className="bg-pfp h-full bg-cover bg-center border-[1px] border-white box-shadoww">
          </div>
        </div>
      </div>
      <div className="lg:px-44 lg:py-24 p-10 pt-14 pb-14 bg-white" id="about">
        <div className="flex flex-col items-center justify-center text-black">
          <h1 className="font-JetBrainsMono text-5xl font-bold mb-10 ">
            About_
          </h1>
          <p className="text-lg text-justify ">
            I am currently a Junior at Al Akhawayn University in Ifrane, Morocco, where I am enthusiastically pursuing a degree in Computer Science with a minor in Business Administration. My passion lies in the realm of full-stack development and software engineering.
          </p>
          <p className="text-lg text-justify mb-16">
            Presently, I am actively engaged as a researcher for the REMO group at AUI, where I contribute to diverse research projects focusing on software development and emerging technologies.
          </p>
          <div className="flex flex-col lg:flex-row gap-20 w-full">
            <div className="lg:w-1/3 flex flex-col items-center justify-center">
              <Image
                className="w-12 rounded-[20%] p-2 border-black border-2 mb-4"
                src={Developer}
                alt="school icon"
              />
              <h1 className="text-black font-semibold text-2xl">
                developer
              </h1>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center justify-center">
              <Image
                className="w-12 rounded-[20%] p-2 border-black border-2 mb-4"
                src={Researcher}
                alt="school icon"
              />
              <h1 className="text-black font-semibold text-2xl">
                Research assistant
              </h1>
            </div>
            <div className="lg:w-1/3 flex flex-col items-center justify-center">
              <Image
                className="w-12 rounded-[20%] p-2 border-black border-2 mb-4"
                src={SchoolIcon}
                alt="school icon"
              />
              <h1 className="text-black font-semibold text-2xl">
                Junior at AUI
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-44 lg:py-24 p-10 pt-14 pb-14" id="skills">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="font-JetBrainsMono text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold mb-8">
              Skills & Experience_
            </h1>
            <h2 className="text-white mb-10">
              I have a wide range of skills and experience in software And Web Dev.
            </h2>
            <h1 className="font-JetBrainsMono text-3xl text-white font-bold mb-14 lg:mb-8">
              Skills
            </h1>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 w-full justify-center ">
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Javascript} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Javascript</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Fullstack} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Full stack</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Git} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Git</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={SQL} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">SQL</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Java} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Java</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Python</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={C_lang} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">C</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={React} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">React</h1>
              </div>
              <div className="flex flex-row items-center mb-5">
                <Image className="w-12 mr-4" src={Tailwind} alt="school icon" />
                <h1 className="text-white font-semibold text-1.5xl">Tailwind</h1>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:px-4 text-white">
            <h1 className="font-JetBrainsMono text-3xl text-white font-bold mb-10">
              Experience
            </h1>
            <div className="flex flex-col">
              <div className="border-t-2 flex flex-row border-white pt-4 mb-12">
                <div className="w-1/3">
                  <h1>2021 - present</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">Research Experience</h1>
                  <p>
                    In this time I tackled many projects with the supervision of Dr Khallaayoun and the REMO team, We were mainly focused as the name suggests (Renewable Energy-based E-Mobility) in Morocco.
                  </p>
                </div>
              </div> 
              <div className="border-t-2 flex flex-row border-white pt-4 mb-12 ">
                <div className="w-1/3">
                  <h1>2022 - present</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">Freelancing</h1>
                  <p>
                    During this timeframe, I actively engaged in freelancing work, undertaking various projects primarily for family members and fellow students.
                  </p>
                </div>
              </div>
              <div className="border-t-2 flex flex-row border-white pt-4 ">
                <div className="w-1/3">
                  <h1>2022 - 2022</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">AXA Software internship</h1>
                  <p>
                    During this period, I had the opportunity to intern at AXA Morocco, where I gained valuable experience in software maintenance.
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" id="project">
        <div className="lg:px-44 lg:py-24  p-10 pt-14 pb-14">
          <h1 className="font-JetBrainsMono text-5xl font-bold mb-10 ">
            Projects_
          </h1>
          <p className="text-lg text-justify">
          I have worked on a variety of projects, including personal projects and research projects for the REMO group. These experiences have helped me develop strong teamwork skills and the ability to adapt to different projects and challenges.
          </p>
           <p className="text-lg mb-8 text-justify">
          Most of the projects are clickable and will redirect you to the project's website or github repository.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:h-80">
          <Link className="lg:w-[25%] h-80  first-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col" target="_blank" href="https://book-managment-n3lq.vercel.app/">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              M6L website
            </h1>
            <p className="text-justify font-semibold bg-black/60 text-white ">
              this is a website I made to tackle a problem with the AUI library website, the interface is very user-friendly and easy to use, I used React and supabase for this project.
            </p>
          </Link>
          <Link className="lg:w-[25%] h-80  second-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col" target="_blank" href="https://github.com/zakielharmouzi/Python_scraping--library">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              AUI Library scraper
            </h1>
            <p className="text-justify font-semibold bg-black/60 text-white ">
              For this project, I worked on scraping the AUI library for all hard copies of the books and their availability, I used Python and Selenium for this project.
            </p>
          </Link>
            <Link className="lg:w-[25%] h-80  third-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col" target="_blank" href="https://www.mdpi.com/1996-1073/16/2/753">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              Research Article 
            </h1>
            <p className="text-justify font-semibold bg-black/60 text-white ">
              In this article the REMO team and I worked on figuring out the best way to implement the optimal charging station locations in Morocco, Using many softwares and tools such as GIS, Python, and many more.
            </p>
          </Link>
          <div className="lg:w-[25%] h-80  fourth-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              Case Study
            </h1>
            <p className="text-justify font-semibold bg-black/60 text-white ">
              For this case study we used mathematical models to figure out the weight of each social factor to determine if the studied country is able to adapt FCVS(Fuel Cell Vehicles) or not. (Under review)
            </p>
          </div>
        </div>
      </div>
      <div className="lg:px-44 lg:py-24 p-10 pt-14 pb-14" id="Contact">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="lg:w-1/2">
            <h1 className="font-JetBrainsMono text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold mb-8">
              Contact me_
            </h1>
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-row items-center gap-4">
                <p className="text-white font-semibold text-2xl">
                  Email:
                </p>
                <p className="text-white font-semibold text-2xl ">
                Z.elharmouzi@aui.ma
                </p>
                <p className="text-white font-semibold text-2xl ml-20">
                Phone:
                </p>
                <p className="text-white font-semibold text-2xl">
                +212643701368
                </p>
                 <p className="text-white font-semibold text-2xl ml-20">
                Github:
                </p>
                <p className="text-white font-semibold text-2xl">
                <Link href="https://github.com/zakielharmouzi">Zakielharmouzi</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
