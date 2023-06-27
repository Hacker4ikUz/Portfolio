import ProgressBar from "@ramonak/react-progress-bar";

export function Skilss() {
    return (
        <div className="Skills">
            <h2>My Skills</h2>
            <div className="mys">
                <div className="left">
                    <b>HTML5 & CSS3</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={100} />
                    <b>JavaScript</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={95} />
                    <b>Python</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={95} />
                    <b>PHP & MYSQL</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={85} />
                </div>
                <div className="right">
                    <b>React</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={80} />
                    <b>Telegram Bot</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={100} />
                    <b>Photoshop</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={100} />
                    <b>CorelDraw</b>
                    <ProgressBar  height="7px" labelAlignment="outside" bgColor="#FFC209" completed={90} />
                </div>
            </div>
        </div>
    )
}