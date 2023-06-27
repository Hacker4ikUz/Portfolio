import { BsTelegram, BsInstagram, BsGithub } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';

export function Home() {
    return (
        <div className="home" id="home">
            <h3>welcome to my website</h3>
            <TypeAnimation
                sequence={[
                "I'm Salomov Suxrob",
                1000,
                "I'm Frontend Developer",
                1000,
                "I'm Graphic Designer",
                1000,
                "I'm Telegram bot Master",]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                // style={{ fontSize: '4em' }}
            />
            <br />
            <div className="socials">
                <a href="https://t.me/Haker4ik"><BsTelegram /></a>
                <a href="https://instagram.com/_hacker4ik"><BsInstagram /></a>
                <a href="https://github.com/Hacker4ikUz"><BsGithub /></a>
            </div>
            <div className="buttons">
                <button><a href="#portfolio">View Portfolio</a></button>
                <button><a href="#contact">Hire Me</a></button>
            </div>
        </div>
    )
}