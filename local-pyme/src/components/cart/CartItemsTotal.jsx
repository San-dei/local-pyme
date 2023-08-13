//la mercaderia total que el cliente compra (se muestra en el icono del carrito antes de entrar en cart)
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";


//Este numero significa que dira la cantidad de articulos dentro del carro
export const CartItemsTotal = () => {
  const { cart } = useContext(dataContext);
  let CantItemTotal = cart.reduce((acc, prev) => acc + prev.quanty, 0);

  return (
    <>
      <span>{CantItemTotal}</span>
    </>
  );
};
