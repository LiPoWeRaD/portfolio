"use client"

import { useState } from "react";
import Hobbies_Icon from "../svg/hobbies-icon";
import Personal_Info_Icon from "../svg/personal-info-icon";
import Professional_Info_Icon from "../svg/professional-info-icon";
import AboutMe from "../components/aboutme";
import Tire from "../svg/tire";
import CodeSnippet from "../components/codesnippet";
import CodeSnippet2 from "../components/codesnippet2";
import UlPersonalInfo from "../ui/UlPersonalInfo";
import ULContacts from "../ui/ULContacts";
import Hobbies from "../components/hobbies";
import University from "../components/university";
import Courses from "../components/courses";
import Cross from "../svg/cross";

// rotate-90
// rotate-0
const About = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpeninfo, setIsOpeninfo] = useState(false);
  const [namePage, setNamePage] = useState('personal-info');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickCross = () => {
    setIsOpeninfo(false);
  };

  return (
    <div className="grid grid-rows-[auto_1fr] h-full">

      <main className="grid grid-cols-1 xl:grid-cols-[50px_0.346fr_1fr_20px_1fr_21px] min-h-[calc(100vh-64px)] xl:min-h-[calc(100vh-115px)] bg-[#011627] text-white">
        {/* Левая панель с иконками (только на десктопе) */}
        <div className="hidden xl:flex flex-col gap-y-4 items-center border-r border-[#1E2D3D] p-2">
          <Professional_Info_Icon />
          <Personal_Info_Icon />
          <Hobbies_Icon />
        </div>

        {/* Основное содержимое */}
        <div className="col-span-1 xl:col-span-5 grid grid-rows-[auto_1fr] h-full">
          {/* Мобильное меню (только на мобильных) */}
          <div className="xl:hidden p-2 border-b border-[#1E2D3D]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-lg">{isMobileMenuOpen ? '×' : '☰'}</span>
              <span>Menu</span>
            </button>
          </div>

          {/* Десктопная верхняя навигация */}
          <div className="hidden xl:grid grid-cols-[0.346fr_1fr_20px_1fr_21px] border-b border-[#1E2D3D]">
            <div className="p-2 border-r border-[#1E2D3D]">
              <input 
                type="button" 
                value="personal-info" 
                className="cursor-pointer bg-transparent text-white"
                onClick={() => setIsOpen(!isOpen)} 
              />
            </div>
            {isOpeninfo && 
              <div className="flex justify-between items-center px-2 py-2 border-r border-[#1E2D3D] w-[200px]">
                <p>{namePage}</p>
                <button onClick={handleClickCross}>
                  <Cross />
                </button>
              </div>
            }
            <div></div>
          </div>

          {/* Основной контент */}
          <div className="grid grid-cols-1 xl:grid-cols-[0.346fr_1fr_20px_1fr_21px] h-full">
            {/* Мобильное меню (контент) */}
            {isMobileMenuOpen && (
              <div className="col-span-1 border-b border-[#1E2D3D] p-4 xl:hidden">
                <div className="mb-4">
                  <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-between items-center w-full py-2"
                  >
                    <span>personal-info</span>
                    <span>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <UlPersonalInfo setNamePage={setNamePage}  />
                  )}
                </div>
                <div>
                  <button 
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="flex justify-between items-center w-full py-2"
                  >
                    <span>contacts</span>
                    <span>{isOpen2 ? '−' : '+'}</span>
                  </button>
                  {isOpen2 && (
                    <div className="mt-2 ml-4">
                      <ULContacts />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Левая колонка (меню - только на десктопе) */}
            <div className="hidden xl:block border-r border-[#1E2D3D]">
              {isOpen && (
                <UlPersonalInfo setNamePage={setNamePage}  />
              )}
              <input 
                type="button" 
                value="contacts" 
                className="py-2 cursor-pointer bg-transparent text-white block ml-2"
                onClick={() => setIsOpen2(!isOpen2)} 
              />
              <div className="border-b border-[#1E2D3D]">
                {isOpen2 && <ULContacts />}
              </div>
            </div>

            {/* Центральная колонка */}
            <div className={`p-4 ${!isMobileMenuOpen && namePage !== "" ? 'xl:border-r border-[#1E2D3D]' : ''}`}>
              {namePage === "personal-info" && <AboutMe />}
              {namePage === "hobbies" && <Hobbies />}
              {namePage === "courses" && <Courses />}
              {namePage === "university" && <University />}
            </div>

            {/* Разделитель (только на десктопе) */}
            <div className="hidden xl:block border-r border-[#1E2D3D]">
              {isOpeninfo && <Tire />}
            </div>

            {/* Правая колонка (код) */}
            <div className="p-4 border-t xl:border-t-0 border-[#1E2D3D]">
                <p className="mb-4 text-[#607B96]">{"// Code snippet showcase:"}</p>
              <div className="flex flex-col gap-y-4">
                <CodeSnippet />
                <CodeSnippet2 />
              </div>
            </div>

            {/* Правый разделитель (только на десктопе) */}
            <div className="hidden xl:block border-l border-[#1E2D3D]">
              <Tire />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;