import React, { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import useCart from "./hooks/useCart";

function App() {
  // const [auth, setAuth] = useState(false);
  // const [total, setTotal] = useState(0);
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  // const [auth, setAuth] = useState(20);

  // setAuth(false);

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              // setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            Guitars - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
