import Button from "@/components/Button";
import Card from "@/components/Card";

const libraryItems = [
  {
    id: "1",
    name: "Hồ sơ năng lực",
    description: "Tài liệu giới thiệu tổng quan về công ty, năng lực sản xuất và các dự án tiêu biểu",
    type: "PDF",
    size: "15 MB",
    icon: "📄",
  },
  {
    id: "2",
    name: "Catalog sản phẩm 2024",
    description: "Danh mục đầy đủ các sản phẩm kính với thông số kỹ thuật chi tiết",
    type: "PDF",
    size: "8 MB",
    icon: "📚",
  },
  {
    id: "3",
    name: "Brochure kính cường lực",
    description: "Tài liệu giới thiệu về sản phẩm kính cường lực và ứng dụng",
    type: "PDF",
    size: "5 MB",
    icon: "📋",
  },
  {
    id: "4",
    name: "Video giới thiệu công ty",
    description: "Video giới thiệu về quy trình sản xuất và năng lực của công ty",
    type: "Video",
    size: "120 MB",
    icon: "🎥",
  },
  {
    id: "5",
    name: "Tài liệu kỹ thuật - Kính hộp IGU",
    description: "Hướng dẫn kỹ thuật chi tiết về sản phẩm kính hộp",
    type: "PDF",
    size: "12 MB",
    icon: "🔧",
  },
  {
    id: "6",
    name: "Tài liệu kỹ thuật - Kính Low-E",
    description: "Thông số kỹ thuật và hướng dẫn lắp đặt kính Low-E",
    type: "PDF",
    size: "10 MB",
    icon: "🔧",
  },
];

export const metadata = {
  title: "Thư viện - Công Ty ThienPhu",
  description: "Hồ sơ năng lực, catalog sản phẩm và tài liệu kỹ thuật tải xuống",
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Thư viện</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Tải xuống hồ sơ năng lực, catalog sản phẩm và tài liệu kỹ thuật
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libraryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-5xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                <span>{item.type}</span>
                <span>{item.size}</span>
              </div>
              <Button href="#" variant="primary" className="w-full">
                Tải xuống
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

