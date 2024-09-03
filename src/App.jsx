import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import HomePage from "./pages/home/home";
import CartPage from "./pages/cart/Cart";
import OrderPage from "./pages/order/Order";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
