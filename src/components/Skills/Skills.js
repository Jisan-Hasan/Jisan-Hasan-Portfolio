import React from "react";
import html from "../../assets/html.png";
import css from '../../assets/css.png';
import js from '../../assets/javascript.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mongo.png';
import firebase from '../../assets/firebase.png';
import github from '../../assets/github.png';

const Skills = () => {
    return (
        <div name="skills" className="bg-[#0a192f] text-gray-300 h-screen w-full">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl  font-bold inline border-b-4 border-yellow-400">
                        My Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={html} alt="html" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={css} alt="html" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={bootstrap} alt="html" />
                        <p className="my-4">Bootstrap</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={tailwind} alt="html" />
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={js} alt="html" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={react} alt="html" />
                        <p className="my-4">React</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={node} alt="html" />
                        <p className="my-4">Node.js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={mongo} alt="html" />
                        <p className="my-4">MongoDB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={firebase} alt="html" />
                        <p className="my-4">Firebase</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mt-4 mx-auto" src={github} alt="html" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
