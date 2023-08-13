import { useContext, useState } from "react";
import { dataContext } from "../context/DataContext";
import { NavLink, Link } from "react-router-dom";

import { CartItemsTotal } from "./cart/CartItemsTotal";

import { AiOutlineMenu, AiFillShop } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

import "./Navbar.css";

export const Navbar = () => {
  const { cart, search, setSearch } = useContext(dataContext); //buscador y filtro
  const [menu, setMenu] = useState(false); //estado para activar o desactivar la clase .isActive y mostrar o no el nav

  //buscador search con filtro
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  //motrar o no el menu nav
  const handleActive = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="Cabezera">
        <h1 className="Cabezera-h1">
          <Link to="/">
            <AiFillShop className="Cabezera-logo" />
          </Link>
        </h1>

        <button className="Cabezera-btn" onClick={handleActive}>
          {/* boton par activar o no el menu nav hamburguesa */}
          <AiOutlineMenu className="Cabezera-svg" />
        </button>
        <nav className={`Cabezera-nav ${menu ? "isActive" : ""}`}>
          {" "}
          {/* automatizar esta accion mediante fn 'handleActive' */}
          <ul className="Cabezera-ul">
            <li className="Cabezera-li">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="Cabezera-li">
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li className="Cabezera-li">
              <NavLink to="/AboutUs">About Us</NavLink>
            </li>
            <li className="Cabezera-li">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li className="Cabezera-li">
              <NavLink to="/Cart">
                <BsFillCartFill className="Cabezera-icon-cart" />
                {cart.length === 0 ? null : <CartItemsTotal />}
              </NavLink>
              <NavLink to="/User">
                <BiUserCircle className="Cabezera-icon-user" />
              </NavLink>
            </li>

            <li className="Cabezera-li">
              <div className="Cabezera-li-cont-si">
                <AiOutlineSearch className="Cabezera-icon-search" />
                <input
                  className="Cabezera-search-input"
                  type="text"
                  placeholder="Buscar producto..."
                  onChange={handleSearch}
                  value={search}
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
