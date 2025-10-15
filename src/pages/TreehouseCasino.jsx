
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import "../css/TreehouseCasino.css"

import TreehouseCasinoLogin from "../img/Treehouse/TreehouseCasinoLogin.png";
import TreehouseMain from "../img/Treehouse/TreehouseMain.png";
import TreehouseProfile from "../img/Treehouse/TreehouseProfile.png";
import TreehousePlanted from "../img/Treehouse/TreehousePlanted.png";

export default function TreehouseCasino() {
    const navigate = useNavigate();
    return (
        <>
            <div className="treehouse">
                <FaArrowLeftLong
                    className="back-arrow"
                    onClick={() => navigate("/portfolio")}
                    style={{ cursor: "pointer" }}
                />
                <h1>Online Casino</h1>
                <h3>Small School Project</h3>

                <div className="treehouse">
                    <div className="treehouse-main">
                        <div className="treehouse-img-container">
                            <img
                                src={TreehouseCasinoLogin}
                                alt="TreehouseCasinoLogin"
                                style={{ width: "100%", height: "auto", borderRadius: "25px" }}
                            />
                        </div>
                        <div className="treehouse-main-text-container">
                            <h1>Treehouse Casino</h1>
                            <h3>
                                Treehouse Casino is a creative web project built as part
                                of a school assignment where we had complete freedom to design
                                any kind of website. I chose to create a casino-inspired
                                platform with an environmental twist — a place where fun meets
                                sustainability.
                            </h3>

                            <br></br>

                            <h1>Concept</h1>
                            <h3>
                                Unlike a traditional gambling site focused purely on profit,
                                Treehouse Casino redirects its earnings toward planting real
                                trees. The idea behind the project is to transform something often
                                seen as wasteful into something eco-positive and meaningful.
                            </h3>
                        </div>
                    </div>
                    <div className="treehouse-sub-text-container">
                        <div className="treehouse-info">
                            <h1>Design & Aesthetics</h1>
                            <h3>
                                The website’s design reflects its nature-driven mission. Instead
                                of flashy casino lights, the interface embraces a forest-inspired
                                aesthetic — with earthy tones, soft greens, and wooden textures that
                                create a calm and natural atmosphere. The goal was to make the casino
                                feel like a cozy treehouse in the woods, not a neon-lit betting room.
                            </h3>
                        </div>
                        <div className="treehouse-info-img-container">
                            <img
                                src={TreehouseMain}
                                alt="TreehouseProfile"
                                style={{ width: "100%", height: "auto", borderRadius: "25px" }}
                            />
                        </div>
                    </div>
                    <div className="treehouse-last-text-container">
                        <div className="treehouse-info">
                            <h1>User Experience</h1>
                            <h3>
                                Each player has a personal profile page where they can see the number of
                                trees they’ve helped plant through their gameplay. This progress system turns
                                ordinary gaming into a visible, rewarding contribution to the planet. The design
                                encourages users to feel a sense of purpose and connection with nature while
                                having fun.
                            </h3>
                            <br></br>
                            <h1>Purpose</h1>
                            <h3>
                                Treehouse Casino was designed not just as a technical web project, but as a
                                statement about responsible design — proving that entertainment platforms can
                                be creative, engaging, and environmentally conscious at the same time.
                            </h3>
                        </div>
                        <div className="treehouse-img-container-two">
                            <img
                                src={TreehousePlanted}
                                alt="TreehousePlanted"
                                style={{ width: "100%", height: "auto", borderRadius: "25px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}