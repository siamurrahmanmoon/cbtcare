"use client";
import Image from "next/image";

// Image
import HeroImage from "@/assets/image/section2image.svg";

export default function Section2() {
  return (
    <div>
      <section className="container justify-center items-center mx-auto mb-[80px]">
        {/* Section 2 */}
        <div className="flex flex-row min-[320px]:max-[1023px]:flex-col-reverse justify-center items-center gap-5 ">
          {/* Grid 1 */}
          <div>
            <div className="flex-row justify-center items-center z-10">
              <div>
                <div>
                  <h1 className="text-[28px] font-poppins font-bold">
                    ঢাকা বিশ্ববিদ্যালয়ের এমফিল ও পিএইচডি ডিগ্রিপ্রাপ্ত বিশেষজ্ঞ
                    ক্লিনিক্যাল সাইকোলজিস্ট দ্বারা পরিচালিত।
                  </h1>
                </div>
                <div>
                  <p className="text-[16px] w-[96%] text-start font-poppins font-normal text-secondary mt-[20px]">
                    CBT CARE মানসিক স্বাস্থ্য চিকিৎসায় একটি অভিজ্ঞ ও নির্ভরযোগ্য
                    প্রতিষ্ঠান, যা গত ২২ বছরেরও বেশি সময় ধরে মানুষের মানসিক
                    উন্নয়ন, চিকিৎসা ও পুনর্বাসন কার্যক্রমে কাজ করে আসছে। আমরা
                    বিশ্বাস করি যে, মানসিক স্বাস্থ্য প্রতিটি মানুষের জীবনের একটি
                    গুরুত্বপূর্ণ অংশ, এবং এর যত্ন নেওয়ার জন্য প্রয়োজন পেশাদার
                    সহায়তা ও সহানুভূতিশীল পরিবেশ।
                    <br />
                    <br />
                    আমাদের সেবা এমন একটি নিরাপদ ক্ষেত্র তৈরি করেছে যেখানে আপনি
                    আপনার অভিজ্ঞতা, চ্যালেঞ্জ এবং আবেগ অত্যন্ত গোপনীয়তা রক্ষা
                    করে ও অবিচারমূলক পেশাদারিত্বের মাধ্যমে শেয়ার করতে পারবেন, যা
                    আপনাকে সুস্থ মন এবং একটি উজ্জ্বল ভবিষ্যতের দিকে এগিয়ে নিয়ে
                    যাবে। আমাদের উদ্দেশ্য আপনাকে মানসিক শক্তি ও স্থিতিশীলতা
                    অর্জনে সাহায্য করা, যাতে আপনি আপনার জীবনযুদ্ধে একজন সফল
                    যোদ্ধা হিসেবে নিজেকে প্রতিষ্ঠা করতে পারেন।
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
          {/* Grid 1 end */}
          {/* Grid 2 */}
          <div>
            <div className="flex flex-col justify-center items-center z-10 ml-[60px]">
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
          {/* Grid 2 end */}
        </div>
        {/* Section 2 End */}
      </section>
    </div>
  );
}
