export interface Treatment {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  slug: string;
  procedures: string[];
  doctors: string[];
}

export const treatments: Treatment[] = [
  {
    id: "1",
    name: "Cancer Care / Oncology",
    description: "Comprehensive cancer treatment with advanced therapies.",
    fullDescription: "Our oncology department provides cutting-edge cancer treatment including chemotherapy, radiation therapy, immunotherapy, and CAR T-cell therapy. We have a multidisciplinary team of oncologists, surgeons, and supportive care specialists.",
    icon: "fas fa-microscope",
    image: "https://iswarya.com/wp-content/uploads/2025/07/ONCOLOGY.webp",
    slug: "cancer-care-oncology",
    procedures: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "CAR T-Cell Therapy", "Surgery"],
    doctors: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Cardiac Sciences",
    description: "Advanced heart care and surgical procedures.",
    fullDescription: "Our cardiac sciences department specializes in comprehensive heart care including diagnosis, treatment of heart diseases, cardiac surgery, and post-operative care. We use the latest cardiac imaging and intervention techniques.",
    icon: "fas fa-heartbeat",
    image: "https://iswarya.com/wp-content/uploads/2025/07/Cardiac-Sciences.webp",
    slug: "cardiac-sciences",
    procedures: ["Angioplasty", "Bypass Surgery", "Valve Replacement", "Device Implantation"],
    doctors: ["1", "4", "6"],
  },
  {
    id: "3",
    name: "Orthopaedics & Joint Replacement",
    description: "Bone and joint care solutions.",
    fullDescription: "Specialized care for orthopedic conditions including joint replacement, arthroscopy, fracture management, and sports medicine. Our team uses minimally invasive techniques for faster recovery.",
    icon: "fas fa-bone",
    image: "https://iswarya.com/wp-content/uploads/2025/07/ORTHO.webp",
    slug: "orthopaedics-joint-replacement",
    procedures: ["Joint Replacement", "Arthroscopy", "Fracture Management", "Sports Medicine"],
    doctors: ["2", "5", "6"],
  },
  {
    id: "4",
    name: "Neurology",
    description: "Brain and nervous system disorders care.",
    fullDescription: "Comprehensive neurological care including stroke management, neurosurgery, epilepsy treatment, and movement disorders. We have 24/7 stroke unit facilities.",
    icon: "fas fa-brain",
    image: "https://iswarya.com/wp-content/uploads/2025/06/NEUROLOGY.webp",
    slug: "neurology",
    procedures: ["Stroke Care", "Neurosurgery", "Epilepsy Treatment", "Movement Disorder Management"],
    doctors: ["6", "1", "3"],
  },
  {
    id: "5",
    name: "Obstetrics & Gynaecology",
    description: "Women's health and maternity services.",
    fullDescription: "Complete women's health services including obstetrics, gynecology, fertility services, and high-risk pregnancy management with state-of-the-art neonatal ICU.",
    icon: "fas fa-female",
    image: "https://iswarya.com/wp-content/uploads/2025/06/OBSTETRICS-GYNECOLOGY.webp",
    slug: "obstetrics-gynaecology",
    procedures: ["Maternity Care", "Cesarean Section", "Fertility Treatment", "High-Risk Pregnancy"],
    doctors: ["3", "4", "5"],
  },
  {
    id: "6",
    name: "Gastroenterology",
    description: "Digestive system disorders diagnosis and treatment.",
    fullDescription: "Expert diagnosis and treatment of digestive system disorders including endoscopy, colonoscopy, and management of liver diseases.",
    icon: "fas fa-stomach",
    image: "https://iswarya.com/wp-content/uploads/2025/06/GASTRO-ENTEROLOGY.webp",
    slug: "gastroenterology",
    procedures: ["Endoscopy", "Colonoscopy", "Liver Disease Management", "GI Surgery"],
    doctors: ["2", "5", "3"],
  },
];
