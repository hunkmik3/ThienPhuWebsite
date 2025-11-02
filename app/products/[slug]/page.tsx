import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, products } from "@/lib/data/products";
import ImageGallery from "@/components/ImageGallery";
import Button from "@/components/Button";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: "Sản phẩm không tìm thấy",
    };
  }

  return {
    title: `${product.name} - Công Ty ThienPhu`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-white">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">{product.name}</h1>
            <p className="text-xl text-white">{product.category}</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mô tả sản phẩm</h2>
              <div className="prose max-w-none text-gray-600 whitespace-pre-line">
                {product.fullDescription.trim()}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông số kỹ thuật</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Thông số
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                        Giá trị
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                          {key}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {product.images && product.images.length > 0 && (
              <ImageGallery images={product.images} title="Hình ảnh sản phẩm" />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-8 sticky top-24 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
              <p className="text-gray-600 mb-6">
                Quan tâm đến sản phẩm này? Hãy liên hệ với chúng tôi để được tư vấn và báo giá.
              </p>
              <Button href="/contact" variant="primary" className="w-full mb-4">
                Liên hệ tư vấn
              </Button>
              <Button href="/projects" variant="outline" className="w-full">
                Xem dự án sử dụng
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Danh mục</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/products"
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    Tất cả sản phẩm
                  </a>
                </li>
                <li>
                  <a
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="text-primary-600 hover:text-primary-700 hover:underline"
                  >
                    {product.category}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

