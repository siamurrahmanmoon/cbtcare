"use client";
import Image from "next/image";
import Logo from "@/assets/image/cbtcare_logo.svg";
import HeroImage from "@/assets/image/HeroImage.svg";

// Icons
import FacebookIcon from "@/assets/icon/facebook.svg";
import PhoneIcon from "@/assets/icon/phone.svg";
import WatsappIcon from "@/assets/icon/watsapp.svg";
import HeroButton from "@/assets/icon/herobutton.svg";

// Gallery Images
import GalleryImage1 from "@/assets/photo/gallaryphoto1.jpg";

export default function HomeComp() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container justify-center items-center mx-auto">
        <div>
          {/* Header */}
          <header className="flex justify-center mt-[10px] z-10">
            <div>
              <Image src={Logo} alt="Logo" width={120} height={120} />
            </div>
          </header>
          {/* Hero Section */}
          <div className="mt-[10px] mb-[10px]">
            <div>
              <div className="w-[420px] h-[420px] rounded-full bg-[#23B195] blur-[180px] absolute top-[140px] left-[180px] z-0"></div>
              <div className="w-[320px] h-[320px] rounded-full bg-[#23B195] blur-[180px] absolute top-[140px] right-[180px] z-0"></div>
              <div className="w-[620px] h-[620px] rounded-full bg-[#23B195] blur-[190px] absolute top-[360px] right-[655px] z-0"></div>
            </div>
            <div className="flex flex-row justify-center items-center ">
              <div className="flex-row justify-center items-center z-10">
                <div className="mt-[70px]">
                  <div>
                    <h1 className="text-[45px] font-poppins font-bold">
                      মানসিক স্বাস্থ্যসেবা এখন সবার কাছে
                    </h1>
                  </div>
                  <div>
                    <p className="text-[16px] w-[80%] font-poppins font-normal text-secondary mt-[10px]">
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
                  <div className="flex flex-row gap-[20px] justify-start items-center mt-[5px]">
                    <div>
                      <Image
                        src={FacebookIcon}
                        alt="Facebook Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <Image
                        src={PhoneIcon}
                        alt="Facebook Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div>
                      <Image
                        src={WatsappIcon}
                        alt="Facebook Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero Image */}
              <div className="flex flex-col z-10">
                <div className="w-[614px] h-[614px] z-10 ">
                  <div>
                    <Image
                      src={HeroImage}
                      alt="Hero Image"
                      className="ml-[70px] h-full w-full"
                    />
                  </div>
                </div>
                {/* Hero Button */}
                <div className="flex justify-center items-center ml-[110px] mt-[-40px]">
                  <Image
                    src={HeroButton}
                    alt="Hero Button"
                    width={400}
                    height={100}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Online And Offline Section */}
      <section className="relative mt-[100px] mb-[80px] container justify-center items-center mx-auto z-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[35px] text-center font-bold z-20">
                অনলাইন ও অফলাইন সেবা
              </h1>
              <p className="w-[60%] text-[16px] text-center font-normal text-secondary mt-[10px] z-20">
                অনলাইন ও অফলাইনে বিভিন্ন ধরনের মানসিক সমস্যাগ্রস্ত ব্যক্তিদের
                সাইকোথেরাপী অর্থাৎ, চিকিৎসা মনোবৈজ্ঞানিক থেরাপি, পেশাজীবি
                ট্রেনিং, কর্পোরেট ট্রেনিং, ওয়ার্কসপ, সেমিনার, ওয়েবিনার, চা চক্র,
                ব্যক্তিগত, পারিবারিক ও সামাজিক সম্পর্ক বিষয়ক মানসিক ও আবেগীয়
                সমস্যা, ওয়ান-টু-ওয়ান ও গ্রুপ সাইকোথেরাপী ইত্যাদি বিষয়ে সমন্বিত
                চিকিৎসা ব্যবস্খাপনা রয়েছে এই CBT CARE এ।
              </p>
            </div>
          </div>
          {/* Image */}
          <div>
            <div className="grid grid-cols-3 justify-center items-center mt-[50px] gap-[10px]">
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-[420px] h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      অনলাইন ও অফলাইন সেবা
                    </h1>
                  </div>
                </div>
              </div>
            
              {/* end image */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
