"use client";
import Image from "next/image";

// Image
import HeroImage from "@/assets/image/HeroImage.svg";

export default function Section3() {
  return (
    <div>
      <section className="container justify-center items-center mx-auto mb-[80px]">
        {/* Section 2 */}
        <div className="flex flex-row justify-center items-center gap-5 ">
          {/* Grid 1 */}
          <div>
            <div className="flex flex-col justify-center items-center z-10">
              <div className="lg:w-[430px] xl:w-[614px] h-auto z-10 ">
                <div>
                  <Image
                    src={HeroImage}
                    alt="Hero Image"
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid 1 end */}
          {/* Grid 2 */}
          <div>
            <div className="flex-row justify-center items-center z-10">
              <div>
                <div>
                  <h1 className="text-[40px] font-poppins font-bold">
                    মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
                  </h1>
                </div>
                <div>
                  <p className="text-[14px] w-[90%] font-poppins font-normal text-secondary mt-[10px]">
                    CBT CARE মানসিক স্বাস্থ্য চিকিৎসায় ২২ বছরেরও অধিক সময়ের
                    চিকিৎসা ও পূনর্বাসন বিষয়ে অভিজ্ঞতা নিয়ে, আপনাকে সহযোগীতার
                    জন্য একটি নিরাপদ ক্ষেত্র তৈরী করে রেখেছে যা আপনাকে একটি
                    সুস্থ মন এবং একটি উজ্জ্বল ভবিষ্যতের দিকে এগিয়ে নিয়ে যেতে
                    একজন যোদ্ধা হিসেবে তৈরী হতে সাহায্য করবে।
                  </p>
                </div>
              </div>
              <div className="mt-[40px]">
                <button className="bg-[#C0E9DB] text-[#0F4433] font-poppins font-bold text-[15px] py-[15px] px-[30px] rounded-[60px]">
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </button>
              </div>
            </div>
          </div>
          {/* Grid 2 end */}
        </div>
        {/* Section 2 End */}
      </section>
    </div>
  );
}
