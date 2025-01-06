import Image from "next/image";

// Site Logo
import Logo from "@/assets/image/cbtcare_logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="container mx-auto mt-[20px]">
        <div className="flex flex-row justify-center items-center py-4">
          <Image src={Logo} alt="Logo" width={140} height={90} />
          <div className="text-center py-4">
            <p className="text-sm text-center text-white pl-5 pt-2">
              © 2023 CBT Care. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
