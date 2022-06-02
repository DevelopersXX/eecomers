// import { useState } from "react";
import { useCartContext } from "../CartContext/CartContext.js"
import "./Styles/CartItem.css"




export default function CartItem({product}) {
    const {removeItem} = useCartContext();
   
    
    
    
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div className="main">
                            <div>
                                <img src={product.img} alt="" width={145}/>
                                <div className="des">
                                    <h5>{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>${product.price}</h5>
                    </td>
                    <td>
                        <div className="counter">
                            <h5>{product.quantity}</h5>
                          
                            
                    

                        </div>
                    </td>
                    <td>
                        <h5>${product.quantity*product.price} <button className="btn button-holder plus"onClick={()=>removeItem(product.id)}></button></h5>
                    </td>
                        
                </tr>
            </tbody>
        
        </>
    );
}