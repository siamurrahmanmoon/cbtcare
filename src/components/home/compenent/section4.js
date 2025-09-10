"use client";
import Image from "next/image";

// Gallery Images
import playButton from "@/assets/icon/playButton.svg";
// import VideoImage from "@/assets/galleryimage/imagegallery5.jpeg";

const VideoImage =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078813/imagegallery5_adnebc.jpg";

export default function Section4() {
  return (
    <div>
      {/* Online And Offline Section */}
      <section className="relative mb-[80px] container justify-center items-center mx-auto z-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[35px] min-[320px]:max-[1023px]:text-[28px] text-center font-bold z-20">
                আপনার গল্প আমাদের সমাধান
              </h1>
              <p className="xl:w-[70%] lg:w-[70%] xl:text-[16px] min-[320px]:max-[1023px]:text-[12px] min-[320px]:max-[1023px]:w-[93%] text-[16px] text-center font-normal text-secondary mt-[10px] mb-4 z-20">
                ভিডিওর মাধ্যমে জানুন আমাদের সেবা কিভাবে আপনার জীবনের মানসিক চাপ
                হ্রাস করে আপনাকে নতুন সম্ভাবনার দিকে এগিয়ে নিতে পারে।
              </p>
            </div>
          </div>
          {/* Video */}
          <div>
            <div className="xl:mt-[30px] xl:mb-[30px] lg:mt-[20px] lg:mb-[20px]">
              <div className="flex items-center justify-center w-full rounded-[15px] pl-[8%] pr-[8%] lg:h-[580px] xl:h-[580px] overflow-hidden group">
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
                <div
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/watch/?v=637307542058043&rdid=xBkixEnUvRuaihve",
                      "_blank"
                    );
                  }}
                  className="absolute z-25 lg:w-[140px] lg:h-auto xl:w-[160px] xl:h-auto min-[320px]:max-[1023px]:w-[120px] h-auto"
                >
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
