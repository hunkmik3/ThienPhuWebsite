import StatsCard from "@/components/StatsCard";
import Image from "next/image";
import Button from "@/components/Button";

const stats = [
  { number: "500+", label: "Nhân viên", icon: "👥" },
  { number: "200+", label: "Dự án hoàn thành", icon: "🏗️" },
  { number: "15+", label: "Chứng nhận kỹ thuật", icon: "🏆" },
  { number: "10+", label: "Giải thưởng quốc gia & quốc tế", icon: "🎖️" },
  { number: "3", label: "Nhà máy & xưởng sản xuất", icon: "🏭" },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in-left space-y-6">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full border border-primary-100">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Về chúng tôi
              </span>
            </h2>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed font-light">
              Với hơn nhiều năm kinh nghiệm trong ngành sản xuất kính, 
              Công ty ThienPhu tự hào là đơn vị hàng đầu cung cấp các giải pháp 
              kính cao cấp cho thị trường trong nước và quốc tế.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light">
              Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu, 
              với đội ngũ chuyên nghiệp và công nghệ sản xuất tiên tiến.
            </p>
            <Button href="/about" variant="primary" className="px-8 py-4 text-lg shadow-2xl">
              Tìm hiểu thêm →
            </Button>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover-scale animate-fade-in-right group">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
              alt="Văn phòng công ty"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            {/* Decorative border */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatsCard
                number={stat.number}
                label={stat.label}
                icon={<span className="text-4xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{stat.icon}</span>}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

