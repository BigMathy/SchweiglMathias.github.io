
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import "../css/Schneggiessen.css"

import FoodRating from "../img/SchneggiEssen/FoodRating.png"
import FoodRatingMain from "../img/SchneggiEssen/FoodratingMain.png"

export default function SchneggiEssen() {
    const navigate = useNavigate();
    return (
        <>
            <div className="foodRating">
                <FaArrowLeftLong
                    className="back-arrow"
                    onClick={() => navigate("/portfolio")}
                    style={{ cursor: "pointer" }}
                />
                <h1>Food Ratin</h1>
                <h3>Website to rate food in Innsbruck</h3>

                <div className="foodRating-main">
                    <div className="foodRating-img-container">
                        <img
                            src={FoodRating}
                            alt="FoodratingMain"
                            style={{ width: "100%", height: "auto", borderRadius: "25px" }}
                        />
                    </div>
                    <div className="foodRating-main-text-container">
                        <h1>Overview</h1>
                        <h3>
                            Food Rating is a personal web project created to 
                            keep track of restaurants I’ve visited and record 
                            how my experiences were. It’s a simple, private 
                            platform where I can rate different places, add comments,
                             and reflect on the food and atmosphere.
                        </h3>
                        <br></br>
                        <h1>Concept</h1>
                        <h3>
                            The main goal of this project was to practice web design
                             and development while building something meaningful for 
                             myself. Instead of focusing on public reviews or community 
                             features, this site is designed purely for personal use — 
                             like a digital food diary.
                        </h3>
                    </div>
                </div>

                <div className="foodRating-sub-text-container">
                    <div className="foodRating-sub-text">
                        <h1>Features</h1>
                        <h3><span className="highlight-white">Star Rating System</span>:
                            Each restaurant can be rated from 1 to 5 stars in Food, Price 
                            and Location. Allowing quick feedback on the overall experience.
                        </h3>
                        <h3><span className="highlight-white">Personal Notes:</span>:
                            After visiting a restaurant, I can add comments describing what
                             I liked, what could be improved, and how the visit felt overall.
                        </h3>
                        <h3><span className="highlight-white">Restaurant Tracking</span>:
                            The site focuses on restaurants in Innsbruck, helping me keep a 
                            record of where I’ve eaten and which places I’d like to revisit.
                        </h3>
                        <br></br>
                        <h1>Design and Purpose</h1>
                        <h3>
                            The interface is clean and minimalistic, focusing on ease of use. 
                            The goal wasn’t to create a social platform, but rather to design 
                            a personal tool for reflection and improvement, both as a web developer
                             and as someone who enjoys exploring local food spots.
                        </h3>
                    </div>
                    <div className="foodRating-img-container-two">
                        <img 
                            src={FoodRatingMain} 
                            alt="FoodRating" 
                            style={{ width: "100%", height: "auto", borderRadius: "25px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}