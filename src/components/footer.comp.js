import Image from "next/image";

// Site Logo
import Logo from "@/assets/image/cbtcare_logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="container mx-auto mt-[20px]">
        <div className="flex flex-col justify-center items-center py-4 min-[320px]:max-[1023px]:w-full w-[100%]">
          <Image
            src={Logo}
            alt="Logo"
            className="
            min-[320px]:max-[1023px]:w-[30%]
            md:w-[25%]
            lg:w-[20%]
            xl:w-[15%]
            h-auto"
          />
          <div className="text-center py-4">
            <p className="text-sm text-center text-white mt-[-15px]">
              © 2023 CBT Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
