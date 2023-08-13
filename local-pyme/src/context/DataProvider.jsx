/* eslint-disable react/prop-types */
import { dataContext } from "../context/DataContext";
import { useState, useEffect } from "react";

//Aqui se centraliza la informacion que se emite a diferentes componentes.
export const DataProvider = ({ children }) => {
  const [api, setApi] = useState([]); //estado de api
  const [cart, setCart] = useState([]); //estado de cart que usaremos para para CartElement entre otros
  const [search, setSearch] = useState(""); //buscador

  //api de fakestore
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const newData = data.map((data) => ({
          ...data,
          quanty: +1,
          size:['xs','s','m','l','xl']
        }));
        setApi(newData);
      });
  }, []);

  //Agrega los productos de 'product.jsx' a 'cartElement.jsx'
  const AddProducts = (product, quantity) => {
    const addCart = cart.find((item) => item.id === product.id);

    if (addCart) {
      setCart(
        cart.map(
          (
            item //por 'cart' se puede pasar de 'product.jsx' a 'cartElement.jsx': 'cart' (useState)
          ) =>
            item.id === product.id ? { ...item, quanty: quantity} : item
        )
      );
    } else {
      setCart([...cart,{ ...product, quanty: quantity}]);
    }
    console.log(product);
  };

  //filtro de buscador
  let filter = [];
  if (!filter) {
    filter = api;
  } else {
    filter = api.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <dataContext.Provider
      value={{
        api,
        setApi,
        cart,
        setCart,
        AddProducts,
        search,
        setSearch,
        filter,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
