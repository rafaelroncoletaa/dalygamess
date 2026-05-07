import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black px-2">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src={logoImg}
              alt="Logo do site Daly Games"
              quality={100} // Carrega com a qualidade máxima
              priority // Dá prioridade para o carregamento da imagem
              className="w-full"
            />
          </Link>

          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:block justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={34} color="#475569"></LiaGamepadSolid>
          </Link>
        </div>
      </div>
    </header>
  );
}
