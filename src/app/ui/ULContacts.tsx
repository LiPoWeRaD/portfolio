import Mail from "../svg/mail"
import Phone from "../svg/phone"


const ULContacts = () => {
    return (
        <ul className="pl-4 flex flex-col gap-y-1">
            <li className="">
                <a className="flex items-center gap-x-2 cursor-pointer" href="mailto:limon98@list.ru">
                    <Mail />
                    <p>email</p>
                </a>
            </li>
            <li className="">
                <a className="flex items-center gap-x-2 cursor-pointer" href="tel:+7(911)340-32-07">
                    <Phone />
                    <p>telefone</p>
                </a>
            </li>
        </ul>
    )
}

export default ULContacts