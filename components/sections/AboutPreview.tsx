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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Về chúng tôi
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Với hơn nhiều năm kinh nghiệm trong ngành sản xuất kính, 
              Công ty ThienPhu tự hào là đơn vị hàng đầu cung cấp các giải pháp 
              kính cao cấp cho thị trường trong nước và quốc tế.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu, 
              với đội ngũ chuyên nghiệp và công nghệ sản xuất tiên tiến.
            </p>
            <Button href="/about" variant="outline" className="px-8 py-3">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="relative h-[500px] bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
              alt="Văn phòng công ty"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={<span className="text-3xl">{stat.icon}</span>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

