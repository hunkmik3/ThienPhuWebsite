export default function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Video
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Video nhà máy & hoạt động
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Khám phá quy trình sản xuất và hoạt động của nhà máy chúng tôi
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group hover-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <iframe
              className="w-full h-full relative z-0"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video nhà máy ThienPhu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

