import React from "react"
import {Link} from "react-router-dom";

const OptionButtons = () => {
    return(
        <>
        <Link to = "/cart">
            <button className="bCard">Finalizar Compra</button>        
        </Link>
        <Link to = "/">
            <button className="bCard">Seguir Comprando</button>        
        </Link>

        </>
    )
}

export default OptionButtons