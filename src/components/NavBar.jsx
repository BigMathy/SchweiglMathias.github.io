import '../css/NavBar.css'
import { MdOutlineEmail } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";

export default function NavBar() {
    return (
        <>
            <div className='spacer'>
                <div className="navbar">
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
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </>
    )
}