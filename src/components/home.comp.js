"use client";
import Image from "next/image";
import Logo from "@/assets/image/cbtcare_logo.svg";
import HeroImage from "@/assets/image/HeroImage.svg";
export default function HomeComp() {
  return (
    <section className="max-container pl-40 pr-40 justify-center items-center mx-auto z-10">
      <div>
        <header className="mt-[20px] z-10">
          <div>
            <Image src={Logo} alt="Logo" width={120} height={120} />
          </div>
        </header>
        <div className="mt-[10px] mb-[10px]">
          <div>
            <div className="w-[320px] h-[320px] rounded-full bg-[#23B195] blur-[140px] absolute top-[140px] left-[180px] z-0"></div>
            <div className="w-[320px] h-[320px] rounded-full bg-[#23B195] blur-[140px] absolute top-[140px] right-[180px] z-0"></div>
            <div className="w-[420px] h-[420px] rounded-full bg-[#23B195] blur-[190px] absolute top-[360px] right-[655px] z-0"></div>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <div className="flex-row justify-center items-center z-10">
              <div className="pr-[100px]">
                <div>
                  <h1 className="text-[45px] font-poppins font-bold">
                    মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
                  </h1>
                </div>
                <div>
                  <p className="text-[14px] pr-[40px] font-poppins font-normal text-secondary mt-[10px]">
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
                  <div className="text-[100px] text-secondary mb-[-32px] font-inter font-bold">
                    ২২+
                  </div>
                </div>
                <div>
                  <div className="text-[40px] text-secondary font-inter font-bold">
                    বছরের অভিজ্ঞতা
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-canter">
              <div className="w-[614px] h-[614px] z-10 ">
                <div>
                  <Image
                    src={HeroImage}
                    alt="Hero Image"
                    width={614}
                    height={614}
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
