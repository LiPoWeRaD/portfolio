import Github from "../svg/github"
import Telegram from "../svg/telegram"
import VK from "../svg/vk"


const Footer = () => {
    return (
        <footer className="text-quinary fill-quinary stroke-quinary mt-auto">
            <nav className="items-center border border-[#1E2D3D]">
                <ul className="flex flex-col sm:flex-row h-auto sm:h-[50px]">
                {/* Первая строка (мобильная) */}
                <li className="flex items-center justify-between sm:justify-start px-[24px] py-[10px] sm:pl-[24px] sm:pr-[82px] sm:py-[5px] border-b sm:border-b-0 sm:border-l border-[#1E2D3D]">
                    <span>find me in:</span>
                    <div className="flex sm:hidden gap-x-[15px]">
                    <a target="_blank" href="https://vk.com/lipowerad"><VK /></a>
                    <a target="_blank" href="https://t.me/lipowerad"><Telegram /></a>
                    </div>
                </li>

                {/* Соцсети (десктоп) */}
                <li className="hidden sm:flex items-center px-[24px] py-[5px] border-x border-[#1E2D3D]">
                    <a target="_blank" href="https://vk.com/lipowerad"><VK /></a>
                </li>
                <li className="hidden sm:flex items-center px-[24px] py-[5px] border-r border-[#1E2D3D]">
                    <a target="_blank" href="https://t.me/lipowerad"><Telegram /></a>
                </li>

                {/* Пустое пространство */}
                <li className="hidden sm:block grow px-[24px] py-[5px] border-r border-[#1E2D3D] text-transparent">
                    none
                </li>

                {/* GitHub (вторая строка на мобиле) */}
                <li className="flex items-center justify-between px-[24px] py-[10px] sm:py-[5px] border-t sm:border-t-0 border-[#1E2D3D]">
                    <a 
                    className="flex justify-center items-center gap-x-[5px] text-sm sm:text-base" 
                    target="_blank" 
                    href="https://github.com/lipowerad"
                    >
                    @lipowerad
                    <span className="hidden sm:inline"><Github /></span>
                    </a>
                    <span className="sm:hidden">
                    <Github />
                    </span>
                </li>
                </ul>
            </nav>
            </footer>
    )
}

export default Footer