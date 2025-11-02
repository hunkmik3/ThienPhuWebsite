export interface Certification {
  id: string;
  name: string;
  type: string;
  issueDate: string;
  expiryDate?: string;
  issuingOrganization: string;
  description: string;
  image: string;
  fileUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: "1",
    name: "ISO 9001:2015",
    type: "Quality Management",
    issueDate: "2022-01-15",
    expiryDate: "2025-01-15",
    issuingOrganization: "Bureau Veritas",
    description: "Hệ thống quản lý chất lượng",
    image: "https://via.placeholder.com/400x500/0066CC/FFFFFF?text=ISO+9001",
    fileUrl: "#",
  },
  {
    id: "2",
    name: "TCVN 7455:2013",
    type: "National Standard",
    issueDate: "2022-03-20",
    issuingOrganization: "TCVN",
    description: "Kính cường lực - Yêu cầu kỹ thuật",
    image: "https://via.placeholder.com/400x500/009900/FFFFFF?text=TCVN",
    fileUrl: "#",
  },
  {
    id: "3",
    name: "ANSI Z97.1",
    type: "Safety Standard",
    issueDate: "2022-05-10",
    issuingOrganization: "ANSI",
    description: "Tiêu chuẩn an toàn kính",
    image: "https://via.placeholder.com/400x500/CC0000/FFFFFF?text=ANSI",
    fileUrl: "#",
  },
  {
    id: "4",
    name: "EN 1096",
    type: "European Standard",
    issueDate: "2022-06-15",
    issuingOrganization: "CEN",
    description: "Tiêu chuẩn kính xây dựng châu Âu",
    image: "https://via.placeholder.com/400x500/660099/FFFFFF?text=EN",
    fileUrl: "#",
  },
  {
    id: "5",
    name: "CE Marking",
    type: "European Conformity",
    issueDate: "2022-08-20",
    issuingOrganization: "EU",
    description: "Dấu CE cho sản phẩm xuất khẩu châu Âu",
    image: "https://via.placeholder.com/400x500/FF6600/FFFFFF?text=CE",
    fileUrl: "#",
  },
];

