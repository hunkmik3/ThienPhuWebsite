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
      <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary-100 shadow-lg">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-widest">
                Contact
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Liên hệ nhanh
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent to-primary-600"></div>
              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
              <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-secondary-600 to-transparent"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Gửi thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

