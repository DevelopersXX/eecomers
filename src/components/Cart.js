import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from "firebase/firestore"
import { Link } from "react-router-dom";

import { useCartContext } from "../CartContext/CartContext"
import CartItem from "./CartItem";
import { useState } from "react";

import "./Styles/Cart.css"


export const Cart = () => {
  const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()
  const [orderSent, setOrderSent] = useState(false)
  const [orderId, setOrderId] = useState()

  async function createOrder(){

    let order ={}

    order.buyer ={name:"Ignacio", email:"NPicci19@gmail.com", phone:"158057596"}
    order.total = totalPrice()
    order.items= cartList.map(product=>{
      const id = product.id
      const name= product.name
      const price= product.price*product.quantity

      return{id,name,price}
    })

    //crear
    
    const db = getFirestore()

    const queryCollection = collection(db,"orders")
    addDoc(queryCollection, order)
     .then (resp=> setOrderId(resp.id))
     .catch(err => console.log(err))
     .finally(()=>deleteCart())

     //update 
    const queryCollectionStock = collection (db, "items")
     
    const queryUpdateStock = query(
       queryCollectionStock,
       where(documentId(), "in", cartList.map(it => it.id))
    )

    const batch = writeBatch(db)
    await getDocs(queryUpdateStock)
      .then (resp=>resp.docs.forEach(res=>batch.update(res.ref,{
       stock:res.data().stock - cartList.find(product => product.id === res.id).quantity
     })))
     .catch(err => console.log(err))
     .finally(()=>deleteCart())

    batch.commit()
  }

  function sendOrder(){
    setOrderSent(true)
    createOrder()
  }
  
  if(!totalQty()){
    return(

      <div>
        {orderSent 
        ?
        <div>
          <h3>La compra a finalizado correctamente. Gracias por elegirnos!</h3>    
          <h3>Código de seguimiento: {orderId}</h3> 
        </div>
        :
        <h3 className="deleteCart">El carrito esta vacío</h3>}
        <Link to = "/"><button className="bProducto">Ver productos</button></Link>  
      </div>

    )
  }  


  
  return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white">Total </th>         
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
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a className="proceed-btn" onClick={sendOrder}>Comprar</a>
           <Link to = "/"><button className="bProducto">Seguir comprando</button></Link>
          <button onClick={deleteCart} className="bProducto ms-1">Vaciar carrito</button> 
         </div>
       </div>

    </>
  )
         
}
// -----
// import { useCartContext } from "../CartContext/CartContext.js"
// import "./Styles/Cart.css"

// import { Link } from "react-router-dom";
// import CartItem from "./CartItem";
// import { RiDeleteBinLine} from "react-icons/ri";




// export const Cart = () => {
//   const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()

//   if(!totalQty()){
//     return(

//       <div>
//         <h3 className="text">El carrito esta vacío</h3>
//         <Link to = "/"> 
//           <div class="But-lista">
//             <div class="btn btn-two">
//               <span>Ver Productos</span>
//             </div>
//           </div>
//         </Link>  
//       </div>

//     )
//   }  
//   return (
//     <>   
    
//       <section className="mt-5">
//         <div className="container">
//           <div className="cart">
//             <div className="table-responsive">
//               <table className="table parr">
//                 <thead className="thead-color">
//                   <tr>
//                     <th scope="col" className="text-white">Producto</th>
//                     <th scope="col" className="text-white">Precio</th>
//                     <th scope="col" className="text-white">Cantidad</th>
//                     <th scope="col" className="text-white total">Total </th>
//                     <button onClick={deleteCart} className="button1 btn-4" ><RiDeleteBinLine/></button>
                              
//                   </tr>
//                 </thead>
//                 {cartList.map(product => <CartItem key={product.id} product={product}/>)}
//               </table>
              
//             </div>
//            </div>
//          </div> 
//       </section>

//        <div className="col-lg-4 offset-lg-4">
//          <div className="checkout">
//            <ul>
//              <li className="cart-total parr">Total ${totalPrice()!== 0 && totalPrice()}</li>
//            </ul>
//            <Link to = "/">
//             <div class="But-lista">
//               <div class="btn btn-two">
//                 <span>Ver lista de producto</span>
//               </div>
//             </div>
//           </Link>
//            <a href="#" className="comprar parr" >Comprar</a>
//          </div>
//        </div>
//     </>
//   )
         
// }




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

