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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Liên hệ nhanh
            </h2>
            <p className="text-xl text-gray-600">
              Gửi thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

