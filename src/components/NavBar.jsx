import React from 'react';

// Import CSS
import '../css/NavBar.css'

// Import Icons
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function NavBar() {
    const [isDarkMode, setIsDarkMode] = React.useState(true);

    const toggleTheme = () => {
        const current = document.documentElement.getAttribute("data-theme");
        document.documentElement.setAttribute(
            "data-theme",
            current === "dark" ? "light" : "dark",
            setIsDarkMode(!isDarkMode)
        );
    };

    return (
        <>
            {/* NavBar Section */}
            <div className='spacer'>
                <div className="navbar">
                    {/* Logo and Links */}
                    <h2 className="navbar-logo">Ms<span className='highlight'>.</span></h2>
                    <div className="navbar-links">
                        <a
                            href="https://www.linkedin.com/in/mathias-schweigl-a34237388/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linked-in"
                        >
                            <TbBrandLinkedin size="36px" />
                        </a>
                        <a
                            href="mailto:schweiglmathias@gmail.com"
                            className="mail"
                        >
                            <MdOutlineEmail size="36px" />
                        </a>
                        <div className='navbar-darkmode'>
                            <button onClick={toggleTheme}>
                                {isDarkMode ? <MdDarkMode size="36px" /> : <MdOutlineDarkMode size="36px" />}
                            </button>
                        </div>
                    </div>

                </div>
                <div className='line'></div>
            </div>
        </>
    )
}