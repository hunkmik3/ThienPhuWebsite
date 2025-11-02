import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Phòng LAB - Công Ty ThienPhu",
  description: "Nghiên cứu và đánh giá chất lượng sản phẩm tại phòng LAB ThienPhu",
};

export default function LabPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Phòng LAB</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Nghiên cứu, kiểm tra và đánh giá chất lượng sản phẩm theo tiêu chuẩn quốc tế
          </p>
        </div>
      </section>

      {/* Nghiên cứu và đánh giá chất lượng */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nghiên cứu & Đánh giá chất lượng sản phẩm
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Phòng LAB của chúng tôi được trang bị các thiết bị hiện đại và đội ngũ kỹ sư 
                chuyên nghiệp, thực hiện các nghiên cứu và kiểm tra chất lượng sản phẩm 
                theo các tiêu chuẩn quốc tế như ISO, TCVN, ANSI, EN.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Chúng tôi thực hiện các thử nghiệm như: kiểm tra độ bền cơ học, khả năng chịu 
                nhiệt, cách âm, cách nhiệt, độ an toàn khi vỡ, và nhiều thử nghiệm khác.
              </p>
              <p className="text-lg text-gray-600">
                Tất cả các sản phẩm trước khi xuất xưởng đều được kiểm tra nghiêm ngặt để 
                đảm bảo chất lượng tốt nhất.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                alt="Phòng LAB"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video clip minh họa */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Video minh họa nghiên cứu
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video phòng LAB ThienPhu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ảnh phòng LAB & thiết bị */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Ảnh phòng LAB & Thiết bị
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop`}
                  alt={`Phòng LAB ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Báo cáo & Tiêu chuẩn kiểm nghiệm */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Báo cáo & Tiêu chuẩn kiểm nghiệm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Tiêu chuẩn ISO</h3>
              <p className="text-gray-600 mb-4">
                Tuân thủ các tiêu chuẩn ISO 9001:2015 về quản lý chất lượng và ISO 14001 
                về quản lý môi trường.
              </p>
              <Button href="/certifications" variant="outline" className="mt-4">
                Xem chứng nhận
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Tiêu chuẩn TCVN</h3>
              <p className="text-gray-600 mb-4">
                Áp dụng các tiêu chuẩn Việt Nam TCVN 7455, TCVN 7458, TCVN 7363 
                cho các sản phẩm kính.
              </p>
              <Button href="/certifications" variant="outline" className="mt-4">
                Xem chứng nhận
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Tiêu chuẩn Quốc tế</h3>
              <p className="text-gray-600 mb-4">
                Tuân thủ ANSI, EN, CE Marking và các tiêu chuẩn quốc tế khác 
                cho xuất khẩu.
              </p>
              <Button href="/certifications" variant="outline" className="mt-4">
                Xem chứng nhận
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

