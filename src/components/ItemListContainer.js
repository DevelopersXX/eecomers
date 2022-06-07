import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./Styles/ItemListContainer.css"
import ItemList from "./ItemList"
import Loader from "./Loader";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


const ItemListContainer = ()=>{
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {category} = useParams()    
    
    useEffect(()=>{
        const db = getFirestore()

//         const queryCollection = collection(db,"items")
//         const queryCollectionFilter = category ? query(queryCollection, where("category", "==" , category)):queryCollection
//         getDocs(queryCollectionFilter)
//             .then (resp => setItems(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
//             .catch((err)=>console.log(err))
//             .finally (()=>setLoading(false))           
        
// }, [category])
        
        if(category){
            const queryCollection = collection(db,"items")   
            const queryCollectionFilter = query(queryCollection, where("category", "==" , category))
            getDocs(queryCollectionFilter)
                .then (resp => setItems(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false)) 
                
        }else{
            const queryCollection = collection(db,"items")
            getDocs(queryCollection)
            .then (resp => setItems(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
            .catch((err)=>console.log(err))
            .finally (()=>setLoading(false))          
        }

    }, [category])
    
      
    return(

        <div className="container">
            {loading ?
            <Loader/>
            :
            <ItemList items={items}/>
            }
        </div>
    )
}

export default ItemListContainer