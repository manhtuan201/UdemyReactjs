import Header from "./components/Layout/Header";
import React, {  useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Card/Cart";
import CartProvider from "./store/CardProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const onShowCartHandler = () => {
    setCartShow(true);
  };
  const hideCartHandler = () =>{
    setCartShow(false);
  }
  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header showCart={onShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
