import { Link } from "react-router-dom"
// import { ItemCount } from "./ItemCount"
import "./Styles/Item.css"



const Item = ({name, price,img,id}) =>{
    return(
        <div className="gallery">
        <Link to= {`/detail/${id}`} >
            <div className="card">
                <img className="imgCard" src={img} alt="" />
                <h3>{name}</h3>
                <h6>${price}</h6>
                <button className="bCard">Detalle</button>
            </div>
        </Link>
        </div>
    )
}

export default Item