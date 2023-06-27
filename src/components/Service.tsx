import { BsCodeSlash } from 'react-icons/bs';
import { FaRobot } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md'


export function Service() {
    return (
        <div className="service" id='service'>
            <h2>My Service</h2>
            <div className="boxes">
                <div className="box">
                    <b><BsCodeSlash /></b>
                    <h3>Frontend developing</h3>
                    <p>Web saytlarning frontend qismini dasturlash va serverga o'rnatish</p>
                </div>
                <div className="box">
                    <b><FaRobot /></b>
                    <h3>Telegram Bot</h3>
                    <p>Istalgan murakkablikdagi telegram botlarni va admin panelini yaratish
                        API bilan ishlash + API ga ulash</p>
                </div>
                <div className="box">
                    <b><MdDesignServices /></b>
                    <h3>Graphic Design</h3>
                    <p>Biznesingiz uchun logotype, brandbook va grafik dizayn</p>
                </div>
            </div>
        </div>
    )
}