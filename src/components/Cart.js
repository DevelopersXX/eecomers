import { useCartContext } from "../CartContext/CartContext.js"
import "./Styles/Cart.css"

import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { RiDeleteBinLine} from "react-icons/ri";




export const Cart = () => {
  const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()

  if(!totalQty()){
    return(

      <div>
        <h3 className="text">El carrito esta vacío</h3>
        <Link to = "/"> 
          <div class="But-lista">
            <div class="btn btn-two">
              <span>Ver Productos</span>
            </div>
          </div>
        </Link>  
      </div>

    )
  }  
  return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table parr">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white total">Total </th>
                    <button onClick={deleteCart} className="button1 btn-4" ><RiDeleteBinLine/></button>
                              
                  </tr>
                </thead>
                {cartList.map(product => <CartItem key={product.id} product={product}/>)}
              </table>
              
            </div>
           </div>
         </div> 
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total parr">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <Link to = "/">
            <div class="But-lista">
              <div class="btn btn-two">
                <span>Ver lista de producto</span>
              </div>
            </div>
          </Link>
           <a href="#" className="comprar parr" >Comprar</a>
         </div>
       </div>
    </>
  )
         
}




// export const Cart = () => {
//   const{cartList, deleteCart, deleteItem} = useCartContext()

//   return (
//     <div className="container">
//       {cartList.map(product => <li className="caja"> {product.name} - ${product.price} - {product.quantity} <button onClick={()=>deleteItem(product.id)} className="delete-item"><FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon></button></li>)}
  
//       {cartList.length ? (<button className="btn-4 button1"onClick={deleteCart}
// >Vaciar Carrito</button>) : <p className="text">No hay productos en el carrito</p>
// }
//     </div>
//   )
// }

