"use client";

import { useState, useMemo } from "react";
import { projects, getProjectsByProduct } from "@/lib/data/projects";
import Card from "@/components/Card";
import FilterBar from "@/components/FilterBar";
import { Project } from "@/lib/data/projects";

export default function ProjectsPage() {
  const [filters, setFilters] = useState({ search: "", product: "" });

  const filteredProjects = useMemo(() => {
    let filtered: Project[] = [...projects];

    if (filters.search) {
      filtered = filtered.filter((project) =>
        project.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.product) {
      const productProjects = getProjectsByProduct(filters.product);
      filtered = filtered.filter((project) =>
        productProjects.some((p) => p.id === project.id)
      );
    }

    return filtered;
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Dự án tiêu biểu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Các dự án lớn đã được chúng tôi thực hiện thành công
          </p>
        </div>

        <FilterBar onFilterChange={setFilters} />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Không tìm thấy dự án nào.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  title={project.name}
                  description={`${project.location} • ${project.investor}`}
                  image={project.image}
                  imageAlt={project.name}
                  href={`/projects/${project.slug}`}
                >
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Hoàn thành:</span>{" "}
                      {new Date(project.completionDate).toLocaleDateString("vi-VN")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Hiển thị {filteredProjects.length} / {projects.length} dự án
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

