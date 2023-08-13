import { useContext } from "react";
import { dataContext } from "../../context/DataContext";
import { CartCounter } from "./CartCounter";

/*En este componente se muestra lo que el cliente compro y su fn de eliminar*/
export const CartElement = () => {//el producto se acumula en un array al presionar 'add product' y se muestran en el componente Cart.jsx
  const { cart, setCart } = useContext(dataContext);//viene de DataProvider

  //esta funcion elimina un producto seleccionado
  const HandleDelete = (id) => {
    const foundId= cart.find((element)=> element.id === id)
    const newCart = cart.filter(( item )=>{return item !== foundId })
    setCart(newCart)
  }

  return (
    (<>
      <div className="container">
        {cart.map((product) => {
          console.log(cart)
          return (
            <li key={product.id}>
              <div>
                <div>{product.title}</div>
                <div><CartCounter product={product}/></div>
                <div>Size: {product.selectSize}</div> 
                <div className="price">${product.price * product.quanty}</div>
                <div className="cart-delete-button" onClick={()=>HandleDelete(product.id)}>❌</div>
              </div>
            </li>
          );
        })}
      </div>
    </>)
  )
}
