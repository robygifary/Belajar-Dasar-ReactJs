import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  // cth: script useEffect ini di rekomendasikan utk integrasi disistem eksternal seperti ajax, api / component diluar reactjs
  useEffect(() => {
    console.info("call use effect");
    async function fetchProduct() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }
    if (load) {
      fetchProduct();
    }

    return () => {
      console.log("Product List component unmounted");
    };
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>List Product</button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
}
