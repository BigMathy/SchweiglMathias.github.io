
import "../css/BentoBox.css"
import Skills from "./Skills"

import SchneggiEssen from "../img/SchneggiEssen.png"
import TreehouseCasino from "../img/TreehouseCasino.png"
export { TreehouseCasino };
import HydratePlus from "../img/Hydrate+.png"


import { useNavigate } from "react-router-dom";

function BentoBox() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="title">Schweigl Mathias</h1>
            <h3 className="sub-title">Web designer and <span className='highlight'>Devloper</span></h3>
            <div className='bento-grid'>
                <div className="box" style={{ gridArea: 'box-1' }}>
                    <div className="box1">
                        <h1>Crafting Digital <span className='highlight'>Experiences</span> </h1>
                        <h3>I design and build, functional websites.</h3>
                    </div>
                </div>
                <div className="box" style={{ gridArea: 'box-2' }}>
                    <div className="box2">
                        <h1>About me</h1>
                        <h3>I’ve been learning web design for about a year now, and I’m passionate about creating clean, user-friendly websites. My goal is to keep improving my skills so I can design impactful websites—whether for personal projects or business use.</h3>
                        <div className="box2-location">
                            <h3>Location:</h3>
                            <h3 style={{ color: 'white' }}>Innsbruck, AUT</h3>
                        </div>
                        <div className="box2-status">
                            <h3>Status:</h3>
                            <div className="box2-dot"></div>
                            <h3 style={{ color: 'white' }}>Available for work</h3>
                        </div>
                    </div>
                </div>
                <div className="box" style={{ gridArea: 'box-3' }}>
                    <div className="box3">
                        <h1>Skills</h1>
                        <div className="skills-list">
                            <Skills skill="HTML" />
                            <Skills skill="CSS" />
                            <Skills skill="React" />
                            <Skills skill="Figma" />
                        </div>
                    </div>
                </div>
                <div className="box" style={{ gridArea: 'box-4' }}>
                    <div className="box4">
                        <div className="box4-projects">
                            <h1 style={{color: "rgba(31, 97, 210, 1)"}}>3</h1>
                            <h3>Projects Completed</h3>
                        </div>
                        <div className="box4-years">
                            <h1 style={{color: "rgba(31, 97, 210, 1)"}}>1+</h1>
                            <h3>Years of Experience</h3>
                        </div>
                    </div>
                </div>
                <div className="box" 
                    style={{ gridArea: 'box-5', cursor: "pointer" }} 
                    onClick={() => navigate("/portfolio/Hydrate+")}>

                    <div className="box5">
                        <img src={HydratePlus} />
                        <div className="box5-gradient">
                            <h1>Hydrate App</h1>
                            <h3>Water Drinking App</h3>
                        </div>
                    </div>
                </div>
                <div className="box" 
                    style={{ gridArea: 'box-6', cursor: "pointer" }} 
                    onClick={() => navigate("/portfolio/TreehouseCasino")}>
                    <div className="box6">
                        <img src={TreehouseCasino} alt="TreehousCasino" />
                        <div className="box6-gradient">
                            <h1>Online Casino</h1>
                            <h3>Small School Project</h3>
                        </div>
                    </div>
                </div>
                <div className="box" style={{ gridArea: 'box-7' }}>
                    <div className="box7">
                        <h1>More Work</h1>
                        <h3>Comming soon...</h3>
                    </div>
                </div>
                <div className="box" 
                    style={{ gridArea: 'box-8', cursor: "pointer" }}  
                    onClick={() => navigate("/portfolio/SchneggiEssen")}>
                    <div className="box8">
                        <img src={SchneggiEssen} alt="Schneggiessen" />
                        <div className="box8-gradient">
                            <h1>Food Rating</h1>
                            <h3>Website to rate food in Innsbruck</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BentoBox