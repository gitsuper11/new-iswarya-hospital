export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "1",
    name: "Consultations",
    description: "Expert medical advice and diagnosis",
    image: "https://iswarya.com/wp-content/uploads/2025/06/consulation-room.jpeg",
    icon: "fas fa-stethoscope",
    slug: "consultations",
  },
  {
    id: "2",
    name: "Lab Tests",
    description: "Comprehensive diagnostic testing",
    image: "https://iswarya.com/wp-content/uploads/2025/06/DSC00197.jpg",
    icon: "fas fa-flask",
    slug: "lab-tests",
  },
  {
    id: "3",
    name: "Vaccinations",
    description: "Immunization and preventive care",
    image: "https://iswarya.com/wp-content/uploads/2025/06/DSC00328.jpg",
    icon: "fas fa-syringe",
    slug: "vaccinations",
  },
  {
    id: "4",
    name: "Scans & Procedures",
    description: "Advanced medical imaging",
    image: "https://iswarya.com/wp-content/uploads/2025/06/DSC00293.jpg",
    icon: "fas fa-x-ray",
    slug: "scans-procedures",
  },
  {
    id: "5",
    name: "Emergency Services",
    description: "24/7 emergency and trauma care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=150&q=80",
    icon: "fas fa-ambulance",
    slug: "emergency-services",
  },
  {
    id: "6",
    name: "ICU Services",
    description: "Advanced critical care units",
    image: "https://images.unsplash.com/photo-1631217314830-4ec16a45caf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=150&q=80",
    icon: "fas fa-hospital",
    slug: "icu-services",
  },
];
