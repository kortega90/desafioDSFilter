import { useState } from "react";
import CardFilter from "../CardFilter";
import ListingCard from "../ListingCard";

export default function ListingBody() {
  const [valueMin, setValueMin] = useState<number>(0);
  const [valueMax, setValueMax] = useState<number>(Number.MAX_VALUE);
  
  function handleFilter(minValue:number, maxValue:number){
    setValueMin(minValue);
    setValueMax(maxValue);
  }

  return (
    <>
      <CardFilter onFilter={handleFilter}/>
       <ListingCard min={Number(valueMin)} max ={Number(valueMax)}/>
    </>
  );
}
