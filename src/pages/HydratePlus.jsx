import HydrateMain from "../img/Hydrate/HydrateMain.png";
import HydrateImgOne from "../img/Hydrate/HydrateOne.png";
import HydrateImgTwo from "../img/Hydrate/HydrateTwo.png";
import "../css/HydratePlus.css";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function HydratePlus() {
  const navigate = useNavigate();

  return (
    <div className="hydrate">
      <FaArrowLeftLong
        className="back-arrow"
        onClick={() => navigate("/portfolio")}
        style={{ cursor: "pointer" }}
      />
      <h1>Hydrate App</h1>
      <h3>Water Drinking App</h3>
      <div className="hydrate-main">
        <div className="hydrate-img-container">
          <img
            src={HydrateMain}
            alt="HydrateMain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className="hydrate-main-text-container">
          <h1>Hydrate+</h1>
          <h3>
            Hydrate+ is a simple and effective water tracking app designed to
            help users stay hydrated throughout the day. The app allows you to
            easily monitor your daily water intake and make sure you reach your
            personalized hydration goal.
          </h3>
        </div>
      </div>

      <div className="hydrate-sub-text-container">
        <div className="hydrate-tech-stack">
          <h1>Key Features</h1>
          <h3>
            <span className="highlight-white">Personalized Hydration Goals</span>: Your daily water goal is automatically
            calculated based on your height and weight, ensuring the
            recommendation fits your body’s needs.</h3>
          <h3>
            <span className="highlight-white">Quick Add Buttons</span>: With three preset buttons, you can instantly log
            common drink amounts, making it effortless to keep your log up to date.
          </h3>
          <h3>
            <span className="highlight-white">Custom Input</span>: Need to record a specific amount? Use the + button to
            add any custom quantity of water you’ve consumed.
          </h3>
          <h3>
            <span className="highlight-white">Simple and Clean Design</span>: The user interface is built with simplicity
            and clarity in mind — no distractions, just your goal, your progress,
            and your daily total.
          </h3>
          <br></br>
          <h1>Why Hydrate+</h1>
          <h3>
            Many people forget to drink enough water, especially during busy days.
            Hydrate+ provides a gentle, easy way to stay mindful about hydration —
            helping you feel more energetic, focused, and healthy.
          </h3>
        </div>

        <div className="hydrate-img-container-two">
          <img src={HydrateImgOne} alt="HydrateImgOne" style={{ width: "100%", height: "auto" }} />
          <img src={HydrateImgTwo} alt="HydrateImgTwo" style={{ width: "100%", height: "auto" }}/>
        </div>
      </div>
    </div>
  );
}