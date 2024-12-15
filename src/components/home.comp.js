"use client";
import Image from "next/image";
import Logo from "@/assets/image/cbtcare_logo.svg";
export default function HomeComp() {
  return (
    <div>
      <header className="mt-[20px]">
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={130}
            height={100}
            className="pl-[20px]"
          />
        </div>
      </header>
      <div className="flex">
        <div className="w-[56%] ml-[20px] mr-[19px]">
          <h1 className="text-[50px] font-poppins font-bold text-left mt-[110px] leading-[60px] ">
            মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
          </h1>
          <p className="text-[18px] font-poppins font-light text-left mt-[20px] leading-[30px]">
            CBT Care একটি উদ্ভাবনী কমিউনিটি-বেসড প্রতিষ্ঠান, যার লক্ষ্য হলো
            মানসিক স্বাস্থ্যকে শারীরিক স্বাস্থ্যের সমান গুরুত্বে প্রতিষ্ঠিত করা
            - শহর কিংবা গ্রাম – আমরা সব জায়গায় মানসিক ও শারীরিক স্বাস্থ্যসেবা
            পৌঁছে দিচ্ছি - পাশাপাশি আমরা কাজ করছি মানুষকে মানসিক সুস্থতার বিষয়ে
            সচেতন করতে এবং সামাজিক কুসংস্কার দূর করতে।
          </p>
        </div>
        <div className="w-[44%]"></div>
      </div>
    </div>
  );
}
