'use client'; // Добавляем директиву для использования клиентских компонентов

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Используем usePathname вместо useRouter

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Получаем текущий путь

  // Определяем активный стиль
  const styleActive = "px-[31px] py-[17px] border border-[#1E2D3D] border-b-2 border-b-[#FEA55F]";

  // Проверяем размер экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="border-b border-[#1E2D3D]">
      {/* Десктопная версия */}
      <div className="hidden lg:grid grid-cols-[50px_0.346fr_1fr_20px_1fr_21px]">
        <div className="col-span-2 border-r border-[#1E2D3D] flex">
          <p className="px-[31px] py-[17px] border-r border-[#1E2D3D] w-full">Egor-Limonov</p>
        </div> 
        
        <ul className="col-span-4 grid grid-cols-[1fr_1fr_1fr_2fr]">
          <li className={`px-[31px] py-[17px] border-r border-[#1E2D3D] ${pathname === "/" ? styleActive : ""}`}>
            <Link href="/">_hello</Link>
          </li>
          <li className={`px-[31px] py-[17px] border-r border-[#1E2D3D] ${pathname === "/about" ? styleActive : ""}`}>
            <Link href="/about">_about-me</Link>
          </li>
          <li className={`px-[31px] py-[17px] border-r border-[#1E2D3D] ${pathname === "/projects" ? styleActive : ""}`}>
            <Link href="/projects">_projects</Link>
          </li>
          <li className={`px-[31px] py-[17px] border-l border-[#1E2D3D] ml-auto ${pathname === "/contacts" ? styleActive : ""}`}>
            <Link href="/contacts">_contact-me</Link>
          </li>
        </ul>
      </div>

      {/* Мобильная версия */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <p className="px-4 py-3">Egor-Limonov</p>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white my-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#011627] border-t border-[#1E2D3D]">
          <ul className="flex flex-col">
            <li className={`px-6 py-4 border-b border-[#1E2D3D] ${pathname === "/" ? styleActive : ""}`}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>_hello</Link>
            </li>
            <li className={`px-6 py-4 border-b border-[#1E2D3D] ${pathname === "/about" ? styleActive : ""}`}>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>_about-me</Link>
            </li>
            <li className={`px-6 py-4 border-b border-[#1E2D3D] ${pathname === "/projects" ? styleActive : ""}`}>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>_projects</Link>
            </li>
            <li className={`px-6 py-4 ${pathname === "/contacts" ? styleActive : ""}`}>
              <Link href="/contacts" onClick={() => setIsMenuOpen(false)}>_contact-me</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;