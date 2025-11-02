import { partners, regions } from "@/lib/data/partners";
import Image from "next/image";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "Đối tác quốc tế - Công Ty ThienPhu",
  description: "Danh sách đối tác quốc tế và khách hàng của ThienPhu",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Đối tác quốc tế</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Hợp tác với các đối tác hàng đầu thế giới trong ngành kính
          </p>
        </div>
      </section>

      {/* Partners by Region */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Đối tác theo khu vực
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {regions.map((region) => {
              const regionPartners = partners.filter((p) => p.region === region);
              const regionNames: { [key: string]: string } = {
                canada: "Canada",
                usa: "Hoa Kỳ",
                europe: "Châu Âu",
              };
              return (
                <Card
                  key={region}
                  title={regionNames[region] || region}
                  description={`${regionPartners.length} đối tác`}
                  href={`/partners/${region}`}
                  className="hover:scale-105 transition-transform cursor-pointer"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* All Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Tất cả đối tác
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="mb-4 flex items-center justify-center h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={75}
                    className="object-contain max-h-20"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.name}</h3>
                {partner.description && (
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Khách hàng tiêu biểu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Vingroup",
              "Keppel Land",
              "Aeon Vietnam",
              "Accor Hotels",
              "Keangnam",
              "ACV",
            ].map((customer) => (
              <div
                key={customer}
                className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                <p className="font-semibold text-gray-900">{customer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

