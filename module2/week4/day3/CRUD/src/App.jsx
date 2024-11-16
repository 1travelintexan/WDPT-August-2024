import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { ProductListPage } from "./components/ProductListPage";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProductPage } from "./components/CreateProductPage";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <h1>CRUD Day!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/posts/details/:postId" element={<ProductDetail />} />
        {/* this is the page to create a new product  */}
        <Route path="/create-post" element={<CreateProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
