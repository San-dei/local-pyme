//el lugar donde se ven los productos a vender
import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";

/* import product_phone from "../assets/product_phone.jpg"  */

import { HiArrowNarrowRight } from "react-icons/hi";
import sale from "../assets/sale.jpg";

import "./Products.css";


export const Products = () => {
  //Esta fn muestra los productos a vender
  const { filter} = useContext(dataContext); //viene de DataProvider

  return (
    <>
      {filter.map((product) => {
        //filter para hacer search. (Al principio del proyecto se usa 'api' de dataContext)
        return (
          <li key={product.id} className="Product-card-li">
            <div className="Product-card">
              <Link to={`/ProductsDetails/${product.id}`} className="Product-detail-link">
                <img
                  src={product.image}
                  alt="photo"
                  className="Product-image"
                />
                <div className="Product-title"> {product.title}</div>
              </Link>
              <div className="Product-price-and-btn">
                <div className="Product-price">${product.price}</div>
              </div>
            </div>
          </li>
        );
      })}

      <article className="Article-container">
        <section className="Article-section">
          <div className="Article-promo-content">
            <img src={sale} alt="photo" className="Section-img" />

            <div className="Article-content-offert">
              <div className="Article-advised-title">LIMITED OFFERT</div>
              <h3 className="Article-advice-commercial">
                35% off only this friday and get special gift
              </h3>

              <button className="Article-btn-advice">
                <div className="Article-text-grab">
                  Grab it Now
                  <HiArrowNarrowRight className="Article-arrow" />
                </div>
              </button>
            </div>
          </div>
        </section>

        <section className="Article-section">
          <div className="Article-suscribe">
            Suscribe to our newsletter to get updates to our latest collection
          </div>
          <div className="Article-suscribe-sale">
            Get 20% off on your first order just by subscribing to our
            newsletter
          </div>
          <div className="Article-content-input-btn">
            <input
              type="text"
              placeholder="Enter your E-mail"
              className="Article-email-input"
            />
            <button className="Article-advise-suscribe">Suscribe</button>
          </div>

          <div className="Article-bn ">
            You will be able to suscribe at any time.
            <br />
            Read our Privacity policy here
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
};
