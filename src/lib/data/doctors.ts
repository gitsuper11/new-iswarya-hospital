export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  qualifications: string[];
  experience: number;
  slug: string;
  phone: string;
  email: string;
  rating: number;
  reviews: number;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Muthukumaran",
    specialty: "Cardio-Thoracic & Vascular Surgery",
    bio: "Expert in advanced cardiac procedures with 20+ years of experience",
    image: "https://iswarya.com/wp-content/uploads/2025/07/Dr.-muthukumaran-iswarya.webp",
    qualifications: ["MBBS", "MS Cardiothoracic Surgery", "Fellowship in Vascular Surgery"],
    experience: 20,
    slug: "dr-muthukumaran",
    phone: "+91 044 2025 2025",
    email: "muthukumaran@iswarya.com",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: "2",
    name: "Dr. Vivek A N",
    specialty: "Orthopaedic & Joint Replacement",
    bio: "Specialist in joint replacement and arthroscopy procedures",
    image: "https://iswarya.com/wp-content/uploads/2025/07/dr-VIVEK.webp",
    qualifications: ["MBBS", "MS Orthopedics", "Fellowship in Joint Replacement"],
    experience: 18,
    slug: "dr-vivek-a-n",
    phone: "+91 044 2025 2025",
    email: "vivek@iswarya.com",
    rating: 4.7,
    reviews: 142,
  },
  {
    id: "3",
    name: "Dr. Pavithra Thamizharasan",
    specialty: "Internal Medicine & Diabetes",
    bio: "Expert in diabetes management and internal medicine",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/10/dr-pavithra-thamizharasan.webp?resize=252%2C300&ssl=1",
    qualifications: ["MBBS", "MD Internal Medicine", "Diploma in Diabetology"],
    experience: 15,
    slug: "dr-pavithra-thamizharasan",
    phone: "+91 044 2025 2025",
    email: "pavithra@iswarya.com",
    rating: 4.6,
    reviews: 128,
  },
  {
    id: "4",
    name: "Dr. V. Mridulla Abirami",
    specialty: "Psychiatry",
    bio: "Specialized in mental health and psychiatric care",
    image: "https://iswarya.com/wp-content/uploads/2025/07/dr-MIRUTHULA.webp",
    qualifications: ["MBBS", "MD Psychiatry", "Diploma in Psychotherapy"],
    experience: 12,
    slug: "dr-v-mridulla-abirami",
    phone: "+91 044 2025 2025",
    email: "mridulla@iswarya.com",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "5",
    name: "Dr. Sneha Tamilselvan",
    specialty: "Dermatology",
    bio: "Expert in skin care and dermatological treatments",
    image: "https://iswarya.com/wp-content/uploads/2025/07/dr-SNEHA.webp",
    qualifications: ["MBBS", "MD Dermatology", "Fellowship in Cosmetic Dermatology"],
    experience: 14,
    slug: "dr-sneha-tamilselvan",
    phone: "+91 044 2025 2025",
    email: "sneha@iswarya.com",
    rating: 4.7,
    reviews: 134,
  },
  {
    id: "6",
    name: "Dr. S. Balasubramaniam",
    specialty: "Neurology",
    bio: "Specialist in neurological disorders and brain health",
    image: "https://iswarya.com/wp-content/uploads/2025/07/dr-Balasubramaniam.webp",
    qualifications: ["MBBS", "MD Neurology", "Fellowship in Neuroradiology"],
    experience: 19,
    slug: "dr-s-balasubramaniam",
    phone: "+91 044 2025 2025",
    email: "balasubramaniam@iswarya.com",
    rating: 4.8,
    reviews: 167,
  },
];
