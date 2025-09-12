import React, { useState } from "react";
import "./ProductForm.css";
function ProductForm({ addProduct }) {
  const [form, setForm] = useState({ name: "", description: "", category: "", price: "", quantity: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.price || !form.quantity) return alert("Fill all required fields!");
    addProduct(form);
    setForm({ name: "", description: "", category: "", price: "", quantity: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" />
      <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" type="number" />
      <button type="submit">Add Product</button>
    </form>
  );
}
export default ProductForm;