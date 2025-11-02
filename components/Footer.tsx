import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              ThienPhu
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Công ty hàng đầu về sản xuất kính cường lực và các giải pháp kính cao cấp.
            </p>
          </div>

          <div className="animate-fade-in-up [animation-delay:0.1s]">
            <h4 className="font-semibold mb-4 text-white">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Dự án
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
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

        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center text-sm text-gray-400 animate-fade-in-up [animation-delay:0.3s]">
          <p>&copy; {new Date().getFullYear()} Công Ty ThienPhu. Tất cả quyền được bảo lưu.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-secondary-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

