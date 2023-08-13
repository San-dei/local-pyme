import { useParams } from "react-router-dom";
import { useContext, useState } from "react"; //size
import { dataContext } from "../context/DataContext";
import { BsFillCartPlusFill } from "react-icons/bs";

//muestra el detalle de los productos que son seleccionados
export const ProductsDetails = () => {
  const { api, AddProducts } = useContext(dataContext);
  const { id } = useParams();
  const product = api.find((item) => item.id === parseInt(id)); //pagina dinamica

  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState(product.size[0]);

  console.log(product);

  const decrease = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const selectSize = (size) => {
    product.selectSize = currentSize;
    setCurrentSize(size);
  };

  return (
    <>
      <img src={product.image} alt="photo" />
      <h1>{product.title}</h1>

      <div>
        <div>available size</div>
        {product.size.map((item) =>
          item === currentSize ? (
            <button key={item} style={{ backgroundColor: "blue" }}>
              {item}
            </button>
          ) : (
            <button
            key={item}
            onClick={() => {
              selectSize(item);
            }}
            >
              {item}
            </button>
          )
        )}

        <div>available Color</div>
        <input type="radio" color="red" />
        <input type="radio" color="blue" />
      </div>

      <button className="counter-button" onClick={increase}>
        +
      </button>

      {quantity}

      <button className="counter-button" onClick={decrease}>
        -
      </button>
      <button
        onClick={() => AddProducts(product, quantity)}
        className="Product-price-content-btn"
      >
        <BsFillCartPlusFill className="Product-price-btn" />
      </button>
    </>
  );
};
