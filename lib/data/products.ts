export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  specifications: {
    [key: string]: string | number;
  };
}

export const products: Product[] = [
  {
    id: "1",
    slug: "kinh-cuong-luc",
    name: "Kính Cường Lực",
    category: "Kính Cường Lực",
    description: "Kính cường lực có độ bền cao, an toàn và chịu lực tốt",
    fullDescription: `
      Kính cường lực (tempered glass) là loại kính được xử lý nhiệt độ cao và làm nguội nhanh, 
      tạo ra ứng suất nén trên bề mặt kính, làm tăng độ bền gấp 5-7 lần so với kính thường. 
      Khi vỡ, kính cường lực vỡ thành các mảnh nhỏ không sắc cạnh, an toàn cho người sử dụng.
      
      Kính cường lực được sử dụng rộng rãi trong các tòa nhà cao tầng, cửa kính, 
      vách kính, lan can, cầu thang, và nhiều ứng dụng khác yêu cầu tính an toàn cao.
    `,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574879988113-848bd8838f95?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Độ dày": "3mm - 19mm",
      "Kích thước tối đa": "2440mm x 3660mm",
      "Độ bền": "5-7 lần kính thường",
      "Nhiệt độ chịu đựng": "-50°C đến 200°C",
      "Tiêu chuẩn": "TCVN 7455:2013",
    },
  },
  {
    id: "2",
    slug: "kinh-hop",
    name: "Kính Hộp (IGU)",
    category: "Kính Hộp",
    description: "Kính hộp cách nhiệt, cách âm hiệu quả",
    fullDescription: `
      Kính hộp (Insulated Glass Unit - IGU) là sản phẩm được cấu tạo từ 2 hoặc nhiều lớp kính 
      cách nhau bởi khoảng không khí hoặc khí trơ (Argon, Krypton), được niêm phong bằng keo chuyên dụng.
      
      Kính hộp có khả năng cách nhiệt, cách âm vượt trội, giúp tiết kiệm năng lượng 
      và tạo không gian yên tĩnh. Sản phẩm phù hợp cho các tòa nhà văn phòng, 
      khách sạn, khu dân cư cao cấp.
    `,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Cấu trúc": "2-3 lớp kính",
      "Khoảng cách": "6mm - 20mm",
      "Hệ số truyền nhiệt (U-value)": "< 1.5 W/m²K",
      "Cách âm": "Lên đến 45 dB",
      "Tiêu chuẩn": "TCVN 7458:2013",
    },
  },
  {
    id: "3",
    slug: "kinh-an-toan",
    name: "Kính An Toàn",
    category: "Kính An Toàn",
    description: "Kính an toàn laminated, không vỡ thành mảnh sắc",
    fullDescription: `
      Kính an toàn (Laminated Glass) là loại kính được chế tạo từ 2 hoặc nhiều lớp kính 
      dán với nhau bằng lớp phim PVB (Polyvinyl Butyral) ở giữa.
      
      Khi vỡ, các mảnh kính vẫn dính chặt vào lớp phim, không rơi xuống, 
      đảm bảo an toàn tối đa. Kính an toàn còn có khả năng chống đột nhập, 
      chống tiếng ồn và chống tia UV.
    `,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Cấu trúc": "2 lớp kính + PVB",
      "Độ dày": "6.38mm - 24mm",
      "Chống đột nhập": "Cấp độ P1A-P8A",
      "Truyền ánh sáng": "> 85%",
      "Tiêu chuẩn": "TCVN 7363:2007",
    },
  },
  {
    id: "4",
    slug: "kinh-phan-quang",
    name: "Kính Phản Quang",
    category: "Kính Đặc Biệt",
    description: "Kính phản quang, chống nắng và tiết kiệm năng lượng",
    fullDescription: `
      Kính phản quang (Reflective Glass) được phủ một lớp oxit kim loại mỏng trên bề mặt, 
      tạo khả năng phản chiếu ánh sáng và nhiệt, giúp giảm hấp thụ nhiệt từ mặt trời.
      
      Kính phản quang giúp giảm chi phí điều hòa không khí, 
      tạo vẻ đẹp hiện đại cho công trình và bảo vệ nội thất khỏi ánh nắng trực tiếp.
    `,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Độ dày": "3mm - 12mm",
      "Hệ số hấp thụ nhiệt (SHGC)": "0.2 - 0.5",
      "Hệ số truyền ánh sáng": "8% - 40%",
      "Độ phản quang": "10% - 60%",
      "Tiêu chuẩn": "ASTM C1376",
    },
  },
  {
    id: "5",
    slug: "kinh-chong-nang",
    name: "Kính Chống Nắng Low-E",
    category: "Kính Đặc Biệt",
    description: "Kính Low-E chống nắng, tiết kiệm năng lượng cao cấp",
    fullDescription: `
      Kính Low-E (Low Emissivity) được phủ một lớp màng kim loại siêu mỏng, 
      có khả năng phản xạ bức xạ nhiệt hồng ngoại, giữ nhiệt trong mùa đông 
      và chặn nhiệt vào mùa hè.
      
      Kính Low-E là giải pháp tối ưu cho các công trình xanh, 
      giúp giảm chi phí năng lượng và bảo vệ môi trường.
    `,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    specifications: {
      "Độ dày": "4mm - 19mm",
      "Hệ số truyền nhiệt (U-value)": "1.0 - 1.8 W/m²K",
      "Hệ số hấp thụ nhiệt (SHGC)": "0.2 - 0.6",
      "Độ phát xạ (Emissivity)": "< 0.15",
      "Tiêu chuẩn": "EN 1096",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = Array.from(new Set(products.map((p) => p.category)));

