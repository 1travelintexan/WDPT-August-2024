import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { ProductListPage } from "./components/ProductListPage";
import { ProductDetail } from "./components/ProductDetail";
import { CreateProductPage } from "./components/CreateProductPage";
import NotFound from "./components/NotFound";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
function App() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  console.log("is the theme dark?", darkTheme);

  return (
    <main className={darkTheme ? "dark" : ""}>
      <h1>CRUD Day!</h1>
      <button onClick={() => setDarkTheme(!darkTheme)}>
        {darkTheme ? "Light Theme" : "Dark Theme"}
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/posts/details/:postId" element={<ProductDetail />} />
        {/* this is the page to create a new product  */}
        <Route path="/create-post" element={<CreateProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
