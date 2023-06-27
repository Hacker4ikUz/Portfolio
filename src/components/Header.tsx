import { MdMenu } from "react-icons/md"
import { useState } from "react"

export function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header id="header">
            <div className="left">
                <a href="https://hacker4ik.uz/">
                    <h2>Hacker<span>4ik</span></h2>
                </a>
            </div>
            <div className="right">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#service">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
                <a  className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                    <i><MdMenu color="#fff" size={23}/></i>
                </a>
                <div className={isNavExpanded ? "dropdown expanded" : "dropdown"}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="dropdown">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#service">Service</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>
        </header>
            )
    }
