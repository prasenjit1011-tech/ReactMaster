import { useState } from "react";
import { Product } from "../components/product/types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  const addProduct = (data: Omit<Product, "id">) => {
    const newProduct: Product = {
      id: Date.now(),
      ...data,
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (updated: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
    setEditing(null);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const editProduct = (product: Product) => {
    setEditing(product);
  };

  return {
    products,
    editing,
    addProduct,
    updateProduct,
    deleteProduct,
    editProduct,
  };
};