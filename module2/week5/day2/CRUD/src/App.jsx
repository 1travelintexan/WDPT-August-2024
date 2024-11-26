import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { ProductListPage } from "./components/ProductListPage";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProductPage } from "./components/CreateProductPage";
import NotFound from "./components/NotFound";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Spinner from "react-bootstrap/Spinner";
import MyOutlet from "./components/MyOutlet";
function App() {
  const [loading, setLoading] = useState(true);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Spinner animation="grow" variant="info" />;
  }

  return (
    <main className={darkTheme ? "dark" : ""}>
      <h1>CRUD Day!</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>
      <Routes>
        <Route
          path="/"
          element={
            <MyOutlet>
              <HomePage />
            </MyOutlet>
          }
        />
        <Route
          path="/products"
          element={
            <MyOutlet>
              <ProductListPage />
            </MyOutlet>
          }
        />
        <Route path="/posts/details/:postId" element={<ProductDetail />} />
        {/* this is the page to create a new product   */}
        <Route path="/create-post" element={<CreateProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
