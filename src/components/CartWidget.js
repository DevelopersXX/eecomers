import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext.js";
import "./Styles/CartWidget.css"


const CartWidget = () => {

  const {totalQty} = useCartContext()

  return (
    <div className="cart-widget">
      <NavLink to= '/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <div className="qty-display">{totalQty() !== 0 && totalQty()}</div>
      </NavLink>
    </div>
  );
};

export default CartWidget