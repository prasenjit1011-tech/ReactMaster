import { useState, useEffect } from "react";
import { Product } from "./types";

type Props = {
  onSubmit: (product: any) => void;
  editing: Product | null;
};

const ProductForm = ({ onSubmit, editing }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setPrice(editing.price);
    } else {
      setName("");
      setPrice(0);
    }
  }, [editing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editing) {
      onSubmit({ id: editing.id, name, price });
    } else {
      onSubmit({ name, price });
    }

    setName("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
        placeholder="Price"
      />
      <button type="submit">
        {editing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ProductForm;