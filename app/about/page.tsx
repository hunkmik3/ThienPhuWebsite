import Image from "next/image";
import StatsCard from "@/components/StatsCard";
import Button from "@/components/Button";

const stats = [
  { number: "500+", label: "Nhân viên", icon: "👥" },
  { number: "200+", label: "Dự án hoàn thành", icon: "🏗️" },
  { number: "15+", label: "Chứng nhận kỹ thuật", icon: "🏆" },
  { number: "10+", label: "Giải thưởng quốc gia & quốc tế", icon: "🎖️" },
  { number: "3", label: "Nhà máy & xưởng sản xuất", icon: "🏭" },
];

export const metadata = {
  title: "Giới thiệu - Công Ty ThienPhu",
  description: "Giới thiệu về công ty ThienPhu - Lịch sử, sứ mệnh, tầm nhìn và giá trị cốt lõi",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">
              <span className="text-sm font-semibold uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">Giới thiệu về chúng tôi</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Với nhiều năm kinh nghiệm trong ngành sản xuất kính, chúng tôi tự hào là đơn vị hàng đầu
            </p>
          </div>
        </div>
      </section>

      {/* Giới thiệu chung */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Lịch sử hình thành</h2>
              <p className="text-lg text-gray-600 mb-4">
                Công ty ThienPhu được thành lập với sứ mệnh cung cấp các giải pháp kính cao cấp 
                cho thị trường trong nước và quốc tế. Từ một xưởng sản xuất nhỏ, chúng tôi đã 
                phát triển thành một doanh nghiệp lớn với nhiều nhà máy hiện đại.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Trải qua nhiều năm phát triển, chúng tôi không ngừng đầu tư vào công nghệ, 
                máy móc và đào tạo nhân lực để nâng cao chất lượng sản phẩm và dịch vụ.
              </p>
              <p className="text-lg text-gray-600">
                Hiện nay, chúng tôi tự hào là một trong những đơn vị dẫn đầu về sản xuất kính 
                cường lực, kính hộp và các loại kính đặc biệt tại Việt Nam.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="Lịch sử công ty"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sứ mệnh - Tầm nhìn - Giá trị cốt lõi */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Sứ mệnh</h3>
              <p className="text-gray-600">
                Cung cấp các sản phẩm kính chất lượng cao, đáp ứng mọi nhu cầu của khách hàng 
                và góp phần xây dựng các công trình bền vững, hiện đại.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Tầm nhìn</h3>
              <p className="text-gray-600">
                Trở thành công ty hàng đầu Đông Nam Á về sản xuất và cung cấp các giải pháp 
                kính cao cấp, được công nhận trên thị trường quốc tế.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary-600 mb-4">Giá trị cốt lõi</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Chất lượng vượt trội</li>
                <li>• Đổi mới sáng tạo</li>
                <li>• Tinh thần trách nhiệm</li>
                <li>• Hợp tác phát triển</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Thống kê */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Con số ấn tượng
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                number={stat.number}
                label={stat.label}
                icon={<span className="text-4xl">{stat.icon}</span>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hình ảnh đội ngũ / văn phòng */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Hình ảnh đội ngũ & văn phòng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`https://images.unsplash.com/photo-${1520000000000 + i}?w=800&h=600&fit=crop`}
                  alt={`Hình ảnh ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoạt động nội bộ / văn hóa doanh nghiệp */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                alt="Văn hóa doanh nghiệp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Văn hóa doanh nghiệp & Hoạt động nội bộ
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Chúng tôi tin rằng con người là tài sản quý giá nhất. Do đó, chúng tôi luôn 
                chú trọng xây dựng môi trường làm việc tích cực, nơi mỗi nhân viên được phát 
                triển toàn diện.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Các hoạt động nội bộ như team building, đào tạo kỹ năng, kỷ niệm ngày lễ và 
                các sự kiện đặc biệt được tổ chức thường xuyên để gắn kết đội ngũ.
              </p>
              <p className="text-lg text-gray-600">
                Văn hóa doanh nghiệp của chúng tôi được xây dựng trên nền tảng: Tôn trọng, 
                Trách nhiệm, Sáng tạo và Phát triển bền vững.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

