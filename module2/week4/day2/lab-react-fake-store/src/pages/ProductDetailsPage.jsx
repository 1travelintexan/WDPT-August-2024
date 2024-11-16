import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
  const { productId } = useParams();

  useEffect(() => {
    // To fetch the product details, set up an effect with the `useEffect` hook:
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("here is the data", data);
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="ProductDetailsPage">
      <h2>{product.title}</h2>
      {/* Render product details here */}
    </div>
  );
}

export default ProductDetailsPage;
