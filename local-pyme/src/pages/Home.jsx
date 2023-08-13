import { PiMaskHappy } from "react-icons/pi";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { RiLuggageCartLine } from "react-icons/ri";
import { RiTruckLine } from "react-icons/ri";
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import { Footer } from "../components/Footer";

import "./Home.css";

export const Home = () => {
  
  return (
    <>
      <div className="Product-comercial">
        <h3 className="Product-h3">We provide the best customer experiences</h3>

        <div className="Products-contentSliceShow">

          <div className="Slice">
            <LiaMoneyBillWaveSolid className="Products-icon-sec" />
            <div className="Products-title">Original product</div>
            <div className="Products-parraf">
              We provide a money-back guarantee if the product is not original
            </div>
          </div>

          <div className="Slice">
            <PiMaskHappy className="Products-icon-sec" />
            <div className="Products-title">Satisfaction guarantee</div>
            <div className="Products-parraf">
              Exchange the product you ve purchased if it doesn t fit you
            </div>
          </div>

          <div className="Slice">
            <RiLuggageCartLine className="Products-icon-sec" />
            <div className="Products-title">New arrivals every day</div>
            <div className="Products-parraf">
              We update our collection almost every day
            </div>
          </div>

          <div className="Slice">
            <RiTruckLine className="Products-icon-sec" />
            <div className="Products-title">Fast & Free Shipping</div>
            <div className="Products-parraf">
              We offer fast and free shipping for our loyal customers
            </div>
          </div>

          <div className="Controls">
            <button className="Botton">
              <CgChevronLeft />
            </button>
            <button className="Botton">
              <CgChevronRight />
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};
