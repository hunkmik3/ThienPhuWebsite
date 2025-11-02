import { notFound } from "next/navigation";
import Image from "next/image";
import { getProjectBySlug, projects } from "@/lib/data/projects";
import ImageGallery from "@/components/ImageGallery";
import Card from "@/components/Card";
import { formatDate } from "@/lib/utils";
import Button from "@/components/Button";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Dự án không tìm thấy",
    };
  }

  return {
    title: `${project.name} - Công Ty ThienPhu`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">{project.name}</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông tin dự án</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Địa điểm:</h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Nhà đầu tư / Đối tác:</h3>
                  <p className="text-gray-600">{project.investor}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Thời gian hoàn thành:</h3>
                  <p className="text-gray-600">{formatDate(project.completionDate)}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mô tả:</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sản phẩm kính sử dụng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.products.map((productName, idx) => {
                  // Find product by name (simplified matching)
                  const productSlug = productName
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/đ/g, "d")
                    .replace(/Đ/g, "D")
                    .replace(/\s+/g, "-")
                    .replace("kinh-", "");
                  
                  return (
                    <Button
                      key={idx}
                      href={`/products/${productSlug}`}
                      variant="outline"
                      className="text-left p-4 h-auto"
                    >
                      <span className="font-semibold">{productName}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <ImageGallery images={project.images} title="Thư viện ảnh dự án" />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
              <p className="text-gray-600 mb-4">
                Bạn có quan tâm đến dự án này? Hãy liên hệ với chúng tôi để được tư vấn.
              </p>
              <Button href="/contact" variant="primary" className="w-full">
                Liên hệ ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

