import { useState } from "react";
import "./Styles/ItemCount.css"

export function ItemCount({stock, initial, onAdd, handleInter}){
    const [count, setCount] = useState (initial)


    function increase(){
        if(count < stock){
            setCount (count+1)
        }
    } 
    function decrease(){
        if (count > 1){
            setCount(count-1)         
        }
    }

    function addCart(){
        onAdd(count);
        handleInter();
        
        
    }

    return(
        <div>
            <button  onClick={decrease}>-</button>
            <button  onClick={increase}>+</button>
            <p>{count}</p>
            <button  className="bCard" onClick={addCart}>Agregar al carrito</button>
        </div>
    )    
}
