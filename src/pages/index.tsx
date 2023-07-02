import Typewriter from "typewriter-effect";
import Arrow from "../../public/assets/arrow.png";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Pfp from "../../public/assets/pfpp.png";
import SchoolIcon from "../../public/assets/icon-school.svg";
import Python from "../../public/assets/icons8-python.svg";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <AnchorLink href="#about">
            <h1 className="px-6 py-2 text-black font-JetBrainsMono font-bold text-xl bg-white rounded-md w-full flex items-center justify-center lg:w-fit brightness-100 hover:brightness-75 transition-all duration-150 mb-10 lg:mb-0">
              About me
            </h1>
          </AnchorLink>
        </div>
        <div className="lg:w-1/2 h-80 lg:h-auto lg:p-12 lg:pb-24">
          <div className="bg-pfp h-full bg-cover bg-center border-[1px] border-white box-shadoww"></div>
        </div>
      </div>
      <div className="lg:px-44 lg:py-24 p-10 pt-14 pb-14 bg-white" id="about">
        <div className="flex flex-col items-center justify-center text-black">
          <h1 className="font-JetBrainsMono text-5xl font-bold mb-10 ">
            About_
          </h1>
          <p className="text-lg text-justify mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className="flex flex-col lg:flex-row gap-20 w-full">
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
            <p className="text-white mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h1 className="font-JetBrainsMono text-3xl text-white font-bold mb-14 lg:mb-8">
              Skills
            </h1>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 w-full">
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
              </div>
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
              </div>
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
              </div>
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
              </div>
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
              </div>
              <div className="flex flex-row items-center lg:justify-center mb-5">
                <Image className="w-12 mr-4" src={Python} alt="school icon" />
                <h1 className="text-white font-semibold text-2xl">Python</h1>
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
                  <h1>2020 - Present</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">Product Designer</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="border-t-2 flex flex-row border-white pt-4 mb-12">
                <div className="w-1/3">
                  <h1>2020 - Present</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">Product Designer</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
              <div className="border-t-2 flex flex-row border-white pt-4 ">
                <div className="w-1/3">
                  <h1>2020 - Present</h1>
                </div>
                <div className="w-2/3 flex flex-col">
                  <h1 className="mb-6">Product Designer</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
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
          <p className="text-lg mb-8 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:h-80">
          <div className="lg:w-[25%] h-80  first-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              M6L website
            </h1>
            <p className="text-justify font-semibold text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:w-[25%] h-80  second-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              M6L website
            </h1>
            <p className="text-justify font-semibold text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:w-[25%] h-80  third-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              M6L website
            </h1>
            <p className="text-justify font-semibold text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="lg:w-[25%] h-80  fourth-image bg-center bg-cover translate-all duration-200 hover:w-[33%] cursor-pointer p-10 flex flex-col">
            <h1 className="text-white font-bold font-JetBrainsMono text-2xl mb-6">
              M6L website
            </h1>
            <p className="text-justify font-semibold text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
