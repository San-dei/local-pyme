//aca se vera lo que el cliente compra
import { CartElement } from "./CartElement";
import { CartTotal } from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";

export const Cart = () => {
  const { cart } = useContext(dataContext);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        'Tu carrito está vacío'
      )}
    </>
  );
};
