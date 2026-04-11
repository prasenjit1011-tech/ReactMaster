import { useCallback } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import List from "./List";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "./types";
import type { RootState } from "../../redux/store";

function ProductComponent(): JSX.Element {
  const clickCount = useSelector((state: RootState) => state.clickCnt.count);
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
      <p className="clickBtn">
        Button clicks: {clickCount}
      </p>

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