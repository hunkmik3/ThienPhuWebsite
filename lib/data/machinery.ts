export interface Machinery {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  specifications: {
    [key: string]: string;
  };
}

export const machinery: Machinery[] = [
  {
    id: "1",
    name: "Lò nung kính cường lực",
    description: "Lò nung hiện đại với công nghệ điều khiển nhiệt độ chính xác",
    features: [
      "Điều khiển nhiệt độ tự động",
      "Năng suất cao",
      "Tiết kiệm năng lượng",
      "Chất lượng kính đồng đều",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    specifications: {
      "Nhiệt độ tối đa": "700°C",
      "Kích thước kính": "Lên đến 2440mm x 3660mm",
      "Công suất": "500 m²/ngày",
      "Hãng sản xuất": "Germany",
    },
  },
  {
    id: "2",
    name: "Máy cắt kính CNC",
    description: "Máy cắt kính tự động với độ chính xác cao",
    features: [
      "Cắt tự động theo file CAD",
      "Độ chính xác ±0.1mm",
      "Tốc độ cắt nhanh",
      "Cắt được nhiều hình dạng phức tạp",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    specifications: {
      "Kích thước bàn": "3000mm x 6000mm",
      "Độ chính xác": "±0.1mm",
      "Tốc độ cắt": "100m/phút",
      "Hãng sản xuất": "Italy",
    },
  },
  {
    id: "3",
    name: "Máy mài cạnh kính",
    description: "Máy mài cạnh tự động cho kính phẳng và kính cong",
    features: [
      "Mài cạnh tự động",
      "Nhiều loại góc mài",
      "Chất lượng bề mặt cao",
      "Năng suất lớn",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    specifications: {
      "Độ dày kính": "3mm - 25mm",
      "Góc mài": "45° - 90°",
      "Độ bóng bề mặt": "Ra < 0.1μm",
      "Hãng sản xuất": "Italy",
    },
  },
  {
    id: "4",
    name: "Máy dán kính hộp tự động",
    description: "Dây chuyền sản xuất kính hộp IGU tự động hóa",
    features: [
      "Tự động hóa hoàn toàn",
      "Chất lượng niêm phong cao",
      "Năng suất lớn",
      "Tiết kiệm nguyên liệu",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    specifications: {
      "Kích thước kính": "Lên đến 3000mm x 6000mm",
      "Năng suất": "200 đơn vị/giờ",
      "Công nghệ": "Laser Alignment",
      "Hãng sản xuất": "Switzerland",
    },
  },
  {
    id: "5",
    name: "Máy phủ Low-E",
    description: "Hệ thống phủ màng Low-E tiên tiến",
    features: [
      "Phủ màng đồng đều",
      "Chất lượng cao",
      "Tiết kiệm năng lượng",
      "Tuân thủ tiêu chuẩn quốc tế",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    specifications: {
      "Kích thước kính": "Lên đến 2440mm x 3660mm",
      "Độ phát xạ": "< 0.15",
      "Công nghệ": "Magnetron Sputtering",
      "Hãng sản xuất": "Germany",
    },
  },
];

