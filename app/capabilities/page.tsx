import { machinery } from "@/lib/data/machinery";
import Image from "next/image";
import Card from "@/components/Card";

export const metadata = {
  title: "Năng lực & Công nghệ - Công Ty ThienPhu",
  description: "Tổ hợp sản xuất, máy móc thiết bị và công nghệ hiện đại của ThienPhu",
};

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Năng lực & Công nghệ</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Nhà máy hiện đại với trang thiết bị công nghệ cao và đội ngũ chuyên nghiệp
          </p>
        </div>
      </section>

      {/* Tổ hợp sản xuất */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Tổ hợp sản xuất
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop`}
                  alt={`Tổ hợp sản xuất ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video nhà máy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Video thực tế nhà máy
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-gray-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video nhà máy ThienPhu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hình ảnh nhà máy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Hình ảnh nhà máy & dây chuyền sản xuất
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={`https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop`}
                  alt={`Nhà máy ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Danh sách máy móc / thiết bị */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Danh sách máy móc / thiết bị
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((machine) => (
              <Card
                key={machine.id}
                title={machine.name}
                description={machine.description}
                image={machine.image}
                imageAlt={machine.name}
              >
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900">Đặc điểm nổi bật:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                    {machine.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2 text-gray-900">Thông số kỹ thuật:</h4>
                  <dl className="space-y-1 text-sm text-gray-600">
                    {Object.entries(machine.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="font-medium">{key}:</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quy trình & công nghệ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Quy trình & Công nghệ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quy trình sản xuất</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Cắt kính</h4>
                    <p className="text-gray-600">Sử dụng máy cắt CNC tự động với độ chính xác cao</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Mài cạnh</h4>
                    <p className="text-gray-600">Mài cạnh tự động với nhiều góc mài khác nhau</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Nung cường lực</h4>
                    <p className="text-gray-600">Xử lý nhiệt độ trong lò nung hiện đại</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Kiểm tra chất lượng</h4>
                    <p className="text-gray-600">Kiểm tra nghiêm ngặt theo tiêu chuẩn quốc tế</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Quy trình sản xuất"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

