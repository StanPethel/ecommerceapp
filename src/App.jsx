import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Products from "./components/Products";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element= {<ProductList/>}/>
        <Route path="/products/" element= {<Products/>}/>
        <Route path="/product/:id" element= {<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
};

export default App;