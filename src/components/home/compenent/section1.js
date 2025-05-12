"use client";
import Image from "next/image";

// Gallery Images
// import GalleryImage1 from "@/assets/galleryimage/imagegallery2.jpg";
// import GalleryImage2 from "@/assets/galleryimage/imagegallery1.jpg";
// import GalleryImage3 from "@/assets/galleryimage/imagegallery3.jpg";
// import GalleryImage4 from "@/assets/galleryimage/imagegallery4.jpeg";
// import GalleryImage5 from "@/assets/galleryimage/imagegallery5.jpeg";
// import GalleryImage6 from "@/assets/galleryimage/imagegallery6.jpeg";

const GalleryImage1 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078814/imagegallery2_g42dqu.jpg";
const GalleryImage2 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078814/imagegallery1_lqkvwc.jpg";
const GalleryImage3 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747080411/medium-shot-therapist-discussing-with-family_uys1lq.jpg";
const GalleryImage4 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078813/imagegallery4_qvdt80.jpg";
const GalleryImage5 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078813/imagegallery5_adnebc.jpg";
const GalleryImage6 =
  "https://res.cloudinary.com/dfkv8g7xa/image/upload/v1747078813/imagegallery6_x3suvw.jpg";

export default function Section1() {
  return (
    <div>
      {/* Online And Offline Section */}
      <section className="relative mt-[100px] mb-[80px] container justify-center items-center mx-auto z-20">
        <div className="flex flex-col justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="min-[320px]:max-[1023px]:text-[28px] text-[35px] text-center font-bold z-20">
                অনলাইন ও অফলাইন চিকিৎসা মনোবৈজ্ঞানিক সেবা
              </h1>
              <p className="xl:w-[95%] lg:w-[95%] text-[13px] xl:text-[16px] min-[320px]:max-[1023px]:text-[16px] text-center font-normal text-secondary mt-[10px] z-20">
                ঢাকা বিশ্ববিদ্যালয় থেকে এমফিল ও পিএইচডি ডিগ্রিপ্রাপ্ত
                ক্লিনিক্যাল সাইকোলজিস্ট দ্বারা পরিচালিত।
              </p>
            </div>
          </div>
          {/* Image */}
          <div>
            <div className="grid grid-cols-3 min-[320px]:max-[1023px]:grid-cols-1 min-[320px]:max-[1023px]:w-screen min-[320px]:max-[1023px]:px-[3%] justify-center items-center mt-[50px] gap-[10px]">
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative min-[320px]:max-[1023px]:w-full 2xl:w-[420px] xl:w-[350px] lg:w-[290px] h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage1}
                    fill
                    alt="Hero Image"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      ইনডিভিজুয়াল ‍সাইকোথেরাপি
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage2}
                    alt="Hero Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      গ্রুপ সাইকোথেরাপি
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage3}
                    alt="Hero Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      ফ্যামলি থেরাপি
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage4}
                    alt="Hero Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      প্যারেন্টস এবং টিচার্স কাউন্সেলিং
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage5}
                    alt="Hero Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      করপোরেট সাইকোথেরাপি
                    </h1>
                  </div>
                </div>
              </div>
              <div className="group hover:ring-2 transform transition duration-300 ease-in-out ring-[#C0E9DB] rounded-[10px]">
                <div className="relative w-full h-[250px] overflow-hidden rounded-[10px]">
                  <Image
                    src={GalleryImage6}
                    alt="Hero Image"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0C352B] bg-opacity-70 group-hover:bg-opacity-90 transform transition duration-400 ease-in-out"></div>
                  <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-[20px] text-center font-bold p-[5%] group-hover:text-[22px] transform transition duration-800 ease-in-out ">
                      বেসিক কাউন্সেলিং / সাইকোথেরাপি ট্রেনিং, ওয়ার্কসপ
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
