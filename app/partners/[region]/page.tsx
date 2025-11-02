import { notFound } from "next/navigation";
import { getPartnersByRegion, regions } from "@/lib/data/partners";
import Image from "next/image";

export async function generateStaticParams() {
  return regions.map((region) => ({
    region: region,
  }));
}

export async function generateMetadata({ params }: { params: { region: string } }) {
  const regionNames: { [key: string]: string } = {
    canada: "Canada",
    usa: "Hoa Kỳ",
    europe: "Châu Âu",
  };

  return {
    title: `Đối tác ${regionNames[params.region] || params.region} - Công Ty ThienPhu`,
  };
}

export default function PartnerRegionPage({ params }: { params: { region: string } }) {
  const partners = getPartnersByRegion(params.region);

  if (partners.length === 0) {
    notFound();
  }

  const regionNames: { [key: string]: string } = {
    canada: "Canada",
    usa: "Hoa Kỳ",
    europe: "Châu Âu",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Đối tác {regionNames[params.region] || params.region}
          </h1>
          <p className="text-xl text-gray-600">
            Danh sách các đối tác tại khu vực {regionNames[params.region] || params.region}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 flex items-center justify-center h-32 bg-gray-50 rounded-lg">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="object-contain max-h-24"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {partner.name}
              </h3>
              {partner.description && (
                <p className="text-gray-600 mb-4 text-center">{partner.description}</p>
              )}
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-center block"
                >
                  Xem website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

