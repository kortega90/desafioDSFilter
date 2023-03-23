import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../model/product";
import CardFilter from "../CardFilter";
import ListingCard from "../ListingCard";
import * as productService from '../../services/product-service';
import { ContextCartCount } from "../../utils/context-cart";

export default function ListingBody() {
  const [valueMin, setValueMin] = useState<number>(0);
  const [valueMax, setValueMax] = useState<number>(Number.MAX_VALUE);

  const [prod, setProd] = useState<ProductDTO[]>(productService.findByPrice(valueMin, valueMax));
  const{contextCartCount, setContextCartCount} = useContext(ContextCartCount);

  useEffect(() => {
    const newProd = productService.findByPrice(valueMin, valueMax);
    setProd(newProd);
    setContextCartCount(newProd.length);
    console.log(contextCartCount);
  }, [valueMin,valueMax]);

  function handleFilter(minValue: number, maxValue: number) {
    setValueMin(minValue);
    setValueMax(maxValue);
  }

  return (
    <>
      <CardFilter onFilter={handleFilter} />
      <ListingCard Prod ={prod} />
    </>
  );
}
