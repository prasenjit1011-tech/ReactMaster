import { useCallback } from "react";
import Form from "./Form";
import List from "./List";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "./types";

function ProductComponent(): JSX.Element {
  const {
    products,
    editing,
    addProduct,
    updateProduct,
    deleteProduct,
    editProduct,
  } = useProducts();

  const handleSubmit = useCallback(
    (data: Omit<Product, "id"> | Product) => {
      if (editing) {
        updateProduct(data as Product);
      } else {
        addProduct(data as Omit<Product, "id">);
      }
    },
    [editing, addProduct, updateProduct]
  );

  return (
    <div className="right">
      <h4>Product CRUD</h4>

      <Form
        onSubmit={handleSubmit}
        editing={editing}
      />

      <List
        products={products}
        onDelete={deleteProduct}
        onEdit={editProduct}
      />
    </div>
  );
}

export default ProductComponent;