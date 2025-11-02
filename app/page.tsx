import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CapabilitiesPreview from "@/components/sections/CapabilitiesPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import VideoSection from "@/components/sections/VideoSection";
import PartnersPreview from "@/components/sections/PartnersPreview";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Trang chủ - Công Ty ThienPhu",
  description: "Công ty hàng đầu về sản xuất kính cường lực và các giải pháp kính cao cấp",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <CapabilitiesPreview />
      <FeaturedProjects />
      <VideoSection />
      <PartnersPreview />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
              Liên hệ nhanh
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Gửi thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
            </p>
          </div>
          <div className="bg-white border border-gray-200 p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

