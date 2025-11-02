import { projects } from "@/lib/data/projects";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
            Dự án nổi bật
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Các dự án tiêu biểu đã được chúng tôi thực hiện thành công
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.name}
              description={project.description}
              image={project.image}
              imageAlt={project.name}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Button href="/projects" variant="outline" className="px-8 py-3">
            Xem tất cả dự án
          </Button>
        </div>
      </div>
    </section>
  );
}

