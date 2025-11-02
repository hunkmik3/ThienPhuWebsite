export default function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Video nhà máy & hoạt động
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Khám phá quy trình sản xuất và hoạt động của nhà máy chúng tôi
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-gray-900">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video nhà máy ThienPhu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

