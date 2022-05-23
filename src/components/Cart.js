import { useCartContext } from "../CartContext/CartContext"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './Styles/Cart.css';




export const Cart = () => {
  const{cartList, deleteCart, deleteItem} = useCartContext()

  return (
    <div className="container">
      {cartList.map(product => <li className="caja"> {product.name} - ${product.price} - {product.quantity} <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button></li>)}
  
      {cartList.length ? (<button className="btn-4 button1"onClick={deleteCart}
>Vaciar Carrito</button>) : <p className="text">No hay productos en el carrito</p>
}
    </div>
  )
}

