import { projects } from "@/lib/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Dự án nổi bật
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
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

        <div className="text-center">
          <Button href="/projects" variant="outline">
            Xem tất cả dự án
          </Button>
        </div>
      </div>
    </section>
  );
}

