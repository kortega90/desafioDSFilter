import { ProductDTO } from '../../model/product';
import './styles.css'

type Props = {
  product: ProductDTO;
}

export default function Card({ product }: Props) {
  return (
    
    <div className="card-container ml20 mr20">
      <div>
        <h2>{product.name}</h2>
      </div>
      <div>
        <h3>R$ {product.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}
