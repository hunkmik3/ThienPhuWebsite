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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="animate-fade-in-left">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Về chúng tôi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với hơn nhiều năm kinh nghiệm trong ngành sản xuất kính, 
              Công ty ThienPhu tự hào là đơn vị hàng đầu cung cấp các giải pháp 
              kính cao cấp cho thị trường trong nước và quốc tế.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu, 
              với đội ngũ chuyên nghiệp và công nghệ sản xuất tiên tiến.
            </p>
            <Button href="/about" variant="primary">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hover-scale animate-fade-in-right">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
              alt="Văn phòng công ty"
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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

