interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatsCard({ number, label, icon }: StatsCardProps) {
  return (
    <div className="text-center p-8 bg-white border border-gray-200 hover:border-gray-300 transition-colors">
      {icon && (
        <div className="mb-4 flex justify-center text-3xl">
          {icon}
        </div>
      )}
      <div className="text-4xl md:text-5xl font-light text-gray-900 mb-3">
        {number}
      </div>
      <div className="text-gray-600 text-sm uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

