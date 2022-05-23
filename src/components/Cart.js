import { useCartContext } from "../CartContext/CartContext"
import './Styles/Cart.css';




export const Cart = () => {
  const{cartList, deleteCart} = useCartContext()

  return (
    <div className="container">
      {cartList.map(product => <li className="caja"> {product.name} - ${product.price} - {product.quantity} </li>)}
      {cartList.length ? (<button className="btn-4"onClick={deleteCart}
>Vaciar Carrito</button>) : <p className="text">No hay productos en el carrito</p>
}
    </div>
  )
}

