import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Styles/ItemListContainer.css"
import ItemList from "./ItemList"
import { getFetch } from "./Data/getFetch"
import Loader from "./Loader";



const ItemListContainer = ()=>{
    const [products, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {category} = useParams()    

    useEffect(()=>{
        if(category){
            getFetch()
                .then(resp => setItem(resp.filter((prods)=>prods.category === category)))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))
        }else{
            getFetch()
                .then(resp => setItem(resp))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))

        }
    }, [category])
    
      
    return(

        <div className="container">
            {loading ?
            <Loader/>
            :
            <ItemList items={products}/>
            }
        </div>
    )
}

export default ItemListContainer