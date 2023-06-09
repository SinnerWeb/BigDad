import { Route, Routes } from "react-router-dom";
import Bar from "./components/bar/bar";
import Dessert from "./components/dessert/dessert";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Pizza from "./components/pizza/pizza";
import Cart from "./components/cart/cart";

function App() {
  return <div className="App">
    <Header/>
    
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="dessert" element={<Dessert/>} />
        <Route path="bar" element={<Bar/>} />
        <Route path="pizza" element={<Pizza/>} />
        <Route path="cart" element={<Cart/>}/>
    </Routes>

    <Footer/>
    
  </div>;
}

export default App;
