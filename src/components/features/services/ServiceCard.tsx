import { Service } from '@/lib/data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="w-full h-32 md:h-40 bg-gray-100 overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-105 transition-transform" loading="lazy" />
      </div>

      <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-blood-red mb-2">{service.name}</h3>
          <p className="text-xs md:text-sm text-gray-700">{service.description}</p>
        </div>
        <div className="text-blood-red text-xs md:text-sm font-medium mt-3 inline-block hover:underline cursor-pointer">
          Learn More →
        </div>
      </div>
    </div>
  );
}
