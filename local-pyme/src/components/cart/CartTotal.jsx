//Se vera el total del importe de lo que el cliente compra
import { useContext, useState } from "react";
import { dataContext } from "../../context/DataContext";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'//mp
import axios from "axios";


//Establece el valor total de todos los productos dentro de Cart, pero basandoce en 'cart' ->useContext
export const CartTotal = () => {
  const { cart } = useContext(dataContext);
  const [preferenceId, setPreferenceId] = useState(null)//mp
  initMercadoPago('TEST-d3ebe251-17bd-442f-a0fa-8991fe5eb739');//mp
  
  const createPreference = async () => {
    try {
      const response = await axios.post('http://localhost:8080/create_preference',{cart})
  
      const { id } = response.data;
      return id;
    } catch (error) {
      throw new Error(error);
    }
  };
  

  const handleBuy = async() => {//mp
    const id = await createPreference()
    if(id){
      setPreferenceId(id)
    }
  }


  const totalPrice = cart.reduce(
    (acc, prev) => acc + prev.price * prev.quanty, 0
  );
  return (
    <>
      <div>
        <h3>total:${totalPrice}</h3>
        <button onClick={handleBuy}>Finalizar compra</button>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </>
  );
};
