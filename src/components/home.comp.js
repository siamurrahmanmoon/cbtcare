"use client";
import Image from "next/image";
import Logo from "@/assets/image/cbtcare_logo.svg";
import HeroImage from "@/assets/image/HeroImage.svg";
export default function HomeComp() {
  return (
    <section>
      <div className="lg:max-[2500px]:w-[1280px] pl-10 pr-10 justify-center items-center mx-auto">
        <header className="mt-[40px]">
          <div>
            <Image src={Logo} alt="Logo" width={160} height={120} />
          </div>
        </header>
        <div className="mt-[40px] mb-[40px] ">
          <div className="grid grid-cols-2 gap-2 ">
            <div className="flex-row justify-center items-center">
              <div className="pr-[50px]">
                <div>
                  <h1 className="text-[60px] font-poppins font-bold">
                    মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
                  </h1>
                </div>
                <div>
                  <p className="text-[20px] font-poppins font-normal mt-[10px]">
                    CBT Care একটি উদ্ভাবনী কমিউনিটি-বেসড প্রতিষ্ঠান, যার লক্ষ্য
                    হলো মানসিক স্বাস্থ্যকে শারীরিক স্বাস্থ্যের সমান গুরুত্বে
                    প্রতিষ্ঠিত করা - শহর কিংবা গ্রাম – আমরা সব জায়গায় মানসিক ও
                    শারীরিক স্বাস্থ্যসেবা পৌঁছে দিচ্ছি - পাশাপাশি আমরা কাজ করছি
                    মানুষকে মানসিক সুস্থতার বিষয়ে সচেতন করতে এবং সামাজিক
                    কুসংস্কার দূর করতে।
                  </p>
                </div>
              </div>
              <div className="mt-[40px]">
                <div>
                  <div className="text-[130px] font-inter font-bold">২২+</div>
                </div>
                <div>
                  <div className="text-[45px] font-inter font-bold">
                    বছরের অভিজ্ঞতা
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-canter">
              <div className="bg-[#C0E9DB] w-[514px] h-[514px] rounded-full ">
                <div className="relative top-[44%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                  <Image
                    src={HeroImage}
                    alt="Hero Image"
                    width={514}
                    height={514}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
