export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Pediatric Orthopedic Care in OMR, Chennai: Complete Childhood Bone Health Guide",
    slug: "pediatric-orthopedic-care",
    author: "Dr. Vivek A N",
    date: "2024-12-15",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/hospital-story-2023-11-27-05-34-18-utc.jpg?resize=768%2C512&ssl=1",
    excerpt: "Our pediatric orthopaedic doctors at Iswarya Hospital in OMR, Chennai, give advanced care to youngsters suffering from bone and joint disorders.",
    content: "Pediatric orthopedic care is crucial for children's healthy development. Our specialized team uses the latest techniques to treat various bone and joint conditions in children, ensuring proper growth and development.",
    category: "Orthopedics",
    tags: ["pediatric", "orthopedic", "children"],
  },
  {
    id: "2",
    title: "Low Impact Orthopaedic Surgery in OMR, Chennai: Expert Technique Guide",
    slug: "low-impact-orthopedic-surgery",
    author: "Dr. Vivek A N",
    date: "2024-12-10",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/surgery-team-operating-in-a-surgical-room-2023-11-27-04-52-41-utc.jpg?resize=768%2C512&ssl=1",
    excerpt: "At Iswarya Hospital in OMR, Chennai, we specialize in Low Impact Orthopaedic Surgery, which is designed to deliver effective solutions while causing most interruption to your everyday life.",
    content: "Low impact orthopedic surgery represents the latest advancement in surgical techniques. These procedures minimize tissue damage, reduce recovery time, and provide better outcomes for patients.",
    category: "Surgery",
    tags: ["surgery", "orthopedic", "minimally-invasive"],
  },
  {
    id: "3",
    title: "Cardiologist Doctor Near Me in OMR, Chennai– Iswarya Hospital, Expert Cardiology Care",
    slug: "cardiologist-near-me",
    author: "Dr. Muthukumaran",
    date: "2024-12-05",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/a-female-doctor-works-at-desk-in-hospital-discussi-2024-09-19-01-11-20-utc.jpg?resize=300%2C200&ssl=1",
    excerpt: "Cardiology is the branch of medicine that deals with diagnosing, treating, and preventing heart-related conditions.",
    content: "Finding the right cardiologist is essential for your heart health. Our team of experienced cardiologists provides comprehensive cardiac care including diagnosis, treatment, and prevention of heart diseases.",
    category: "Cardiology",
    tags: ["cardiology", "heart-health", "doctor"],
  },
  {
    id: "4",
    title: "Emergency Angioplasty Services in OMR, Chennai: 24/7 Care Guide",
    slug: "emergency-angioplasty",
    author: "Dr. Muthukumaran",
    date: "2024-11-28",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/senior-man-visiting-doctor-2023-11-27-05-33-12-utc.jpg?resize=300%2C200&ssl=1",
    excerpt: "At Iswarya Hospital in OMR, Chennai, our experienced staff of cardiologists offers emergency angioplasty services 24 hours a day, seven days a week.",
    content: "Emergency angioplasty is a life-saving procedure for acute heart attacks. Our state-of-the-art cardiac catheterization lab is equipped to perform these procedures round the clock with excellent outcomes.",
    category: "Emergency",
    tags: ["angioplasty", "emergency", "cardiac"],
  },
  {
    id: "5",
    title: "Advanced Spine Treatment in OMR Chennai: Orthopaedic Expert Care",
    slug: "advanced-spine-treatment",
    author: "Dr. S. Balasubramaniam",
    date: "2024-11-20",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/suffering-middle-aged-indian-man-feeling-lower-bac-2023-11-27-04-57-11-utc.jpg?resize=768%2C512&ssl=1",
    excerpt: "At Iswarya Hospital in OMR, Chennai, our experienced orthopedic doctors provide specialized care for spine-related problems.",
    content: "Spine problems can significantly impact quality of life. We offer comprehensive spine care including diagnostics, conservative treatment, and advanced surgical interventions when necessary.",
    category: "Neurology",
    tags: ["spine", "orthopedic", "treatment"],
  },
  {
    id: "6",
    title: "Understanding PCOS: Symptoms, Causes, and Treatment for Women in Chennai",
    slug: "pcos-understanding",
    author: "Dr. Pavithra Thamizharasan",
    date: "2024-11-15",
    image: "https://i0.wp.com/iswarya.com/wp-content/uploads/2024/12/support-diagnosis-and-doctor-doing-a-consultation-2023-11-27-05-14-53-utc.jpg?resize=300%2C200&ssl=1",
    excerpt: "Polycystic Ovarian Syndrome (PCOS) is a common hormonal condition that affects women of reproductive age.",
    content: "PCOS affects millions of women worldwide. Understanding its symptoms, causes, and treatment options is crucial for managing this condition effectively and maintaining good health.",
    category: "Women's Health",
    tags: ["pcos", "women-health", "hormonal"],
  },
];
