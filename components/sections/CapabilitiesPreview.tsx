import Button from "@/components/Button";
import Image from "next/image";

export default function CapabilitiesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-right">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Năng lực & Công nghệ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với nhà máy hiện đại và dây chuyền sản xuất tự động hóa, chúng tôi 
              tự hào cung cấp các sản phẩm kính chất lượng cao với công nghệ tiên tiến.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị máy móc hiện đại 
              đảm bảo chất lượng sản phẩm đạt tiêu chuẩn quốc tế.
            </p>
            <Button href="/capabilities" variant="primary">
              Tìm hiểu thêm
            </Button>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl hover-scale animate-fade-in-left group">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
              alt="Nhà máy sản xuất"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

