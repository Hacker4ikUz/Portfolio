import { BsTelegram, BsInstagram, BsGithub } from "react-icons/bs";

export function Footer() {
    return (
        <footer>
            <div className="socials">
                <a href="https://t.me/Haker4ik"><BsTelegram /></a>
                <a href="https://instagram.com/_hacker4ik"><BsInstagram /></a>
                <a href="https://github.com/Hacker4ikUz"><BsGithub /></a>
            </div>
            <p>Copyright © 2023 - All Right Reserved. <br />
                Designed by <b>Hacker4ik</b> </p>
        </footer>
    )
}