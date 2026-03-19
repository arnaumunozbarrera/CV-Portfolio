import React, { useEffect, useState, useRef } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { FolderClosed, Sun, Moon, X, CircleUserRound, FileBadge2, Linkedin, Github, Languages, DatabaseZap, Wrench, FolderGit2, SplinePointer, BookUser, Waypoints, University, CodeXml, FolderCode  } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconCloudDatabases } from './icon-cloud-databases';
import { IconCloudLanguages } from './icon-cloud-languages';
import { IconCloudTools } from './icon-cloud-tools';
import { Projects } from './projects';
import { GlowCard } from "../common/spotlight-card";
import { Mail } from 'lucide-react';

import PDF from '../common/pdf'
import Notepad from '../common/notepad'
import gsap from 'gsap';
import NotepadViewer from '../common/notepad-viewer';
import WindowsExplorerProjects from '../common/file-explorer-projects';
import WindowsExplorerDegrees from '../common/file-explorer-degrees';
import JobTimeline from '../common/timeline-job-experience';
import WindowsExplorerSkills from '../common/file-explorer-skills';

import '../../styles/hero.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'boxicons/css/boxicons.min.css';

export const TerminalComponent = (props) => {
    const [terminalMode, setTerminalMode] = useState("dark");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [readOnlyState, setReadOnlyState] = useState(true);
    const terminalRef = useRef(null);

    const toggleTerminalMode = () => {
        setTerminalMode( prevMode => prevMode === "dark" ? "light" : "dark");
    }

    const closeTerminal = () => {
        if (terminalRef.current) {
            gsap.to(terminalRef.current, {
                duration: 0.8,
                scaleY: 0,
                scaleX: 0,
                y: 5,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    // TerminalService.emit('close');
                    props.onChangeState && props.onChangeState(false);
                    fetch('welcome.txt')
                    .then((res) => res.text())
                    .then((text) => setWelcomeMessage(text))
                    .catch((err) => {
                        console.error("Failed to load title.txt", err);
                        setWelcomeMessage(`Arnau Muñoz Barrera
                            Backend Engineer`);
                    });
                }
            });
        }
        setTimeout(() => {
            gsap.set(terminalRef.current, { clearProps: "all" }); // Reset styles
        }, 1000);
    }

    const minimizeTerminal = () => {
        if (terminalRef.current) {
            gsap.to(terminalRef.current, {
                duration: 0.6,
                scaleY: 0,
                scaleX: 0,
                y: 400,
                opacity: 0,
                ease: "power2.inOut",
                onComplete: () => {
                    // TerminalService.emit('close');
                    props.onChangeState && props.onChangeState(false);
                    setWelcomeMessage("");
                }
            });
        }
        setTimeout(() => {
            gsap.set(terminalRef.current, { clearProps: "all" }); // Reset styles
        }, 1000);

    }

    useEffect(() => {
        fetch('welcome.txt')
            .then((res) => res.text())
            .then((text) => setWelcomeMessage(text))
            .catch((err) => {
                console.error("Failed to load title.txt", err);
                setWelcomeMessage(`Arnau Muñoz Barrera
                    Backend Engineer`);
            });
    }, []);

    useEffect(() => {
        TerminalService.on('command', (text) => {
            let response = '';  
            text = text.trim().toLowerCase(); 
            switch (text) {
                case 'help':
                    setWelcomeMessage("");
                    response = `This is Arnau's personal website terminal interface. You can navigate through the website exploring different features but also you can use it as a terminal to execute commands.

This terminal supports the following commands:
$ help: Display command list
$ sections: List website sections
    $ sections -experience
    $ sections -projects
    $ sections -skills
    $ sections -certifications
    $ sections -about
$ current: Display Arnau's job career current status
$ contact: Display contact information
$ reload: Reload website
                            `;

                    break;
                case 'sections':
                    setWelcomeMessage("");
                    response = `Sections:
- Experience
- Projects
- Skills
- Certifications
- About me
         `;
                    break;
                case 'current':
                    setWelcomeMessage("");
                    response = 'I am currently working as a Full Stack Engineer at Energiot, focusing on web development, API services and cloud solutions with React, Node.js and Python for native IoT devices';
                    break;
                case 'contact':
                    setWelcomeMessage("");
                    response = `Contact Information:
- Email: arnaumunozbarrera@gmail.com
- LinkedIn: https://www.linkedin.com/in/arnau-munoz-barrera
- Github: https://github.com/arnaumunozbarrera
                                                           `;
                    break;
                case 'reload':
                    setWelcomeMessage("");
                    response = '';
                    window.location.reload();
                    break;
                case 'sections -experience':
                    setWelcomeMessage("");
                    response = '· UAB - UNIVERSITY (2022 - 2026): Computer Engineering Degree\n· Looking to Collaborate In Open Source Projects (All time)\n· Energiot | Computer Engineer (Feb 2025 - Current): Full Stack Developer\n· Future: MASTER: Data Science';
                    break;
                case 'sections -projects':
                    setWelcomeMessage("");
                    response = ' · Please, visit the "Projects" by clicking on the "Projects" button in the main menu to see my latest work.';
                    break;
                case 'sections -skills':
                    setWelcomeMessage("");
                    response = '· Languages: Python, Node.js, React, Java, C++\n· Databases: Oracle, MongoDB, PostgreSQL\n· Tools: Docker, Git, Nginx, Figma';
                    break;
                case 'sections -certifications':
                    setWelcomeMessage("");
                    response = '· Intermediate to Machine Learning - Kaggle (2026)\n· Intro to Deep Learning - Kaggle (2026)\n· UABTHEHACK Winner - UAB (2025)\n· English Certificate C1 - Cambridge (2024)\n· The McKinsey Way - McKinsey & Company (2025)';
                    break;
                case 'sections -about':
                    setWelcomeMessage("");
                    response = "I am a Computer Engineering student committed to improving interactions between people and technology. With skills in conflict resolution, I approach challenges collaboratively. Passionate about new technology and creating interactive visuals, I enjoy refining my creativity and transforming concepts into engaging digital experiences. I am eager to contribute Data Analytics related development with the intention of enhancing user experience & improve system performance. \n\nBy the time I complete my degree, I will be looking forward to enrolling in a Master's program to further advance my expertise in Data Science development.";
                    break;
                default:
                    setWelcomeMessage("");
                    response = `Unknown command: ${text} | Type 'help' for a list of available commands.`;
                    break;
            }
            TerminalService.emit('response', response);
        });

        return () => TerminalService.off('command');
    }, []);

    return (
        <div ref={terminalRef} className={`card flex flex-col items-center justify-center p-2 pb-0 w-full 
        ${!props.terminalState ? "hidden" : ""}`}>
            <div className={`bg-[#36343d] h-[20px] w-full rounded-t-lg flex flex-row px-2 gap-2  items-center 
                ${!props.terminalState ? "hidden" : ""} `}>

                <button onClick={closeTerminal}> <div className='rounded-full size-2 bg-[#da6e66]'></div> </button>
                <button onClick={minimizeTerminal}> <div className='rounded-full size-2 bg-[#f5c555]'></div> </button>

                <div className='w-full flex flex-row items-center justify-center align-middle gap-2 '>
                    <FolderClosed size={12} color={"gray"} />
                    <div className=' text-gray-300 text-xs pb-1'>arnaumunozbarrera | Computer Engineer</div>
                </div>

                <div className='flex flex-row items-center justify-end px-1 gap-3'>
                    <button onClick={toggleTerminalMode}>{terminalMode === "dark" ? <Sun size={12} className='text-[#c09d4c] hover:text-[#f5c555]'/> : <Moon size={12}  className='text-gray-300 hover:text-[#fff]'/>}</button>
                </div>
            </div>

            <Terminal welcomeMessage={welcomeMessage} 
                    aria-readonly={readOnlyState} 
                    prompt="C:\arnau-dev>" 
                    className={`terminal-mac h-[350px] w-full rounded-lg rounded-t-none 
                    ${terminalMode === "dark" ? "bg-[#1e1f1f] text-white": "bg-[#cdcbcb] text-black"}  
                    text-xs font-mono whitespace-pre-wrap ${welcomeMessage ? "text-center" : ""}`} />
        </div>
    );
};

export default function Hero(props) {
    const [showCV, setShowCV] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showSkills, setShowSkills] = useState(false);
    const [showDegrees, setShowDegress] = useState(false);
    const [showNotepad, setShowNotepad] = useState(false);

    const [terminalState, setTerminalState] = useState(true);

    const [appearClose, setAppearClose] = useState(false);
    const [disabledTerminal, setDisabledTerminal] = useState(false);
    const [renderFullScreenPDF, setRenderFullScreenPDF] = useState(false);
    const [PDFElement, setPDFElement] = useState("");

    const handleTerminalStateChange = (state) => {
        setTerminalState(state);
    };

    const toggleShowCV = () => {
        setShowCV(!showCV);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(false);
        setShowDegress(false);
        setShowNotepad(false);
    };

    const toggleExperience = () => {
        setShowCV(false);
        setShowExperience(!showExperience);
        setShowProjects(false);
        setShowSkills(false);
        setShowDegress(false);
        setShowNotepad(false);
    }

    const toggleProjects = () => {
        setShowCV(false);
        setShowExperience(false);
        setShowProjects(!showProjects);
        setShowSkills(false);
        setShowDegress(false);
        setShowNotepad(false);
    }

    const toggleSkills = () => {
        setShowCV(false);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(!showSkills);
        setShowDegress(false);
        setShowNotepad(false);
    }

    const toggleDegrees = () => {
        setShowCV(false);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(false);
        setShowDegress(!showDegrees);
        setShowNotepad(false);
    }

    const toggleAbout = () => {
        setShowNotepad(!showNotepad);
        setShowCV(false);
        setShowExperience(false);
        setShowProjects(false);
        setShowSkills(false);
        setShowDegress(false);
    }

    const toggleTerminal = () => {
        setTerminalState(!terminalState);
    };

    return (
        <div className='flex flex-row '> 
            <div className='absolute bottom-2 w-full flex flex-row items-center justify-center align-center gap-2 min-[400px]:gap-4'>
                { !disabledTerminal ? (
                    <button className={`hidden top-panel-buttons w-[60px] h-[50px]  z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d]  lg:flex flex-row items-center justify-center align-middle gap-3 rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2 `}  onClick={toggleTerminal}>
                        <div className=''>
                            <i className="bx bxs-terminal bx-wiggle text-2xl" />
                        </div>
                    </button>
                ) : (
                    <div className={`hidden top-panel-buttons w-[60px] h-[50px] z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d]  lg:flex flex-row items-center justify-center align-middle gap-3 rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2 `}>
                        <div className='text-gray-400 text-[10px]'>
                            <i className="bx bxs-terminal bx-wiggle text-2xl" />
                        </div>
                    </div>
                )}
                
                { !disabledTerminal ? (
                    <button className={`top-panel-buttons w-[180px] flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}  >
                        <a
                            href="mailto:arnaumunozbarrera@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`top-panel-buttons w-[180px] flex flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center rounded-xl z-[1000] gap-2 text-base ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"} border-b-2 border-r-2`}
                            >
                            <Mail size={20} />
                            Connect with me
                        </a>
                    </button>
                ) : (
                    <div className={`top-panel-buttons w-[180px] flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                        <a
                            href="mailto:arnaumunozbarrera@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`top-panel-buttons w-[180px] flex flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center rounded-xl z-[1000] gap-2 text-base ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"} border-b-2 border-r-2`}
                            >
                            <Mail size={20} />
                            Connect with me
                        </a>
                    </div>
                )}

                { !disabledTerminal ? (
                    <button className={`top-panel-buttons w-[60px] h-[50px] flex flex-col bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                       <a href="https://linkedin.com/in/arnau-munoz-barrera" rel="noopener noreferrer" target="_blank" >
                            <Linkedin size={24}/>
                        </a>
                    </button>
                ) : (
                    <div className={`top-panel-buttons w-[60px] h-[50px] flex flex-col bottom-2 z-1 text-gray-300 text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                        <span href="https://linkedin.com/in/arnau-munoz-barrera" rel="noopener noreferrer" target="_blank" >
                            <Linkedin size={24}/>
                        </span>
                    </div>
                )}
                
                { !disabledTerminal ? (
                    <button className={`top-panel-buttons w-[60px] h-[50px] flex flex-col bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                        <a href="https://github.com/arnaumunozbarrera" rel="noopener noreferrer" target="_blank" className='flex flex-col items-center justify-center'>
                            <Github size={24} />
                        </a>
                    </button>
                ) : (
                    <div className={`top-panel-buttons w-[60px] h-[50px] flex flex-col bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                        <span href="https://github.com/arnaumunozbarrera" rel="noopener noreferrer" target="_blank" className='flex flex-col items-center justify-center text-gray-400 text-[10px]'>
                            <Github size={24} /> 
                        </span>
                    </div>
                )}
            </div>

            <div className={`flex flex-col items-start justify-between mt-[10%] md:mt-[2%] ml-6 text-[#fff] text-sm font-light gap-2`}>
                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/pdf.png")} className='w-8 h-8 mb-1' />
                        <span> actual CV</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleShowCV}>
                        <img src={require("../../assets/icons/pdf.png")} className='w-8 h-8 mb-1' />
                        <span> actual CV</span>
                    </button>
                )}

                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/job-experience.png")} className='w-10 h-10 mb-1' />
                        <span> experience</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleExperience}>
                        <img src={require("../../assets/icons/job-experience.png")} className='w-10 h-10 mb-1' />
                        <span>experience</span>
                    </button>
                )}

                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span> projects</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleProjects}>
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span> projects</span>
                    </button>
                )}

                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span> skills</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleSkills}>
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span> skills</span>
                    </button>
                )}

                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span > degrees</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleDegrees}>
                        <img src={require("../../assets/icons/folder.png")} className='w-10 h-10 mb-1' />
                        <span> degrees</span>
                    </button>
                )}

                { disabledTerminal ? (
                    <div className={`flex flex-col items-center rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} >
                        <img src={require("../../assets/icons/notepad.png")} className='w-10 h-10 mb-1' />
                        <span> about</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000] max-w-[100px] min-w-[100px]`} onClick={toggleAbout}>
                        <img src={require("../../assets/icons/notepad.png")} className='w-10 h-10 mb-1' />
                        <span> about</span>
                    </button>
                )}

                
                
                { showCV && (
                    <div className=' left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-col gap-4'>
                        { !appearClose ? (
                            <div className='w-full h-[7%] absolute top-0 opacity-0' onMouseEnter={() => setAppearClose(true)} onMouseLeave={() => setAppearClose(false)}> Close </div>
                        ) : (
                            <button className='bg-[#36343d] text-gray-400 hover:text-[#fff] text-xs px-1 py-1  rounded-full z-[10000] absolute top-2 ' onClick={toggleShowCV} onMouseLeave={() => setAppearClose(false)}>
                                <X size={14} className=''/>
                            </button>
                        )}
                        
                        {/* <div className='pdf-display left-0 w-full h-[660px] absolute top-0 mt-10 md:mt-20 z-[10000] flex items-center justify-center flex-col'> */}
                            <PDF className="pdf-display left-0 w-full h-[660px] absolute  z-[10000] flex items-center justify-center flex-col" url={require("../../assets/CV.pdf")}/>
                        {/* </div> */}
                    </div>
                )}

                {showExperience && (
                    <div className='px-[2%] left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-row gap-0'>
                        <JobTimeline setShowExperience={setShowExperience}/>
                    </div>
                )}

                {showProjects && (
                    <div className='px-[2%] left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-row gap-0'>
                        <WindowsExplorerProjects setShowProjects={setShowProjects}/>
                    </div>
                )}

                {showDegrees && (
                    <div className='px-[2%] left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-row gap-0'>
                        <WindowsExplorerDegrees setShowDegress={setShowDegress}/>
                    </div>
                )}

                {showSkills && (
                    <div className='px-[2%] left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-row gap-0'>
                        <WindowsExplorerSkills setShowSkills={setShowSkills}/>
                    </div>
                )}

                {showNotepad && (
                    <div className='px-[2%] left-0  w-full h-full absolute top-0 bg-white bg-opacity-20 z-[100000] flex items-center justify-center flex-row gap-0'>
                        <NotepadViewer
                            text={`I am a Computer Engineering student committed to improving interactions between people and technology. With skills in conflict resolution, I approach challenges collaboratively. Passionate about new technology and creating interactive visuals, I enjoy refining my creativity and transforming concepts into engaging digital experiences.
                            
I am eager to contribute Data Analytics related development with the intention of enhancing user experience & improve system performance. 

By the time I complete my degree, I will be looking forward to enrolling in a Master's program to further advance my expertise in Data Science development.`}
                        setShowNotepad={setShowNotepad}/>
                        
                    </div>
                )}
            </div>

            <div className={`flex flex-col items-start justify-between mt-[2%] text-[#fff] text-xs font-light `}>
                { !disabledTerminal && ( 
                    <div className="terminal-bg hidden lg:flex items-center w-[850px] justify-center ml-[2%] sm:ml-[2%] md:ml-[2%] lg:ml-[2%] xl:ml-[20%] "> 
                        <TerminalComponent terminalState={terminalState} onChangeState={handleTerminalStateChange}/>
                    </div>
                )}
            </div>
        </div>
    );
}