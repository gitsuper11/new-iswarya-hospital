import { Doctor } from '@/lib/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="w-[12rem] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image Section (60%) */}
      <div className="h-40 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Text Section (40%) */}
      <div className="flex-1 p-4 text-center bg-blue-50 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold text-blood-red line-clamp-2">{doctor.name}</h3>
          <p className="text-xs text-gray-600 font-medium mt-1 line-clamp-2">{doctor.specialty}</p>
        </div>

        <div className="mt-3 w-full bg-gradient-to-r from-[#FF0000] to-[#D00000] text-white px-3 py-2 rounded-lg text-xs font-medium text-center cursor-pointer">
          View Profile
        </div>
      </div>
    </div>
  );
}
