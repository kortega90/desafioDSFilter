import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";
import "./styles.css";

export default function Header() {
  const { contextCartCount, setContextCartCount } =
    useContext(ContextCartCount);

  return (
    <header>
      <div className="header-content-container container">
        <h1 className="site-name">DSFilter</h1>
        <div>
          <p>{contextCartCount} produto(s)</p>
        </div>
      </div>
    </header>
  );
}
