"use client";
import Image from "next/image";

// Gallery Images
import playButton from "@/assets/icon/playbutton.svg";
import VideoImage from "@/assets/image/videoImage.jpg";

export default function Section4() {
  return (
    <div>
      {/* Online And Offline Section */}
      <section className="relative mb-[80px] container justify-center items-center mx-auto z-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[35px] text-center font-bold z-20">
                আমাদের সেবা সমূহ
              </h1>
              <p className="xl:w-[60%] lg:w-[75%] xl:text-[16px] min-[320px]:max-[1023px]:text-[12px] text-[13px] text-center font-normal text-secondary mt-[10px] mb-4 z-20">
                অনলাইন ও অফলাইনে বিভিন্ন ধরনের মানসিক সমস্যাগ্রস্ত ব্যক্তিদের
                সাইকোথেরাপী অর্থাৎ, চিকিৎসা মনোবৈজ্ঞানিক থেরাপি, পেশাজীবি
                ট্রেনিং, কর্পোরেট ট্রেনিং, ওয়ার্কসপ, সেমিনার, ওয়েবিনার, চা চক্র,
                ব্যক্তিগত, পারিবারিক ও সামাজিক সম্পর্ক বিষয়ক মানসিক ও আবেগীয়
                সমস্যা, ওয়ান-টু-ওয়ান ও গ্রুপ সাইকোথেরাপী ইত্যাদি বিষয়ে সমন্বিত
                চিকিৎসা ব্যবস্খাপনা রয়েছে।
              </p>
            </div>
          </div>
          {/* Video */}
          <div>
            <div className="xl:mt-[30px] xl:mb-[30px] lg:mt-[20px] lg:mb-[20px]">
              <div className="flex items-center justify-center w-full lg:h-auto xl:h-auto rounded-[15px] overflow-hidden group">
                <div className="flex items-center justify-center bg-[#0C352B] group-hover:bg-[#0C352B] transition-all duration-300">
                  <div className="absulute z-15 opacity-70 group-hover:opacity-60 transition-all duration-300">
                    <div className="">
                      <Image
                        src={VideoImage}
                        alt="Video Image"
                        width={1280}
                        height={720}
                        className="object-cover group-hover:blur-[2px] transition-all duration-300 rounded-[15px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute z-25 lg:w-[140px] lg:h-auto xl:w-[160px] xl:h-auto min-[320px]:max-[1023px]:w-[120px] h-auto">
                  <Image
                    src={playButton}
                    alt="Play Button"
                    className="hover:scale-110 transition-all duration-300 cursor-pointer md:max-2xl:rounded-[100px]"
                  />
                </div>
              </div>
            </div>
            <div className="xl:mt-[20px] lg:mt-[0px] text-center">
              <p className="text-[16px] text-secondary min-[320px]:max-[1023px]:text-[12px] min-[320px]:max-[1023px]:mt-[20px]">
                আমাদের ভিডিও দেখুন এবং জানুন কিভাবে আমরা আপনাকে সাহায্য করতে
                পারি।
              </p>
            </div>
          </div>
          {/* end Video */}
        </div>
      </section>
    </div>
  );
}
