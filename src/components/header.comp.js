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
            <div className="w-[160px] h-auto min-[320px]:max-[1023px]:w-[120px] ">
              <Image src={Logo} alt="Logo" />
            </div>
            {/* <div className="pl-[50px] pt-[10px]">
              <ul className="flex flex-row justify-between items-center gap-5 text-center min-[320px]:max-[1023px]:hidden">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
              </ul>
            </div> */}
          </div>
          <div
            onClick={() => window.open("tel:+8801716093998")}
            className="min-[320px]:max-[1023px]:text-[12px] font-bold text-[15px] bg-[#C0E9DB] text-[#0F4433] px-[25px] min-[320px]:max-[1023px]:px-[20px] py-[8px] rounded-[100px] "
          >
            <button> অ্যাপয়েন্টমেন্ট বুক করুন</button>
          </div>
        </div>
      </header>
    </div>
  );
}
