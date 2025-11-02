# Website Demo - Công Ty ThienPhu

Website demo cho Công ty ThienPhu - Nhà sản xuất kính cường lực và các giải pháp kính cao cấp.

## Công nghệ sử dụng

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## Cấu trúc dự án

```
/
├── app/                    # Next.js App Router pages
│   ├── about/             # Trang Giới thiệu
│   ├── capabilities/      # Năng lực & Công nghệ
│   ├── lab/               # Phòng LAB
│   ├── projects/          # Dự án tiêu biểu
│   ├── products/          # Sản phẩm
│   ├── certifications/   # Chứng nhận
│   ├── library/          # Thư viện
│   ├── partners/         # Đối tác quốc tế
│   └── contact/          # Liên hệ
├── components/            # React components
│   ├── sections/         # Section components cho homepage
│   └── ...
├── lib/                   # Utilities và data
│   ├── data/             # Dummy data
│   └── utils.ts         # Helper functions
└── public/               # Static files
```

## Tính năng

- ✅ Responsive design (mobile-first)
- ✅ SEO optimization
- ✅ Image optimization
- ✅ Filter và search cho dự án
- ✅ Gallery ảnh
- ✅ Contact form
- ✅ Đa ngôn ngữ (tiếng Việt)

## Trang web bao gồm

1. **Trang chủ** - Hero banner, dự án nổi bật, preview các section
2. **Giới thiệu** - Lịch sử, sứ mệnh, tầm nhìn, giá trị cốt lõi
3. **Năng lực & Công nghệ** - Nhà máy, máy móc, quy trình
4. **Phòng LAB** - Nghiên cứu, kiểm nghiệm chất lượng
5. **Dự án tiêu biểu** - Danh sách dự án với filter/search và trang chi tiết
6. **Sản phẩm** - Danh mục sản phẩm và trang chi tiết với thông số kỹ thuật
7. **Chứng nhận** - Các chứng nhận chất lượng và tiêu chuẩn
8. **Thư viện** - Hồ sơ năng lực, catalog, tài liệu
9. **Đối tác quốc tế** - Danh sách đối tác theo khu vực
10. **Liên hệ** - Thông tin văn phòng/nhà máy và form liên hệ

## Notes

- Website này là bản demo sử dụng dummy data
- Cần thay thế placeholder images bằng hình ảnh thực tế
- Cần cấu hình Google Maps API keys cho bản đồ
- Form liên hệ hiện chỉ là demo, cần tích hợp backend để xử lý thực tế

