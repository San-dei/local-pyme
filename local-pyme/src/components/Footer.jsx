import visa from "../assets/visa.png";
import PayPal from "../assets/PayPal.png";
import mercadopago from "../assets/mercadopago.webp";

import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="Footer-container">
        <section className="Footer-ft">
          <div className="Footer-add">
            <div className="Footer-first-shop">Shopping Add</div>
            <div className="Footer-first-parraf-shop">
              Specializes in providing hight-quality, stylish products for you
              wardrobe
            </div>
          </div>
        </section>

        <div className="Footer-block">
          <section className="Footer-ft">
            <div className="Footer-ft-title">Shop</div>
            <div className="Footer-second-parrraf">
              <p className="Footer-other">All collections</p>
              <p className="Footer-other">Winter Edition</p>
              <p className="Footer-other">Discount</p>
            </div>
          </section>

          <section className="Footer-ft">
            <div className="Footer-ft-title">Company</div>
            <div className="Footer-second-parrraf">
              <p className="Footer-other">About Us</p>
              <p className="Footer-other">Contact</p>
              <p className="Footer-other">Affiliates</p>
            </div>
          </section>
        </div>

        <div className="Footer-block">
          <section className="Footer-ft">
            <div className="Footer-ft-title">Support</div>
            <div className="Footer-second-parrraf">
              <p className="Footer-other">FAQs</p>
              <p className="Footer-other">Cookie Policy</p>
              <p className="Footer-other">Term of use</p>
            </div>
          </section>

          <section className="Footer-ft">
            <div className="Footer-ft-title">Payment</div>
            <div className="Footer-fifty-parraf">
              <p className="Footer-fifty-method">
                <img src={visa} alt="photo" className="mp" />
              </p>
              <p className="Footer-fifty-method">
                <img src={PayPal} alt="photo" className="mp" />
              </p>
              <p className="Footer-fifty-method">
                <img src={mercadopago} alt="photo" className="mp" />
              </p>
            </div>
          </section>
        </div>

        <div className="Footer-break"></div>

        <div className="Footer-copyrigth">
          Copyright 2023 ShoppingAdd. All right reserved
        </div>
      </footer>
    </>
  );
};
