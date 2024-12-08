"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    subCategory: "",
    price: "",
    sizes: [],
    bestseller: false,
    images: [],
  });

  const sizes = ["SM", "MD", "LG", "XL", "XXL"]; // Available sizes

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "sizes") {
      setFormData((prev) => ({
        ...prev,
        sizes: checked
          ? [...prev.sizes, value] // Add size
          : prev.sizes.filter((size) => size !== value), // Remove size
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const files = Array.from(e.target.files);
      setFormData((prev) => ({ ...prev, images: files }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="max-w-xl p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/uploading.png"
            alt="Example"
            width={100}
            height={0}
          />
          <Image
            src="/images/uploading.png"
            alt="Example"
            width={100}
            height={0}
          />
          <Image
            src="/images/uploading.png"
            alt="Example"
            width={100}
            height={0}
          />
          <Image
            src="/images/uploading.png"
            alt="Example"
            width={100}
            height={0}
          />
        </div>
        <div>
          <label className="block text-xl font-semibold mb-1 text-gray-600">
            اسم المنتج
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md placeholder:text-slate-600 placeholder:font-semibold border border-gray-300"
            placeholder="ادخل اسم المنتج"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-xl font-semibold mb-1 text-gray-600">
            وصف المنتج
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md placeholder:text-slate-600 placeholder:font-semibold border border-gray-300"
            placeholder="ادخل وصف للمنتج"
          />
        </div>
        <div className="flex items-center justify-between">
          {/* Category */}
          <div>
            <label className="block text-xl font-semibold mb-1 text-gray-600">
              فئة المنتج
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-[100px] px-4 py-2 border font-semibold rounded-md text-slate-600 border border-gray-300"
            >
              <option value="Men">رجال</option>
              <option value="Kids">اطفال</option>
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label className="block text-xl font-semibold mb-1 text-gray-600">
              الفئة الفرعية
            </label>
            <select
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
              className="w-[150px] px-4 py-2 border font-semibold rounded-md text-slate-600 border border-gray-300"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-xl font-semibold mb-1 text-gray-600">
              السعر
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-28 px-4 py-2 border rounded-md placeholder:text-slate-600 placeholder:font-semibold border border-gray-300"
              placeholder="25"
            />
          </div>
        </div>

        {/* Sizes Selector */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Sizes</label>
          <div className="flex flex-wrap gap-4">
            {sizes.map((size) => (
              <label key={size} className="cursor-pointer">
                <input
                  type="checkbox"
                  name="sizes"
                  value={size}
                  className="hidden"
                  checked={formData.sizes.includes(size)}
                  onChange={handleInputChange}
                />
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
                    formData.sizes.includes(size)
                      ? "bg-pink-300 text-slate-600 scale-105 shadow-md  "
                      : "bg-blue-100 text-slate-600 shadow-blue-300"
                  }`}
                >
                  {size}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="bestseller"
              checked={formData.bestseller}
              onChange={handleInputChange}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-slate-600 font-semibold text-sm">Add to Bestseller</span>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="text-md font-semibold bg-black text-white py-3 px-10 "
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
