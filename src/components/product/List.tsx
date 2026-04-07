import { Product } from "./types";

type Props = {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (product: Product) => void;
};

const ProductList = ({ products, onDelete, onEdit }: Props) => {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => onEdit(p)}>Edit</button>
          <button onClick={() => onDelete(p.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;