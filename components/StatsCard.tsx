interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatsCard({ number, label, icon }: StatsCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
          {number}
        </div>
        <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
}

