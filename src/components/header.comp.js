"use client";
import Image from "next/image";

// Site Logo
import Logo from "@/assets/image/cbtcare_logo.svg";

export default function Header() {
  return (
    <div>
      <header className="container mx-auto mt-[20px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center">
            <div>
              <Image src={Logo} alt="Logo" width={140} height={90} />
            </div>
            <div className="pl-[50px] pt-[10px]">
              <ul className="flex flex-row justify-between items-center gap-5 text-center">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
          <div className="mt-[10px] text-[15px] bg-[#C0E9DB] text-[#0F4433] font-medium px-[25px] py-[8px] rounded-[100px]">
            <button>Contact </button>
          </div>
        </div>
      </header>
    </div>
  );
}
