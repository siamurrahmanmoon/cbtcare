/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // স্ট্যাটিক এক্সপোর্টের জন্য ইমেজ অপ্টিমাইজেশন বন্ধ করুন
    domains: ["cbtcare.net", "res.cloudinary.com"], // যদি এক্সটার্নাল ইমেজ ব্যবহার করেন
  },
};

export default nextConfig;
