import Button from "@/components/Button";
import Image from "next/image";

export default function CapabilitiesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              Năng lực & Công nghệ
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-light">
              Với nhà máy hiện đại và dây chuyền sản xuất tự động hóa, chúng tôi 
              tự hào cung cấp các sản phẩm kính chất lượng cao với công nghệ tiên tiến.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị máy móc hiện đại 
              đảm bảo chất lượng sản phẩm đạt tiêu chuẩn quốc tế.
            </p>
            <Button href="/capabilities" variant="outline" className="px-8 py-3">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="relative h-[400px] bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
              alt="Nhà máy sản xuất"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

