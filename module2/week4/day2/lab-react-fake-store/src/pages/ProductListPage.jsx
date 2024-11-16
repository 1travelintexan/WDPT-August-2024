import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map((oneProduct) => {
        return (
          <Link key={oneProduct.id} to={`/product/details/${oneProduct.id}`}>
            <div className="item-card">
              <img
                src={oneProduct.image}
                alt={oneProduct.title}
                style={{ height: "100px" }}
              />
              <h6>{oneProduct.title}</h6>
              <h6>{oneProduct.category}</h6>
              <h6>{oneProduct.price}</h6>
              <p>{oneProduct.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductListPage;
