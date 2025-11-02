"use client";

import { useState } from "react";
import { products } from "@/lib/data/products";

interface FilterBarProps {
  onFilterChange: (filters: { search: string; product: string }) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const productNames = Array.from(new Set(products.flatMap((p) => p.category)));

  const handleSearchChange = (value: string) => {
    setSearch(value);
    onFilterChange({ search: value, product: selectedProduct });
  };

  const handleProductChange = (value: string) => {
    setSelectedProduct(value);
    onFilterChange({ search: search, product: value });
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedProduct("");
    onFilterChange({ search: "", product: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Tìm kiếm theo tên dự án
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Nhập tên dự án..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
            Lọc theo sản phẩm
          </label>
          <select
            id="product"
            value={selectedProduct}
            onChange={(e) => handleProductChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Tất cả sản phẩm</option>
            {productNames.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="w-full px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Xóa bộ lọc
          </button>
        </div>
      </div>
    </div>
  );
}

