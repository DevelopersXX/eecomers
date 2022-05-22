import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import "./Styles/CartWidget.css"

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <NavLink to= '/cart'>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="white" />
        <div className="qty-display">6</div>
      </NavLink>
    </div>
  );
};

export default CartWidget