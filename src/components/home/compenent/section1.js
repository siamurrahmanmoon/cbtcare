"use client";
import Image from "next/image";

// Gallery Images
import GalleryImage1 from "@/assets/photo/gallaryphoto1.jpg";

export default function Section1() {
  return (
    <div>
      {/* Online And Offline Section */}
      <section className="relative mt-[100px] mb-[80px] container justify-center items-center mx-auto z-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[35px] text-center font-bold z-20">
                অনলাইন ও অফলাইন সেবা
              </h1>
              <p className="xl:w-[60%] lg:w-[75%] text-[13px] xl:text-[16px] text-center font-normal text-secondary mt-[10px] z-20">
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
                <div className="relative 2xl:w-[420px] xl:w-[350px] lg:w-[290px] md:w-[340px] h-[250px] overflow-hidden rounded-[10px]">
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
