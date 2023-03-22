import Card from '../card';
import './styles.css'
import * as productService from '../../services/product-service';

type Props = {
  min: number;
  max:number;
}

export default function ListingCard({min, max }: Props) {

  return (
    <>
      <section className="container mt20">
        <div className="section-card-lister ">
          {
            productService.findByPrice(min,max).map(product => <Card key={product.id} product={product}/>)
          }
        </div>
      </section>
    </>
  );
}
