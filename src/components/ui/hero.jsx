import React, { useEffect, useState, useRef } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { FolderClosed, Sun, Moon, X, CircleUserRound, FileBadge2, Linkedin, Github, Music, Pause, Play, ChevronLeft, ChevronRight, Languages, DatabaseZap, Wrench, FolderGit2, SplinePointer, BookUser, Waypoints, University, CodeXml, FolderCode  } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconCloudDatabases } from './icon-cloud-databases';
import { IconCloudLanguages } from './icon-cloud-languages';
import { IconCloudTools } from './icon-cloud-tools';
import { Projects } from './projects';
import { GlowCard } from "../common/spotlight-card";

import PDF from '../common/pdf'
import gsap from 'gsap';
import EmailForm from '../common/email-form';

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
                    response = '· UAB - UNIVERSITY (2022 - 2026): Computer Engineering Degree\n· Looking to Collaborate In Open Source Projects (2025 - Current)\n· Energiot | Computer Engineer (Feb 2025 - June 2025): Full Stack Developer\n· Energiot | Computer Engineer (June 2025 - Current)';
                    break;
                case 'sections -projects':
                    setWelcomeMessage("");
                    response = ' · Please, visit the "Projects" by clicking on the "Projects" button in the main menu to see my latest work.';
                    break;
                case 'sections -skills':
                    setWelcomeMessage("");
                    response = '· Languages: React, JavaScript, Node.js, Python, C++, PHP, Java, React Native\n· Databases | Auth : Supabase, Oracle, MongoDB, PostgreSQL, Prisma, Upstash, Clerk, Virtual Box, Nginx\n· Tools: Git, Asana, Confluence, Slack, Figma, Docker, Bitbucket, Jira';
                    break;
                case 'sections -certifications':
                    setWelcomeMessage("");
                    response = '· Introduction to Machine Learning - McKinsey & Company\n· English Certificate C1 - Cambridge (2024)\n· The McKinsey Way - McKinsey & Company (2025)';
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
            {/* <h1 className='text-white text-2xl mb-2'>Welcome to Arnau's Website</h1> */}
            <div className={`bg-[#36343d] h-[20px] w-full rounded-t-lg flex flex-row px-2 gap-2  items-center ${!props.terminalState ? "hidden" : ""} `}>
                <button onClick={closeTerminal}> <div className='rounded-full size-2 bg-[#da6e66]'></div> </button>
                <button onClick={minimizeTerminal}> <div className='rounded-full size-2 bg-[#f5c555]'></div> </button>
                {/* <button onClick={toggleScreenMode}> <div className='rounded-full size-2 bg-[#69c365]'></div> </button> */}

                <div className='w-full flex flex-row items-center justify-center align-middle gap-2 '>
                    <FolderClosed size={12} color={"gray"} />
                    <div className=' text-gray-300 text-xs pb-1'>arnaumunozbarrera | Computer Engineer</div>
                </div>

                <div className='flex flex-row items-center justify-end px-1 gap-3'>
                    <button onClick={toggleTerminalMode}>{terminalMode === "dark" ? <Sun size={12} className='text-[#c09d4c] hover:text-[#f5c555]'/> : <Moon size={12}  className='text-gray-300 hover:text-[#fff]'/>}</button>
                </div>
            </div>

            <Terminal welcomeMessage={welcomeMessage} aria-readonly={readOnlyState} prompt="C:\arnau-dev>" className={`terminal-mac h-[350px] w-full rounded-lg rounded-t-none ${terminalMode === "dark" ? "bg-[#1e1f1f] text-white": "bg-[#cdcbcb] text-black"}  text-xs font-mono whitespace-pre-wrap ${welcomeMessage ? "text-center" : ""}`} 
            />

        </div>
    );
};

export default function Hero(props) {
    const [showCV, setShowCV] = useState(false);
    const [terminalState, setTerminalState] = useState(true);
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [appearClose, setAppearClose] = useState(false);
    // const [spotifyModalOpen, setSpotifyModalOpen] = useState(false);
    const [spotifyState, setSpotifyState] = useState(false);
    const [disabledTerminal, setDisabledTerminal] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activePreview, setActivePreview] = useState("");
    const [featureModal, setFeatureModal] = useState("");
    const [endParticles, setEndParticles] = useState(false);
    const [renderFullScreenPDF, setRenderFullScreenPDF] = useState(false);
    const [PDFElement, setPDFElement] = useState("");

    let neonLine = document.querySelector('.neon-line') || null;
    let neonLineX = document.querySelector('.neon-line-x') || null;
    
    function createParticle() {
        const rect = neonLine.getBoundingClientRect();
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Position particle near the bottom of the neon line
        particle.style.left = rect.left + 'px';
        particle.style.top = rect.top + 150 + 'px';

        document.body.appendChild(particle);

        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    if (neonLine !== null) {
        if(!endParticles) {
            setInterval(createParticle, 40);
        }

        neonLine.addEventListener('animationend', () => {
            neonLine.style.height = "100%"; 
            setEndParticles(true);
        });

        neonLineX.addEventListener('animationend', () => {
            neonLineX.style.width = "450px"; 
            neonLineX.style.left = "64.7%"; 
            setEndParticles(true);
        });
    }

    const toggleFeatureModal = (feature) => {
        setActivePreview("");
        setFeatureModal(feature);
        setDisabledTerminal(true);
        // setSpotifyModalOpen(false);
        setContactModalOpen(false);
    }

    const displayPreview = (id) => {
        setActivePreview(id);
    };

    const handleTerminalStateChange = (state) => {
        setTerminalState(state); // estado: true (visible), false (cerrado/minimizado)
    };

    const toggleShowCV = () => {
        // setSpotifyModalOpen(false);
        setContactModalOpen(false);
        setShowCV(!showCV);
    };

    const toggleTerminal = () => {
        setTerminalState(!terminalState);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const toggleContactModal = () => {
        // if(!contactModalOpen) {
        //     setSpotifyModalOpen(false);
        // }
        setContactModalOpen(!contactModalOpen);
    };

    // const toggleSpotifyModal = () => {
    //     if(!spotifyModalOpen) {
    //         setContactModalOpen(false);
    //     }
    //     setSpotifyModalOpen(!spotifyModalOpen);
    // };

    const toggleSpotifyState = () => {
        if (!audioRef.current) return;

        if (spotifyState) {
            audioRef.current.pause();
        } 
        else {
            audioRef.current.play();
        }

        setSpotifyState((prev) => !prev);
    };

    const renderCertificateFullScreen = (url) => {
        // console.log("Element: ", url);
        setRenderFullScreenPDF(true);
        setPDFElement(url);
    }

    const artists = ["Linkin Park", "Avantasia", "WarCry", "Ghost", "Avenged Sevenfold"];
    const songs = ["What I've done", "Dying For An Angel", "Luchar y Avanzar", "He Is", "Hail To The King"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSongChange = (movement) => {
    if (movement === "next") {
      setCurrentIndex((prev) =>
        prev + 1 < artists.length ? prev + 1 : 0 // loop back to start
      );
    } else if (movement === "previous") {
      setCurrentIndex((prev) =>
        prev - 1 >= 0 ? prev - 1 : artists.length - 1 // loop back to last
      );
    }

    setSpotifyState(true);
  };

    return (
        <div> 
            { !disabledTerminal ? (
                <button className={`hidden top-panel-buttons w-[60px] h-[50px] top-32 right-[5rem] z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] absolute lg:flex flex-row items-center justify-center align-middle gap-3 rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2 `}  onClick={toggleTerminal}>
                    <div className=''>
                        <i className="bx bxs-terminal bx-wiggle text-2xl" />
                    </div>
                </button>
            ) : (
                <div className={`hidden top-panel-buttons w-[60px] h-[50px] top-32 right-[5rem] z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] absolute lg:flex flex-row items-center justify-center align-middle gap-3 rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2 `}>
                    <div className='text-gray-400 text-[10px]'>
                        <i className="bx bxs-terminal bx-wiggle text-2xl" />
                    </div>
                </div>
            )}

            { featureModal !== "" && (
                <div className={`bg-[#fafafa25] absolute z-[10000] w-full h-full `}> 
                    <button className='absolute top-4 right-10 text-gray-300 hover:text-[#fff] z-[10000] bg-[#36343d] px-4 py-2  rounded-lg border-gray-300 hover:border-[#518eff] border-b-2 border-r-2 ' onClick={() => {
                            setFeatureModal("");
                            setDisabledTerminal(false);
                            setEndParticles(false);
                            setPDFElement("");
                            setRenderFullScreenPDF(false);
                        }} >
                        Go Home
                    </button>

                    {featureModal === "experience" && (
                        <div className="neon-wrapper">
                            <div className="block neon-line"></div>
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}  
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1.5 }}    
                                 
                                className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-[200px] h-[80px] sm:w-[250px] sm:h-[90px] md:h-[110px] lg:h-[140px] lg:w-[240px] xl:w-[200px] xl:h-[120px] rounded-lg absolute top-[10%] left-[22%] sm:left-[35%] xl:top-[40%] xl:left-[43.5%] z-[1000] flex flex-col gap-5 justify-center items-center"
                                >
                                <GlowCard className='w-full h-full flex flex-col gap-2 justify-center items-center align-middle'>
                                    <p className='flex flex-row gap-4 '>
                                        <University />
                                        UAB - University
                                    </p>
                                    <p className=''>
                                        Computer Engineering
                                    </p>
                                </GlowCard >
                                    <p className=''>
                                    2022 - 2026
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}  
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 2 }}    
                                 
                                className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-[200px] h-[90px] sm:w-[250px] md:h-[110px] lg:h-[140px] lg:w-[240px] xl:w-[300px] xl:h-[110px] rounded-lg absolute top-[25%] left-[22%] sm:left-[35%] sm:top-[28%] xl:top-[43.5%] xl:left-[65%] z-[1000] flex flex-col gap-5 justify-center items-center"
                                >
                                <GlowCard className='w-full h-full flex flex-col gap-2 justify-center items-center align-middle'>
                                    <p className='flex flex-row gap-4 '>
                                        <CodeXml />
                                       Looking to Collaborate In
                                    </p>
                                    <p className=''>
                                        Open Source Projects
                                    </p>
                                </GlowCard >
                                    <p className=''>
                                    2025 - Current 
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 0 }}  
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 4 }}    
                                 
                                className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-[220px] xl:w-[300px] h-[90px] md:h-[110px] sm:w-[250px] lg:h-[140px] lg:w-[240px] xl:h-[110px] rounded-lg absolute top-[70%] left-[18%] sm:left-[35%] xl:bottom-[41.5%] xl:left-[16.5%] z-[1000] flex flex-col gap-5 justify-center items-center"
                                >
                                <GlowCard className='w-full h-full flex flex-col gap-2 justify-center items-center align-middle'>
                                    <p className='flex flex-row gap-4 '>
                                        <FolderCode />
                                       Energiot | Computer Engineer
                                    </p>
                                    <p className=''>
                                        Full Stack Developer
                                    </p>
                                </GlowCard >
                                    <p className=''>
                                    Feb 2025 - June 2025 
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}  
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 4.5 }}    
                                 
                                className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-[220px] xl:w-[300px] h-[90px] md:h-[110px] lg:h-[140px] lg:w-[240px] xl:h-[110px] sm:w-[250px]  rounded-lg absolute top-[47%] left-[18%] sm:left-[35%] xl:top-[15.5%] xl:left-[16.5%] z-[1000] flex flex-col gap-5 justify-center items-center"
                                >
                                <GlowCard className='w-full h-full flex flex-col gap-2 justify-center items-center align-middle'>
                                    <p className='flex flex-row gap-4 '>
                                        <FolderCode />
                                       Energiot | Computer Engineer
                                    </p>
                                    <p className=''>
                                        Full Stack Developer
                                    </p>
                                </GlowCard >
                                    <p className=''>
                                    June 2025 - Current
                                </p>
                            </motion.div>
                            <div className="hidden xl:block neon-line-x"></div>
                            <div className="hidden xl:block neon-line-x2"></div>
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}  
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5 }}    
                                 
                                >
                                <div className="hidden xl:block neon-line-y"></div>
                            </motion.div>
                        </div>
                    )}

                    {featureModal === "projects" && (
                        // <div class="flex flex-row rounded-lg bg-[#36343d] w-[70%] h-full max-h-[500px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        //     <Projects />
                        // </div>
                        <div className='flex flex-col gap-2 justify-center items-center py-10'>
                            <div className="rainbow-button-wrapper ">
                                <div className="rainbow-button">
                                My Latest Work
                                </div>
                            </div>
                            <GlowCard className='flex flex-row rounded-lg bg-[#36343d] w-[70%] h-[500px] max-h-[500px]'>
                                <Projects />
                            </GlowCard >
                        </div>
                    )}

                    {featureModal === "skills" && (
                        <div className='mt-[1%] ml-[2%] xl:ml-[4%] xl:mt-[7%]'>
                            <div className='gap-x-4 gap-y-4 grid grid-rows-3 gird-cols-1 xl:grid-rows-1 xl:grid-cols-3 text-[#fff] text-lg md:text-2xl '>
                                <GlowCard className='w-[300px] h-[180px] col-start-1 row-start-1 sm:w-[480px] md:w-[550px] xl:w-[420px] xl:h-[400px] skills-feature-modals'>
                                <p className='flex flex-row gap-4 items-center'>
                                    <Languages />
                                    Languages
                                </p>
                                    <IconCloudLanguages/> 
                                </GlowCard >

                                <GlowCard className='w-[300px] h-[180px] col-start-1 row-start-2 sm:w-[480px] md:w-[550px] xl:col-start-2 xl:row-start-1 xl:w-[420px] xl:h-[400px] skills-feature-modals'>
                                <p className='flex flex-row gap-4 items-center'>
                                    <DatabaseZap /> 
                                    Databases
                                </p>
                                    <IconCloudDatabases/>  
                                </GlowCard >

                                <GlowCard className='w-[300px] h-[180px] col-start-1 row-start-3 sm:w-[480px] md:w-[550px] xl:col-start-3 xl:row-start-1 xl:w-[420px] xl:h-[400px] skills-feature-modals'>
                                <p className='flex flex-row gap-4 items-center'>
                                    <Wrench />
                                    Tools
                                </p>
                                    <IconCloudTools/>
                                </GlowCard >
                            </div>
                        </div>
                    )}

                    {featureModal === "certifications" && PDFElement === "" && !renderFullScreenPDF && (
                        <div className="w-full h-full flex justify-center items-start ">
                            <div className="hidden md:grid grid-rows-[4rem_auto_auto] grid-cols-3 mt-2 md:mt-0 px-5 py-10 lg:py-20 md:gap-x-6 w-fit place-items-center ">
                                <div className="rainbow-button-wrapper ">
                                    <div className="rainbow-button">
                                    Programming Certificates & Degrees
                                    </div>
                                </div>
                                <div className="rainbow-button-wrapper">
                                    <div className="rainbow-button">
                                    Languages
                                    </div>
                                </div>
                                <div className="rainbow-button-wrapper">
                                    <div className="rainbow-button">
                                    Of Interest
                                    </div>
                                </div>
                                <div className="row-span-2 row-start-2">
                                    <button onClick={() => renderCertificateFullScreen("IntroToML.png")} className="relative group max-h-[15rem] max-w-[15rem] 2xl:max-h-[15rem] 2xl:max-w-[25rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/IntroToML.png")} alt="" className='max-h-[15rem] max-w-[15rem] 2xl:max-h-[15rem] 2xl:max-w-[25rem] object-cover object-center rounded-lg ' />
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-lg font-semibold">
                                            View on full screen
                                        </div>  
                                    </button>
                                </div>
                                <div className="row-span-2 row-start-2">
                                    <button onClick={() => renderCertificateFullScreen("EnglishCertificate.png")} className="relative group 2xl:max-h-[22rem] 2xl:max-w-[22rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/EnglishCertificate.png")} alt="" className='2xl:max-h-[22rem] 2xl:max-w-[22rem] object-cover object-center rounded-lg'/>
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-lg font-semibold">
                                            View on full screen
                                        </div> 
                                    </button>
                                </div>
                                <div className="row-span-2 row-start-2">
                                    <button onClick={() => renderCertificateFullScreen("McKinseyProgram.jpeg")} className="relative group 2xl:max-h-[22rem] 2xl:max-w-[28rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/McKinseyProgram.jpeg")} alt="" className='2xl:max-h-[22rem] 2xl:max-w-[28rem] object-cover object-center rounded-lg'/>
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-lg font-semibold">
                                            View on full screen
                                        </div> 
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col md:hidden items-center gap-2 py-2">
                                <div className='flex flex-col gap-2 items-center'> 
                                    <div className="rainbow-button-wrapper">
                                        <div className="rainbow-button">
                                        Programming Certificates & Degrees
                                        </div>
                                    </div>
                                    <button onClick={() => renderCertificateFullScreen("IntroToML.png")} className="relative group max-h-[7rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/IntroToML.png")} alt="" className='max-h-[7rem] h-full w-auto rounded-lg'/>
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-sm font-semibold">
                                            View on full screen
                                        </div>  
                                    </button>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <div className="rainbow-button-wrapper">
                                        <div className="rainbow-button">
                                        Languages
                                        </div>
                                    </div>
                                    <button onClick={() => renderCertificateFullScreen("EnglishCertificate.png")} className="relative group max-h-[10rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/EnglishCertificate.png")} alt="" className='max-h-[10rem] h-full w-auto rounded-lg'/>
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-sm font-semibold">
                                            View on full screen
                                        </div>  
                                    </button>
                                </div>
                                <div className='flex flex-col gap-2 items-center'>
                                    <div className="rainbow-button-wrapper">
                                        <div className="rainbow-button">
                                        Of Interest
                                        </div>
                                    </div>
                                    <button onClick={() => renderCertificateFullScreen("McKinseyProgram.jpeg")} className="relative group max-h-[10rem] rounded-lg overflow-hidden">
                                        <img src={require("../../assets/certificates/McKinseyProgram.jpeg")} alt="" className='max-h-[10rem] h-full w-auto rounded-lg'/>
                                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-black text-sm font-semibold">
                                            View on full screen
                                        </div>  
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    { PDFElement !== "" && renderFullScreenPDF && (
                        <div className="w-full h-full flex flex-col items-center ">
                        { !appearClose ? (
                            <div className='w-full h-[7%] absolute top-0 opacity-0' onMouseEnter={() => setAppearClose(true)} onMouseLeave={() => setAppearClose(false)}> Close </div>
                        ) : (
                            <button className='bg-[#36343d] text-gray-400 hover:text-[#fff] text-xs px-1 py-1  rounded-full z-[10000] absolute top-2 ' onClick={() => {setPDFElement(""); setRenderFullScreenPDF(false);}} onMouseLeave={() => setAppearClose(false)}>
                                <X size={14} className=''/>
                            </button>
                        )}
                            <img className="py-20 max-h-[40rem] max-w-[80%] rounded-lg" src={require(`../../assets/certificates/${PDFElement}`)}/>
                        </div>
                    )}

                    {featureModal === "about" && (
                        <GlowCard className='flex flex-row rounded-lg bg-[#36343d] w-[70%] h-full max-h-[480px] md:max-h-[520px] lg:max-h-[540px]  xl:lg:max-h-[400px] absolute left-1/2 top-[40%] lg:top-[45%] transform -translate-x-1/2 -translate-y-1/2'>
                            <div className='font-normal flex flex-row  text-white text-sm lg:text-lg xl:text-xl'>
                                <div className='flex flex-col gap-4 text-justify px-2 py-5'>
                                    <span>
                                        I am a <span className='text-[#ffbe93]'>Computer Engineering </span> student committed to improving interactions between people and technology. With skills in conflict resolution, I approach challenges collaboratively. Passionate about new technology and creating interactive visuals, I enjoy refining my creativity and transforming concepts into engaging digital experiences.
                                    </span>
                                    <span>
                            
                                        <span className='text-[#ffbe93]'> I am eager to contribute Data Analytics related development </span> with the intention of enhancing user experience & improve system performance.
                                    </span>
                                    <span className='mt-6 '>
                                        By the time I complete my degree, I will be looking forward to enrolling in a Master's program to further advance my expertise in,<span className='text-[#eed920]'> Data Science </span> development.
                                    </span>
                                </div>

                                <img  src={require(`../../assets/me/Selfie.jpg`)} alt={""} class="m-5 order-1 object-cover hidden md:block md:w-64 h-auto px-1 py-5 md:order-2 rotate-3 lg:p-2 lg:w-80 max-h-[20rem] aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"/>
                            </div>
                        </GlowCard >
                    )}
                </div>
            )}

            {/* { spotifyModalOpen &&  (
                <motion.div
                initial={{ opacity: 0, y: 0 }}  
                animate={{ opacity: 1, y: 0 }}     
                transition={{ duration: 0.5 }}     
                className=""
                >
                    <div className={`spotify-modal spotify-shadow bg-[#36343d] rounder-lg hidden min-[300px]:block w-[200px] h-[260px]  sm:w-[200px] sm:h-[260px] lg:w-[200px] lg:h-[260px] xl:w-[200px] xl:h-[260px] z-100 absolute bottom-8 left-4 sm:left-[10%] md:left-[15%] sm:mb-[5%] md:mb-[5%] mb-[8%] xl:mb-0 lg:left-[5%] xl:ml-[10%] min-[1400px]:ml-[15%] p-2 rounded-lg border-[1.5px] border-gray-400 border-t-0 border-l-0 hover:border-[#5376b8] z-[100000] `}> 
                        <div className='flex flex-row w-[100%] justify-center items-center'>
                            <strong className='text-[#fff]'> What I Sound Like </strong>
                        </div>
                        <div className='flex flex-col items-center justify-between mt-2 mb-2'>

                            <img src={require(`../../assets/songs/covers/${artists[currentIndex]}.jpg`) } alt={""} className='w-[150px] h-[150px] rounded-lg'/>

                            <audio 
                                ref={audioRef} 
                                src={require(`../../assets/songs/audio/${songs[currentIndex]}.mp3`)} 
                                onLoadedMetadata={(e) => setDuration(e.target.duration)}  
                                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)} 
                                onLoadedData={() => {
                                    if (spotifyState) {
                                    audioRef.current.play();
                                    }
                                }}
                            />
                        </div>

                        <div className='flex flex-col items-center justify-between mt-2 mb-2 text-[#fff] text-xs font-light'>
                            <div className=''> 
                                 {artists[currentIndex]} - <span>{songs[currentIndex]}</span>
                            </div>
                        </div>

                        <div className="w-full h-[3px] bg-[#fff] rounded-full mt-2 mb-2 relative"
                            onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const clickX = e.clientX - rect.left;
                                const newTime = (clickX / rect.width) * duration;
                                audioRef.current.currentTime = newTime;
                            }}>
                            <div
                                className="h-full bg-[#ce70af] rounded-full"
                                style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                            ></div>
                        </div>


                        <div className='flex flex-row items-center justify-center gap-2 bottom-0 mt-2'>
                            <button className='z-1000 text-gray-300 hover:text-[#fff]' onClick={() => handleSongChange("previous")}>
                                <ChevronLeft size={18}/>
                            </button>
                            { spotifyState ? (
                                <button className='z-1000 text-gray-300 hover:text-[#fff]' onClick={toggleSpotifyState}>
                                    <Pause size={18}/>
                                </button>
                            ) : (
                                <button className='z-1000 text-gray-300 hover:text-[#fff]' onClick={toggleSpotifyState}>
                                    <Play size={18}/>
                                </button>
                            )}
                            <button className='z-1000 text-gray-300 hover:text-[#fff]' onClick={() => handleSongChange("next")}>
                                <ChevronRight size={18}/>
                            </button>
                        </div>
                    </div>
                </motion.div>
            )} */}

            <div className={`top-panel-buttons flex flex-col w-[140px] h-auto pb-4 pt-2 top-48 right-10 z-1 gap-4 text-gray-400  text-[10px] bg-[#36343d] absolute items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                <div className='grid grid-cols-2 grid-rows-2 items-center justify-center gap-x-4 gap-y-6 py-2'>
                    <button className='h-10 w-10 flex flex-col items-center hover:text-[#fff]' onMouseEnter={() => displayPreview("experience")} onMouseLeave={() => setActivePreview("")} onClick={() => toggleFeatureModal("experience")}>
                        <Waypoints size={60} className=''/>
                        <p className='text-xs font-semibold'>Experience</p>
                    </button>
                    <button className='h-10 w-10 flex flex-col items-center justify-center hover:text-[#fff]' onMouseEnter={() => displayPreview("projects")} onMouseLeave={() => setActivePreview("")} onClick={() => toggleFeatureModal("projects")}>
                        <FolderGit2 size={60}/>
                        <p className='text-xs font-semibold'>Projects</p>
                    </button>
                    <button className='h-10 w-10 flex flex-col items-center justify-center hover:text-[#fff]' onMouseEnter={() => displayPreview("skills")} onMouseLeave={() => setActivePreview("")} onClick={() => toggleFeatureModal("skills")}>
                        <SplinePointer size={60}/>
                        <p className='text-xs font-semibold'>Skills</p>
                    </button>
                    <button className='h-10 w-10 flex flex-col items-center justify-center hover:text-[#fff]' onMouseEnter={() => displayPreview("certifications")} onMouseLeave={() => setActivePreview("")} onClick={() => toggleFeatureModal("certifications")}>
                        <FileBadge2 size={60}/>
                        <p className='text-xs font-semibold'>Degrees</p>
                    </button>
                </div>
                    <button className='h-10 w-10 flex flex-col items-center justify-center hover:text-[#fff]' onMouseEnter={() => displayPreview("about")} onMouseLeave={() => setActivePreview("")} onClick={() => toggleFeatureModal("about")}>
                        <BookUser size={60}/>
                        <p className='text-xs font-semibold'>About</p>
                    </button>
                {/* {activePreview && (
                    <div className='h-[20px] w-[120px] bg-[#518eff] z-[10000] absolute rounded-sm text-white flex items-center justify-center text-2xs flex-col gap-y-2' onClick={() => toggleFeatureModal(`${activePreview.toLocaleLowerCase()}`)}>
                        {activePreview.toLocaleUpperCase()}
                    </div>
                )} */}
            </div>

            {/* <div
                className={`top-panel-buttons w-[60px] h-[50px] top-[25.5rem] right-[5rem] z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] absolute flex flex-row items-center justify-center align-middle gap-3 rounded-xl z-[1000] ${
                    !disabledTerminal
                    ? "border-gray-300 hover:border-[#518eff]"
                    : "border-gray-400"
                } border-b-2 border-r-2`}
                 onClick={disabledTerminal ? undefined : toggleDarkMode} 
                >
                {!disabledTerminal ? (
                    darkMode ? (
                    <button>
                        <Sun size={20} />
                    </button>
                    ) : (
                    <button>
                        <Moon size={20} />
                    </button>
                    )
                ) : darkMode ? (
                    <div className="text-gray-400 text-[10px]">
                    <Sun size={20} />
                    </div>
                ) : (
                    <div className="text-gray-400 text-[10px]">
                    <Moon size={20} />
                    </div>
                )}
            </div> */}


            <div className='absolute bottom-2 w-full flex flex-row items-center justify-center align-center gap-1 min-[400px]:gap-4'>

                {/* { !disabledTerminal ? (
                    <button className={`top-panel-buttons w-[60px] h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}  onClick={toggleSpotifyModal}>
                        <div className='ml-[14px] md:ml-[18px]'>
                            <Music size={20}/>
                        </div>
                    </button>
                ) : (
                    <div className={`top-panel-buttons w-[60px] flex-col h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}  >
                        <div className='text-gray-400 text-[10px] mt-3 ml-[14px] sm:ml-[18px] '>
                            <Music size={20}/>
                        </div>
                    </div>
                )} */}

                { !disabledTerminal ? (
                    <button className={`top-panel-buttons w-[250px] flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}  onClick={toggleContactModal}>
                        <div className='flex flex-row items-center justify-center w-full gap-2 text-base mt-0'>
                            <CircleUserRound size={20}/>
                            Connect with me
                        </div>
                    </button>
                ) : (
                    <div className={`top-panel-buttons w-[250px] flex-row h-[50px] bottom-2 z-1 text-gray-300 hover:text-[#fff] text-[10px] bg-[#36343d] items-center justify-center align-middle rounded-xl  z-[1000] ${!disabledTerminal ? "border-gray-300 hover:border-[#518eff]" : "border-gray-400"}  border-b-2 border-r-2`}>
                        <span className='text-gray-400 text-[10px] flex flex-row items-center justify-center w-full gap-2 text-base mt-3'>
                            <CircleUserRound size={20}/>
                            Connect with me
                        </span>
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
            

            <div className={`flex flex-col items-start justify-between mt-[2%] text-[#fff] text-xs font-light `}>
                { disabledTerminal ? (
                    <div className={`flex flex-col items-center left-0 ml-6 rounded-lg py-1.5 px-6 z-[1000]`} >
                        <img src={require("../../assets/icons/pdf.png")} className='w-8 h-8 mb-1' />
                        <span className='ml-1'> actual CV</span>
                    </div>
                ) :(
                    <button className={`flex flex-col items-center left-0 ml-6 hover:bg-white hover:bg-opacity-15 rounded-lg py-1.5 px-6 z-[1000]`} onClick={toggleShowCV}>
                        {/* <BsFiletypePdf size={30} color='black' /> */}
                        <img src={require("../../assets/icons/pdf.png")} className='w-8 h-8 mb-1' />
                        <span className='ml-1'> actual CV</span>
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
                        
                        <div className='pdf-display left-0 w-full h-[660px] absolute top-10 z-[10000] flex items-center justify-center flex-col gap-4'>
                            <PDF className="mt-20" url={require("../../assets/CV.pdf")}/>
                        </div>
                    </div>
                )}

                { !disabledTerminal && ( 
                    <div className="terminal-bg hidden lg:flex items-center w-[850px] justify-center ml-[2%] sm:ml-[2%] md:ml-[2%] lg:ml-[2%] xl:ml-[20%] "> 
                    {/* ml-52 */}
                        <TerminalComponent terminalState={terminalState} onChangeState={handleTerminalStateChange}/>
                    </div>
                )}
            </div>
            
            { contactModalOpen && (
                // <div className={`contact-modal bg-[#36343d] w-[150px] h-[80px] z-100 absolute bottom-16 left-[30.5%] sm:left-[35.5%] lg:left-[37.5%] xl:left-[42.5%] min-[1400px]:left-[43.5%] min-[1600px]:left-[45.5%] gap-y-2 flex flex-col p-2 rounded-lg border-[1.5px] border-gray-400 border-t-0 border-r-[1.5px] border-l-0 hover:border-[#5376b8] `}> 
                //     <button className='flex flex-row items-center justify-center w-[98%] text-gray-300 hover:text-[#fff] text-xs font-thin px-1 py-1  rounded-full top-2 border-gray-400 hover:border-[#ce70af] border-[1px] border-solid'>
                //       <a href="mailto:arnaumunozbarrera@gmail.com" className='flex flex-row items-center justify-center'> <Mails size={14} className='mr-1'/> Send me an email</a>
                //     </button>
                // </div>
                <motion.div
                initial={{ opacity: 0, y: 0 }}  
                animate={{ opacity: 1, y: 0 }}     
                transition={{ duration: 0.5 }}     
                className=""
                >
                 <EmailForm disabledTerminal={disabledTerminal}/>
                </motion.div>
            )}
        </div>
    );
}