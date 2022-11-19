import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Header from "./components/Header/Header";
import AddProduct from "./pages/AddProduct/AddProduct";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import AuthProvider from "./Context/AuthContext";
import Compra from "./pages/Compra/Compra";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/producto/editar/:id" element={<UpdateProduct />} />
            <Route path="/compra/:id" element={<Compra />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
