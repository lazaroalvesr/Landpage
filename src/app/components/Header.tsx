"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {

  const pathname = usePathname()
  const [ativaMenu, setAtivaMenu] = useState(false);

  function toggle() {
    setAtivaMenu((ativaMenu) => !ativaMenu);
  }

  function handleItemClick() {
    setAtivaMenu(false);
  }

  return (
    <div className="">
      <header className="pb-3 lg:max-w-6xl lg:m-auto mt-4 flex lg:items-center lg:justify-between ">
        <div className="flex lg:justify-evenly items-center ">
          <div className="flex lg:mt-9 ml-2 lg:ml-0">
            <Link href="/" className="flex items-center lg:w-80 w-32">
              <Image
                src="/img/icone10.png"
                alt="Icone Money"
                width={100}
                height={12}
              />
              <p className="pl-2 text-2xl font-semibold whitespace-nowrap">Arruda Bombas</p>
            </Link>
            <div className="lg:hidden absolute right-5 top-7">
              <button onClick={() => toggle()} >
                {ativaMenu ? <IoCloseSharp size={24} color="black" /> : <CiMenuFries size={24} color="black" />}
              </button>
            </div>
          </div>
          <div className="lg:ml-80 -ml-4 pl-4 items-center pt-6 relative">
            <ul className={`lg:flex gap-4 lg:static lg:h-auto ${ativaMenu ? 'absolute bg-white -ml-32 left-0 w-[420px] md:w-[840px] text-center top-20 h-96 pt-32 -mt-4 flex-col z-50' : "h-0 overflow-hidden"}`}>
              <li className="text-3xl lg:text-sm text-gray-900 font-semibold">
                <Link href={'/'} className={`link ${pathname === '/' ? 'active underline' : ''}`} onClick={handleItemClick}>
                  Home
                </Link>
              </li>
              <li className="text-3xl lg:text-sm text-gray-900  font-semibold">
                <Link href={'/NossosModelos'} className={`link ${pathname === '/NossosModelos' ? 'active underline' : ''}`} onClick={handleItemClick}>
                  Nossos Modelos
                </Link>
              </li>
              <li className="text-3xl lg:text-sm text-gray-900 font-semibold">
                <Link href={'/NossosClientes'} className={`link ${pathname === '/SobreNos' ? 'active underline' : ''}`} onClick={handleItemClick}>
                  Nossos Clientes
                </Link>
              </li>
              <li className="text-3xl lg:text-sm text-gray-900 font-semibold">
                <Link href="/SobreNos" className={`link ${pathname === '/SobreNos' ? 'active underline' : ''}`} onClick={handleItemClick}>
                  Sobre Nós
                </Link>
              </li>
              <li className="text-3xl lg:text-sm text-gray-900 font-semibold">
                <Link href={'/FaleConosco'} className={`link ${pathname === '/FaleConosco' ? 'active underline' : ''}`} onClick={handleItemClick}>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
