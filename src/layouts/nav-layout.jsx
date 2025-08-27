import * as React from 'react';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function NavLayout ()  {
    const [mode, setMode] = useState("normal");
    
    const toggleMode = () => {
        setMode(mode === "normal" ? "dark" : "normal");
    }

    return (
        <div className='nav-col flex flex-col max-w-fit fixed right-0 top-0 m-4 items-center justify-center gap-4 z-50'>
            <button onClick={toggleMode}>
                {mode === "normal" && (
                    <Sun color={"white"} size={20}  />
                )}
                {mode === "dark" && (
                    <Moon color={"white"} size={20}/>
                )}
            </button>
            <nav className="nav-list flex flex-col bg-[#1f2937e6] max-w-fit px-3 py-4 right-0 bottom-1/3 fixed z-50 gap-4 text-gray-600 dark:text-gray-200 text-xs rounded-l-lg border-1 border-[#e5e7eb]">  
                <ul className="items-center flex flex-col gap-4">
                    <li><a href="/experience" className="hover:text-blue-500 dark:hover:text-blue-500">Experience</a></li>
                    <li><a href="/skills" className="hover:text-blue-500 dark:hover:text-blue-500">Skills</a></li>
                    <li><a href="/projects" className="hover:text-blue-500 dark:hover:text-blue-500">Projects</a></li>
                    <li><a href="/about" className="hover:text-blue-500 dark:hover:text-blue-500">About me</a></li>
                    <li><a href="/contact" className="hover:text-blue-500 dark:hover:text-blue-500">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};