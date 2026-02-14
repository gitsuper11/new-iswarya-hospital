export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  testimonial: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "A.K.",
    role: "Cardiac Patient",
    image: "https://iswarya.com/wp-content/uploads/2025/05/cropentropycstinysrgbfitmaxfmjpgixidM3w1Mzc1fDB8MXxzZWFyY2h8MXx8bWFsZXxlbnwwfHx8fDE3NDgyNjQ2NjN8MAixlibrb-4.1.0q80w1080type.jpg",
    testimonial: "Iswarya Hospital provided exceptional care during my recovery. The doctors and staff were incredibly supportive and professional. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Mrs. P.V.",
    role: "Orthopedic Patient",
    image: "https://iswarya.com/wp-content/uploads/2024/10/testimonial-icon-female.png",
    testimonial: "From diagnosis to treatment, the experience was seamless. The facilities are top-notch, and the nursing staff is very caring.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mr. R.S.",
    role: "General Surgery",
    image: "https://iswarya.com/wp-content/uploads/2024/10/testimonial-icon-male.png",
    testimonial: "My surgery at Iswarya Hospital was a success. The doctors explained everything clearly, and the recovery process was managed excellently.",
    rating: 5,
  },
  {
    id: "4",
    name: "Parent of S.K.",
    role: "Pediatric Care",
    image: "https://iswarya.com/wp-content/uploads/2025/05/cropentropycstinysrgbfitmaxfmjpgixidM3w1Mzc1fDB8MXxzZWFyY2h8MXx8bWFsZXxlbnwwfHx8fDE3NDgyNjQ2NjN8MAixlibrb-4.1.0q80w1080type.jpg",
    testimonial: "The pediatric department here is wonderful. My child felt comfortable, and the doctor was very gentle and understanding.",
    rating: 5,
  },
];
