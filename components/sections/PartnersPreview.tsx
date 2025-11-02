import { partners } from "@/lib/data/partners";
import Image from "next/image";
import Button from "@/components/Button";

export default function PartnersPreview() {
  const featuredPartners = partners.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Đối tác quốc tế
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Hợp tác với các đối tác hàng đầu thế giới trong ngành kính
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 border border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={75}
                className="object-contain max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/partners" variant="outline">
            Xem tất cả đối tác
          </Button>
        </div>
      </div>
    </section>
  );
}

