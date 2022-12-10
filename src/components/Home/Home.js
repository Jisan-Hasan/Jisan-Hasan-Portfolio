import React from "react";
import { FaFileDownload } from "react-icons/fa";
import resume from "../../assets/Jisan_Hasan_Resume.pdf";
const Home = () => {
    return (
        <div name="home" className="bg-[#0a192f] w-full h-screen">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-2xl md:text-3xl text-yellow-300">Hi, I am</p>
                <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">
                    Jisan Hasan
                </h1>
                <h2 className="text-4xl md:text-7xl font-bold text-[#8892b0]">
                    I'm a Full Stack Web Developer.
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    I'm a full stack web developer specializing in react.js. The
                    main focus is on front-end. Currently, I'm focused on learning
                    responsive full-stack web application.
                </p>
                <div>
                    <button>
                        <a
                            download="Jisan_Hasan_Resume.pdf"
                            href={resume}
                            className="flex items-center gap-1 text-white border-2 rounded-lg px-6 py-3 my-2 hover:bg-yellow-600 duration-200"
                        >
                            Resume <FaFileDownload />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
