export interface Partner {
  id: string;
  name: string;
  region: string;
  logo: string;
  description?: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "AGC Glass North America",
    region: "canada",
    logo: "https://via.placeholder.com/200x100/0066CC/FFFFFF?text=AGC",
    description: "Đối tác chiến lược trong sản xuất kính cao cấp",
  },
  {
    id: "2",
    name: "Saint-Gobain Glass",
    region: "europe",
    logo: "https://via.placeholder.com/200x100/003366/FFFFFF?text=Saint-Gobain",
    description: "Hợp tác trong nghiên cứu và phát triển công nghệ kính",
  },
  {
    id: "3",
    name: "Guardian Glass",
    region: "usa",
    logo: "https://via.placeholder.com/200x100/FF6600/FFFFFF?text=Guardian",
    description: "Đối tác trong sản xuất kính Low-E và kính đặc biệt",
  },
  {
    id: "4",
    name: "Vitro Architectural Glass",
    region: "usa",
    logo: "https://via.placeholder.com/200x100/009900/FFFFFF?text=Vitro",
    description: "Hợp tác trong phân phối kính kiến trúc",
  },
  {
    id: "5",
    name: "Pilkington Glass",
    region: "europe",
    logo: "https://via.placeholder.com/200x100/660099/FFFFFF?text=Pilkington",
    description: "Đối tác công nghệ trong sản xuất kính an toàn",
  },
  {
    id: "6",
    name: "Cardinal Glass Industries",
    region: "usa",
    logo: "https://via.placeholder.com/200x100/CC0000/FFFFFF?text=Cardinal",
    description: "Hợp tác trong sản xuất kính hộp IGU",
  },
];

export function getPartnersByRegion(region: string): Partner[] {
  return partners.filter((p) => p.region === region);
}

export const regions = Array.from(new Set(partners.map((p) => p.region)));

