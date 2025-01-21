"use client";
import Image from "next/image";

// Image
import HeroImage from "@/assets/image/section3image.svg";

export default function Section3() {
  return (
    <div>
      <section className="container justify-center items-center mx-auto mb-[80px]">
        {/* Section 2 */}
        <div className="flex flex-row min-[320px]:max-[1023px]:flex-col justify-center items-center gap-5 ">
          {/* Grid 1 */}
          <div>
            <div className="flex flex-col justify-center items-center z-10 mr-[60px]">
              <div className="lg:w-[330px] xl:w-[380px] h-auto z-10 ">
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
                  <h1 className="text-[28px] text-start font-poppins font-bold">
                    CBT CARE - ২২ বছরের অভিজ্ঞতায় মানসিক সুস্থতার সেরা চিকিৎসা
                    মনোবৈজ্ঞানিক ঠিকানা
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] w-[96%] font-poppins font-normal text-secondary mt-[20px]">
                    আমাদের লক্ষ্য কেবল মানসিক সমস্যার চিকিৎসা করা নয়, বরং আপনাকে
                    এমন এক শক্তিশালী ব্যক্তি হিসেবে গড়ে তোলা, যিনি জীবনের
                    প্রতিটি চ্যালেঞ্জকে আত্মবিশ্বাসের সঙ্গে মোকাবিলা করতে সক্ষম
                    হবেন। CBT CARE মানসিক স্বাস্থ্যসেবায় কগনিটিভ বিহেভিয়ার
                    থেরাপি (CBT) সহ আধুনিক এবং প্রমাণিত পদ্ধতির ব্যবহার করে, যা
                    আপনার নেতিবাচক চিন্তা ও আচরণকে ইতিবাচকভাবে রূপান্তর করতে
                    সাহায্য করে।
                    <br />
                    <br />
                    CBT CARE-এ, আমরা প্রতিটি ক্লায়েন্টের জন্য বিশেষভাবে
                    কাস্টমাইজড চিকিৎসা পরিকল্পনা তৈরি করি, যা তাদের ব্যক্তিগত
                    পরিস্থিতি ও প্রয়োজন অনুযায়ী সেরা সমাধান দেয়। অভিজ্ঞ
                    ক্লিনিক্যাল সাইকোলজিস্ট এবং সহানুভূতিশীল টিম আপনাকে সর্বোচ্চ
                    মানের সেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ।
                  </p>
                </div>
              </div>
              {/* <div className="mt-[40px]">
                <button className="bg-[#C0E9DB] text-[#0F4433] font-poppins font-bold text-[15px] py-[15px] px-[30px] rounded-[60px]">
                  অ্যাপয়েন্টমেন্ট বুক করুন
                </button>
              </div> */}
            </div>
          </div>
          {/* Grid 2 end */}
        </div>
        {/* Section 2 End */}
      </section>
    </div>
  );
}
