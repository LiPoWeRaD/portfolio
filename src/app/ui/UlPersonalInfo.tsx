import { useState } from "react";
import Ficon from "../svg/ficon";
import FolderBlue from "../svg/folderblue";
import FolderFiolet from "../svg/folderFiolet";
import FolderStandart from "../svg/folderStandart";


interface UlPersonalInfoProps {
    setNamePage: (page: "personal-info" | "hobbies" | "courses" | "university") => void;
  }


  const UlPersonalInfo = ({ setNamePage }: UlPersonalInfoProps) => {
    const [bio, setBio] = useState(false);
    const [info, setInfo] = useState(false);
    const [education, setEducation] = useState(false);


    return (
        <ul className="pl-4 flex flex-col gap-y-1 border-b border-[#1E2D3D]">
            <li>
                <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setBio(!bio)}>
                    <p className={`text-[#607B96] ${bio ? "rotate-90" : "rotate-0"}`}>&#62;</p>
                    <FolderStandart />    
                    <p>bio</p>
                </button>
            </li>
            {bio && 
                <li>
                    <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setNamePage("personal-info")}>
                        <p className="text-transparent">&#62;</p>
                        <Ficon />
                        <p className="">personal-info</p>
                    </button>
                </li>
            }
            <li>
                <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setInfo(!info)}>
                    <p className={`text-[#607B96] ${info ? "rotate-90" : "rotate-0"}`}>&#62;</p>
                    <FolderBlue />
                    <p>interests</p>
                </button>
            </li>
            {info &&
                <li>
                    <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setNamePage("hobbies")}>
                        <p className="text-transparent">&#62;</p>
                        <Ficon />
                        <p>hobbies</p>
                    </button>
                </li>
            }
            <li>
                <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setEducation(!education)}>
                    <p className={`text-[#607B96] ${education ? "rotate-90" : "rotate-0"}`}>&#62;</p>
                    <FolderFiolet />
                    <p>education</p>
                </button>
            </li>
            {education &&
            <>
                <li>
                    <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setNamePage("courses")}>
                        <p className="text-transparent">&#62;</p>
                        <Ficon /> 
                        <p>courses</p>
                    </button>
                </li>
                <li>
                    <button className="flex items-center gap-x-2 cursor-pointer" onClick={() => setNamePage("university")}>
                        <p className="text-transparent">&#62;</p>
                        <Ficon />
                        <p>university</p>
                    </button>
                </li>
            </>
            }
        </ul>
    )
}

export default UlPersonalInfo