import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              ThienPhu
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Công ty hàng đầu về sản xuất kính cường lực và các giải pháp kính cao cấp.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/capabilities" className="hover:text-white transition-colors">
                  Năng lực & Công nghệ
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-white transition-colors">
                  Phòng LAB
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  Chứng nhận
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-white transition-colors">
                  Thư viện
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@thienphu.com</li>
              <li>Điện thoại: +84 123 456 789</li>
              <li>Địa chỉ: Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Công Ty ThienPhu. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}

