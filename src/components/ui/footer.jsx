import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
 
import '../../styles/footer.css';
import '../../styles/app.css';

export default function Footer(props) {

    return (
        <footer className="footer-bar bottom-0 w-full text-xs flex flex-row">
            
            {/* <div className='features-bkg w-full h-full bg-[rgba(54,52,61,0.5)] absolute top-0 backdrop-blur-xl'>
                <div className='features-blur-bkg bg-[rgba(115,100,158,0.6)] hover:bg-[rgba(115,100,158,0.8)] features-blur w-[80%] h-[80%] right-[10%] top-[12%] rounded-lg opacity-100 absolute z-[10000] gap-0 max-h-[520px] lg:max-h-[350px] '>
                    <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 sm:ml-[10%] gap-10 mt-5 ml-[20%] lg:ml-[8%] xl:ml-[0%] justify-center align-middle text-gray-300 text-xs font-light '>
                        <button className='features-div w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px] rounded-lg features-card' onClick={() => setFeature("experience")} >
                            <div className='hover:text-gray-100 w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px]'>
                                <div className='features-header w-[180px] h-[20px] sm:h-[20px] sm:w-[190px] lg:w-[240px]  rounded-t-lg'> <span className='header-title'>Experience</span></div>
                                <div className='experience w-[180px] h-[60px] sm:h-[120px] lg:w-[240px] sm:w-[190px] z-[10000] rounded-b-lg'></div>
                            </div>
                        </button>
                        <button className='features-div w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px] bg-[#4a4a4a] rounded-lg features-card' onClick={() => setFeature("projects")}>
                            <div className='hover:text-gray-200 w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px]'>
                                <div className='features-header w-[180px] h-[20px] sm:h-[20px] sm:w-[190px] lg:w-[240px] rounded-t-lg'> Projects</div>
                                <div className='projects w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px] z-[10000] rounded-b-lg'></div>
                            </div>
                        </button>
                        <button className='features-div w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px] bg-[#4a4a4a] rounded-lg features-card' onClick={() => setFeature("skills")}>
                            <div className='hover:text-gray-100 w-[180px] sm:w-[190px] lg:w-[240px] h-[60px] sm:h-[120px]'>
                                <div className='features-header w-[180px] h-[20px] sm:h-[20px] sm:w-[190px] lg:w-[240px] rounded-t-lg'> Skills</div>
                                <div className='skills w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[240px] z-[10000] rounded-b-lg'></div>
                            </div>
                        </button>
                        <button className='features-div w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[300px] lg:ml-[40%] bg-[#4a4a4a] rounded-lg features-card' onClick={() => setFeature("certifications")}>
                            <div className='hover:text-gray-100 w-[180px] h-[60px] sm:h-[120px] lg:w-[300px]'>
                                <div className='features-header w-[180px] h-[20px] sm:h-[20px] sm:w-[190px] lg:w-[300px] rounded-t-lg'> Certifications</div>
                                <div className='certifications w-[180px] h-[60px] sm:h-[120px] sm:w-[190px] lg:w-[300px] z-[10000] rounded-b-lg'></div>
                            </div>
                        </button>
                        <button className='features-div w-[180px] h-[60px] sm:h-[120px] sm:w-[300px] sm:ml-[35%] lg:ml-[50%] bg-[#4a4a4a] rounded-lg features-card' onClick={() => setFeature("about")}>
                            <div className='hover:text-gray-100 w-[180px] h-[60px] sm:h-[120px] sm:w-[300px]'>
                                <div className='features-header w-[180px] h-[20px] sm:h-[20px] sm:w-[300px] rounded-t-lg'> About me</div>
                                <div className='about w-[180px] h-[60px] sm:h-[120px] sm:w-[300px] z-[10000] rounded-b-lg'></div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {feature === "experience" && (
                <div className='features-bkg w-full h-full absolute top-0 backdrop-blur-xl'>
                    <div className='features-blur-bkg  features-blur w-[80%] h-[80%] right-[10%] top-[12%] rounded-lg opacity-100 absolute z-[10000] gap-0 max-h-[520px] lg:max-h-[350px] '>
                        <button className='absolute mt-2 right-2 rounded-full'>
                            <X color="#ffffff" size={16} onClick={disableFeature} className='h-full w-full' />
                        </button>
                        
                        <div class="timeline-wrapper clearfix">
                            <div class="timeline-content-day">
                                <div class="timeline-line"></div>
                                <div class="timeline-content-item active" data-timeline="hour-8">
                                    <span>2020 - 2022</span>
                                    <div class="timeline-content-item-reveal">
                                        <span>Technological Baccalaureate</span>
                                    </div>
                                </div>
                                <div class="timeline-content-item active" data-timeline="hour-8"></div>
                                <div class="timeline-content-item active" data-timeline="hour-8"></div>
                                
                                <div class="timeline-content-item active" data-timeline="hour-8">
                                    <span>2022 - Current</span>
                                    <div class="timeline-content-item-reveal">
                                        <span>Computer Engineering Degree</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-wrapper-job clearfix bottom-[25%]">
                            <div class="timeline-content-day-job">
                                <div class="timeline-line-job"></div>
                                <div class="timeline-line-job-2 rotate-90"></div>
                                <div class="timeline-content-item-job active" data-timeline="hour-8">
                                    <span>February 2025 - June 2025</span>
                                    <div class="timeline-content-item-reveal-job ml-[50px]">
                                        <span>Energiot FullStack Developer Intern</span>
                                    </div>
                                </div>
                                <div class="timeline-content-item-job active" data-timeline="hour-8"></div>
                                <div class="timeline-content-item-job active" data-timeline="hour-8"></div>
                                
                                <div class="timeline-content-item-job active" data-timeline="hour-8">
                                    <span>June 2025 - Current</span>
                                    <div class="timeline-content-item-reveal-job">
                                        <span>Energiot FullStack Developer Intern</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {feature === "projects" && (
                <div></div>
            )}

            {feature === "skills" && (
                <div></div>
            )}

            {feature === "certifications" && (
                <div></div>
            )}

            {feature === "about" && (
                <div></div>
            )} */}
        </footer>
    );
}