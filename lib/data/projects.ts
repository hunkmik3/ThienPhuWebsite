export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  investor: string;
  completionDate: string;
  description: string;
  image: string;
  images: string[];
  products: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "du-an-toa-nha-vincom",
    name: "Tòa nhà Vincom Center",
    location: "Hà Nội",
    investor: "Tập đoàn Vingroup",
    completionDate: "2023-06-15",
    description: "Dự án tòa nhà thương mại với hệ thống kính cường lực cao cấp",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    ],
    products: ["Kính cường lực", "Kính hộp"],
  },
  {
    id: "2",
    slug: "can-ho-the-signature",
    name: "Căn hộ The Signature",
    location: "TP. Hồ Chí Minh",
    investor: "Keppel Land",
    completionDate: "2023-09-20",
    description: "Dự án căn hộ cao cấp với cửa kính toàn phần",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    ],
    products: ["Kính an toàn", "Kính hộp"],
  },
  {
    id: "3",
    slug: "trung-tam-thuong-mai-aeon",
    name: "Trung tâm thương mại Aeon Mall",
    location: "Hà Nội",
    investor: "Aeon Vietnam",
    completionDate: "2022-12-10",
    description: "Trung tâm thương mại lớn với hệ thống kính hiện đại",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop",
    ],
    products: ["Kính cường lực", "Kính màu"],
  },
  {
    id: "4",
    slug: "khach-san-sofitel",
    name: "Khách sạn Sofitel Legend Metropole",
    location: "Hà Nội",
    investor: "Accor Hotels",
    completionDate: "2023-03-05",
    description: "Khách sạn 5 sao với kính cách âm cao cấp",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    ],
    products: ["Kính hộp", "Kính cách âm"],
  },
  {
    id: "5",
    slug: "toa-nha-keangnam",
    name: "Tòa nhà Keangnam",
    location: "Hà Nội",
    investor: "Keangnam Enterprises",
    completionDate: "2022-08-18",
    description: "Tòa nhà văn phòng với mặt tiền kính hiện đại",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    ],
    products: ["Kính cường lực", "Kính phản quang"],
  },
  {
    id: "6",
    slug: "resort-vinpearl",
    name: "Resort Vinpearl Phú Quốc",
    location: "Phú Quốc",
    investor: "Vingroup",
    completionDate: "2023-01-25",
    description: "Resort cao cấp với kính chống nắng và cách nhiệt",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
    ],
    products: ["Kính cường lực", "Kính chống nắng"],
  },
  {
    id: "7",
    slug: "benh-vien-bach-mai",
    name: "Bệnh viện Bạch Mai",
    location: "Hà Nội",
    investor: "Bộ Y tế",
    completionDate: "2022-11-30",
    description: "Bệnh viện với kính an toàn và cách âm",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop",
    ],
    products: ["Kính an toàn", "Kính hộp"],
  },
  {
    id: "8",
    slug: "san-bay-noi-bai",
    name: "Sân bay Nội Bài T3",
    location: "Hà Nội",
    investor: "ACV",
    completionDate: "2023-11-15",
    description: "Nhà ga hàng không với kính siêu lớn",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    ],
    products: ["Kính cường lực", "Kính siêu lớn"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByProduct(productName: string): Project[] {
  return projects.filter((p) => p.products.some((prod) => prod.includes(productName)));
}

