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
            <p className="text-sm text-center text-white mt-[5px]">
              ডুফা সেন্টার, বাড়ী নং-৯ (৫ম তলা), রোড- ২/২, ব্লক- এল, বনানী,
              ঢাকা-১২১৩
            </p>
            <div className="text-sm text-center text-white mt-[5px]">
              <div className="flex flex-row justify-center items-center gap-2">
                <p>ফোন: ০১৭১৬০৯৩৯৯৮</p>
                <p>ইমেইল: cbctcare2002@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
