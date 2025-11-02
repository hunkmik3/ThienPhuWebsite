import { certifications } from "@/lib/data/certifications";
import Card from "@/components/Card";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Chứng nhận kỹ thuật - Công Ty ThienPhu",
  description: "Các chứng nhận chất lượng và tiêu chuẩn kỹ thuật của ThienPhu",
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Chứng nhận kỹ thuật</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Các chứng nhận chất lượng và tiêu chuẩn quốc tế mà chúng tôi đạt được
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{cert.type}</p>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>
                    <span className="font-semibold">Tổ chức cấp:</span> {cert.issuingOrganization}
                  </p>
                  <p>
                    <span className="font-semibold">Ngày cấp:</span> {formatDate(cert.issueDate)}
                  </p>
                  {cert.expiryDate && (
                    <p>
                      <span className="font-semibold">Ngày hết hạn:</span>{" "}
                      {formatDate(cert.expiryDate)}
                    </p>
                  )}
                </div>
                {cert.fileUrl && (
                  <Button href={cert.fileUrl} variant="outline" className="w-full">
                    Tải xuống PDF
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

