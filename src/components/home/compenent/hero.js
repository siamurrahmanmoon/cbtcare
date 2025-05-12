"use client";
import Image from "next/image";
// import HeroImage from "@/assets/image/HeroImage.svg";

// Icons
import FacebookIcon from "@/assets/icon/facebook.svg";
import PhoneIcon from "@/assets/icon/phone.svg";
import WatsappIcon from "@/assets/icon/watsapp.svg";
// import HeroButton from "@/assets/icon/herobutton.svg";

const HeroImage =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747079305/HeroImage_q38o24.svg";

const HeroButton =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747079727/herobutton_vbb5sj.svg";

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container justify-between items-center mx-auto min-[320px]:max-[1023px]:overflow-hidden">
        <div>
          {/* Hero Section */}
          <div className="mt-[10px] mb-[10px]">
            <div>
              <div className="w-[420px] h-[420px] lg:w-[390px] rounded-full bg-[#23B195] blur-[180px] absolute top-[140px] left-[180px] z-0 min-[320px]:max-[1023px]:right-[190px] min-[320px]:max-[1023px]:left-[0px] "></div>
              <div className="w-[320px] h-[320px] lg:w-[290px] rounded-full bg-[#23B195] blur-[180px] absolute top-[140px] right-[180px] z-0  "></div>
              <div className="w-[620px] h-[620px] lg:w-[90px] rounded-full bg-[#23B195] blur-[190px] absolute top-[360px] right-[655px] z-0"></div>
            </div>
            <div className="flex flex-row justify-between items-center min-[320px]:max-[1023px]:flex-col-reverse ">
              <div className="flex-row lg:basis-3/5 xl:basis-2/5 justify-center items-center z-10">
                <div className="mt-[70px] min-[320px]:max-[1023px]:mt-[70px]">
                  <div>
                    <h1 className="text-[45px] font-poppins font-bold">
                      মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
                    </h1>
                  </div>
                  <div>
                    <p className="text-[16px] lg:text-[15px] lg:w-[95%] w-[80%] font-poppins font-normal text-secondary mt-[10px]">
                      CBT Care একটি উদ্ভাবনী কমিউনিটি-বেসড প্রতিষ্ঠান, যার
                      লক্ষ্য হলো মানসিক স্বাস্থ্যকে শারীরিক স্বাস্থ্যের সমান
                      গুরুত্বে প্রতিষ্ঠিত করা - শহর কিংবা গ্রাম – আমরা সব
                      জায়গায় মানসিক ও শারীরিক স্বাস্থ্যসেবা পৌঁছে দিচ্ছি -
                      পাশাপাশি আমরা কাজ করছি মানুষকে মানসিক সুস্থতার বিষয়ে
                      সচেতন করতে এবং সামাজিক কুসংস্কার দূর করতে।
                    </p>
                  </div>
                </div>
                <div className="mt-[40px]">
                  <div>
                    <div className="text-[50px] text-secondary mb-[-20px] font-inter font-bold">
                      ২২+
                    </div>
                  </div>
                  <div>
                    <div className="text-[30px] text-secondary font-inter font-bold">
                      বছরের অভিজ্ঞতা
                    </div>
                  </div>
                </div>
                {/* Social Icons */}
                <div>
                  <div className="flex flex-row gap-[20px] justify-start items-center mt-[10px] ">
                    <div
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/cbtcare.net",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={FacebookIcon}
                        alt="Facebook Icon"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                      />
                    </div>
                    <div onClick={() => window.open("tel:+8801716093998")}>
                      <Image
                        src={PhoneIcon}
                        alt="Phone Icon"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                      />
                    </div>
                    <div onClick={() => window.open("tel:+8801716093998")}>
                      <Image
                        src={WatsappIcon}
                        alt="Facebook Icon"
                        width={50}
                        height={50}
                        className="hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Image */}
              <div className="flex flex-col justify-center items-end lg:basis-2/5 xl:basis-3/5 z-10 min-[320px]:max-[1023px]:hidden ">
                <div className="w-[490px] h-auto z-10 min-[320px]:max-[1023px]:w-full ">
                  <div>
                    <Image
                      src={HeroImage}
                      alt="Hero Image"
                      width={490}
                      height={490}
                      className="h-full w-full"
                    />
                  </div>
                </div>
                {/* Hero Button */}
                <div
                  onClick={() => window.open("tel:+8801716093998")}
                  className="flex justify-center items-center mt-[-20px] group min-[320px]:max-[1023px]:hidden "
                >
                  <Image
                    src={HeroButton}
                    alt="Hero Button"
                    width={420}
                    height={100}
                    className="mr-[50px] z-10 group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
