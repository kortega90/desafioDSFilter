import { useContext, useEffect, useState } from "react";
import { ContextCartCount } from "../../utils/context-cart";
import * as productService from '../../services/product-service';
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
};

type Props = {
  onFilter?: Function;
};
export default function CardFilter({ onFilter }: Props) {

  const [formData, SetFormData] = useState<FormData>({});

  function handInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    SetFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (onFilter) {
      onFilter (formData.min || 0,formData.max || Number.MAX_VALUE);
    }
  }
  return (
    <section className="container mt20">
      <div className="section-card-filter ">
        <div className="ml20">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                name="min"
                value={formData.min || ""}
                type="text"
                placeholder="Preço mínimo"
                onChange={handInputChange}
              />
            </div>
            <div>
              <input
                name="max"
                value={formData.max || ""}
                type="text"
                placeholder="Preço máximo"
                onChange={handInputChange}
              />
            </div>
            <button>Filtrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
