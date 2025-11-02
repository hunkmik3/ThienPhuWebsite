import { products, categories } from "@/lib/data/products";
import Card from "@/components/Card";

export const metadata = {
  title: "Sản phẩm - Công Ty ThienPhu",
  description: "Danh mục sản phẩm kính cường lực, kính hộp và các giải pháp kính cao cấp",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Sản phẩm & Giải pháp</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các sản phẩm kính chất lượng cao đạt tiêu chuẩn quốc tế
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Danh mục sản phẩm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryProducts = products.filter((p) => p.category === category);
              return (
                <Card
                  key={category}
                  title={category}
                  description={`${categoryProducts.length} sản phẩm`}
                  image={categoryProducts[0]?.image || ""}
                  imageAlt={category}
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="cursor-pointer hover:scale-105 transition-transform"
                />
              );
            })}
          </div>
        </div>

        {/* All Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tất cả sản phẩm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.name}
                description={product.description}
                image={product.image}
                imageAlt={product.name}
                href={`/products/${product.slug}`}
              >
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Danh mục:</span> {product.category}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

