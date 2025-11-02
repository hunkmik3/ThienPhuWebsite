import { partners } from "@/lib/data/partners";
import Image from "next/image";
import Button from "@/components/Button";

export default function PartnersPreview() {
  const featuredPartners = partners.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Partners
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Đối tác quốc tế
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hợp tác với các đối tác hàng đầu thế giới trong ngành kính
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {featuredPartners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-xl shadow-lg hover-lift flex items-center justify-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={75}
                  className="object-contain max-h-16 opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
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

