import Card from '../card';
import './styles.css'
import * as productService from '../../services/product-service';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../model/product';

type Props = {
  Prod:ProductDTO[];
};


export default function ListingCard({Prod }: Props) {

  return (
    <>
      <section className="container mt20">
        <div className="section-card-lister ">
          
          { Prod &&   
            Prod.map(product => <Card key={product.id} product={product}/>)
          }
        </div>
      </section>
    </>
  );
}
