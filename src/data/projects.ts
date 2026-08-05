export type ProjectLink = {
  label: { vn: string; en: string };
  url: string;
};

export type Project = {
  id: number;
  period: { vn: string; en: string };
  title: { vn: string; en: string };
  description: { vn: string; en: string };
  tech: string[];
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    period: { vn: "26/09/2024 - 05/01/2025", en: "26/09/2024 - 05/01/2025" },
    title: { vn: "Hệ thống đặt lịch tiêm vaccine", en: "Vaccine Appointment System" },
    description: {
      vn: "Website đặt lịch tiêm vaccine với giao diện thân thiện, quản lý lịch hẹn và thông tin người dùng.",
      en: "Vaccine appointment booking website with user-friendly UI, schedule management and user profiles.",
    },
    tech: ["ReactJS", "ASP.NET Core 6", "SQL Server"],
    featured: true,
    links: [
      { label: { vn: "Frontend", en: "Frontend" }, url: "https://github.com/Huckdj/reactjs_.netcore_VaccineProject_FE" },
      { label: { vn: "Backend", en: "Backend" }, url: "https://github.com/Huckdj/Vaccine_api_ManhDuc" },
      { label: { vn: "Live Demo", en: "Live Demo" }, url: "https://maduvaccinations.vercel.app/" },
    ],
  },
  {
    id: 2,
    period: { vn: "05/07/2024 - 24/09/2024", en: "05/07/2024 - 24/09/2024" },
    title: { vn: "Cửa hàng thiết bị gia dụng", en: "Home Appliance Store" },
    description: {
      vn: "Website thương mại điện tử bán thiết bị gia dụng với giỏ hàng và quản lý sản phẩm.",
      en: "E-commerce website for home appliances with cart and product management.",
    },
    tech: ["ReactJS", "NodeJS", "MySQL"],
    featured: true,
    links: [
      { label: { vn: "Source Code", en: "Source Code" }, url: "https://github.com/Huckdj/home-appliance-website-reactjs-nodels-mysql" },
    ],
  },
  {
    id: 3,
    period: { vn: "30/06/2024 - 30/07/2024", en: "30/06/2024 - 30/07/2024" },
    title: { vn: "Quản lý khách sạn", en: "Hotel Management" },
    description: {
      vn: "Hệ thống đặt phòng và quản lý khách sạn với dashboard quản trị.",
      en: "Hotel booking and management system with admin dashboard.",
    },
    tech: ["ReactJS", "NodeJS", "MySQL"],
    featured: true,
    links: [
      { label: { vn: "Source Code", en: "Source Code" }, url: "https://github.com/Huckdj/hotel_mustekeers_project" },
    ],
  },
  {
    id: 4,
    period: { vn: "20/04/2024 - 28/05/2024", en: "20/04/2024 - 28/05/2024" },
    title: { vn: "Cửa hàng đồng hồ cao cấp", en: "Luxury Watch Store" },
    description: {
      vn: "Website thương mại điện tử đồng hồ cao cấp với bộ lọc và tìm kiếm sản phẩm.",
      en: "Luxury watch e-commerce site with product filtering and search.",
    },
    tech: ["ReactJS", "NodeJS", "MySQL"],
    featured: true,
    links: [
      { label: { vn: "Source Code", en: "Source Code" }, url: "https://github.com/Huckdj/watchstore-reactjs-mysql-" },
    ],
  },
  {
    id: 5,
    period: { vn: "21/06/2023 - 25/08/2023", en: "21/06/2023 - 25/08/2023" },
    title: { vn: "Quản lý kho dược phẩm", en: "Pharmacy Warehouse System" },
    description: {
      vn: "Hệ thống quản lý kho dược phẩm sử dụng WinForms.",
      en: "Pharmaceutical warehouse management system using WinForms.",
    },
    tech: ["C#", "WinForms", "SQL Server"],
    featured: false,
  },
  {
    id: 6,
    period: { vn: "26/12/2022 - 09/01/2023", en: "26/12/2022 - 09/01/2023" },
    title: { vn: "Cửa hàng giày", en: "Shoe Store" },
    description: {
      vn: "Thiết kế và phát triển website cửa hàng giày bằng ASP.NET.",
      en: "Design and development of a shoe store website using ASP.NET.",
    },
    tech: ["ASP.NET", "C#"],
    featured: false,
  },
  {
    id: 7,
    period: { vn: "13/06/2022 - 15/08/2022", en: "13/06/2022 - 15/08/2022" },
    title: { vn: "Giới thiệu về rắn", en: "Snake Introduction" },
    description: {
      vn: "Thiết kế website giới thiệu về rắn sử dụng HTML và CSS.",
      en: "Website design introducing snakes using HTML and CSS.",
    },
    tech: ["HTML", "CSS"],
    featured: false,
  },
];
