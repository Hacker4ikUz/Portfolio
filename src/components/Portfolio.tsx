import axios from "axios"


export function Portfolio() {
    axios.get('https://hacker4ik.uz/data')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    return (
        <div className="portfolio" id="portfolio">
            <h2>Portfolio</h2>
            <div className="btns">
                <a href="https://t.me/bots_of_tg"><button>All</button></a>
                <a href="https://t.me/Haker4ik"><button>Web Sites</button></a>
                <a href="https://t.me/bots_of_tg"><button>TG Bots</button></a>
                <a href="https://t.me/LMPRODesign"><button>Designs</button></a>
            </div>
            <div className="pr">
                <a href="https://hdrezka.uz">
                    <img src="./images/hdrezka.jpg" alt="Kino Sayt" />
                </a>
                <a href="https://t.me/iVKTOPBot">
                    <img src="./images/vkm.jpg" alt="VKM BOT" />
                </a>
                <a href="https://t.me/NamozVaqtikuBot">
                    <img src="./images/namoz.jpg" alt="Namoz Vaqti" />
                </a>
                <a href="https://t.me/ZayavkachiUzbot">
                    <img src="./images/zayavka.jpg" alt="Zayavka qabul qiluvchi bot" />
                </a>
                <a href="https://t.me/StatusYasa_Bot">
                    <img src="./images/status.jpg" alt="Logo va status yasovchi bot" />
                </a>
                <a href="https://t.me/KinoKodlariBot">
                    <img src="./images/kino.jpg" alt="Kod orqali kino topuvchi bot" />
                </a>
                <a href="https://t.me/AllDownsBot">
                    <img src="./images/alldown.png" alt="YT TT INSTA Saver bot" />
                </a>
                <a href="https://t.me/uz_quronbot">
                    <img src="./images/quron.png" alt="Quron bot" />
                </a>
                {/* 3 */}
                <a href="https://t.me/Online_Tarjimon_OnlaynTarjimobot">
                    <img src="./images/tarjimon.jpg" alt="Google Tarjimon" />
                </a>
                <a href="https://t.me/uzbeknik_bot">
                    <img src="./images/nick.jpg" alt="Nick yasovchi va t.d ..." />
                </a>
                <a href="https://t.me/Multik_Rasmga_Isimlar_bot">
                    <img src="./images/ism.jpg" alt="Ismingizga rasm yasovchi bot" />
                </a>
                <a href="https://t.me/eski_zayafka_qabul_qiluvchibot">
                    <img src="./images/eskizayavka.jpg" alt="Eski zayavka qabul qiluvchi bot" />
                </a>
            </div>
            <div className="view_all">
                <a href="https://t.me/Bots_OF_TG">
                    <button>View All</button>
                </a>
            </div>
        </div>
    )
}