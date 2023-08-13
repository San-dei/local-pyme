/* eslint-disable react/prop-types */
//Aumenta o disminuye la cantidad de mercaderia
import { useContext } from "react";
import { dataContext } from "../../context/DataContext";

export const CartCounter = ({ product }) => {
  const { cart, setCart } = useContext(dataContext);

  const decrease = () => {
    const lessProduct = cart.find((item) => item.id === product.id);
  
    // Si la cantidad del producto es 1, no permitir disminuir más
    if (lessProduct && lessProduct.quanty === 1) {
      return;
    }
  
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...product, quanty: lessProduct.quanty - 1 }
          : item
      )
    );
  };

  const increase = () => {
    let lessProduct = cart.find((item) => item.id === product.id);

    lessProduct !== 1 &&
      setCart(
        cart.map((item) => {
          return item.id === product.id
            ? { ...product, quanty: lessProduct.quanty + 1 }
            : item;
        })
      );
  };

  return (
    <>
      <div>
        <button className="counter-button" onClick={increase}>
          +
        </button>
        <p>{product.quanty}</p>
        <button className="counter-button" onClick={decrease}>
          -
        </button>
      </div>
    </>
  );
};
