interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatsCard({ number, label, icon }: StatsCardProps) {
  return (
    <div className="text-center p-8 glass-card rounded-2xl hover-lift group relative overflow-hidden border border-gray-100">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 shimmer"></div>
      </div>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        {icon && (
          <div className="mb-6 flex justify-center transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
            <div className="relative">
              {icon}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-secondary-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        )}
        <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 group-hover:bg-[length:200%_auto] bg-[length:100%_auto] transition-all duration-500 inline-block animate-pulse" style={{
          backgroundPosition: '0% center',
          animation: 'none'
        }}>
          {number}
        </div>
        <div className="text-gray-700 font-semibold text-sm uppercase tracking-wider group-hover:text-gray-900 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );
}

