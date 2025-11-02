import { projects } from "@/lib/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full border border-primary-100">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Dự án nổi bật
            </span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-primary-600"></div>
            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
            <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary-600 to-transparent"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Các dự án tiêu biểu đã được chúng tôi thực hiện thành công
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                title={project.name}
                description={project.description}
                image={project.image}
                imageAlt={project.name}
                href={`/projects/${project.slug}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/projects" variant="outline" className="px-8 py-4 text-lg border-2 hover:border-primary-600">
            Xem tất cả dự án →
          </Button>
        </div>
      </div>
    </section>
  );
}

