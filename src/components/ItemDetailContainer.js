import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loader from "./Loader";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {
    const [items, setItems] = useState({});
    const [loader, setLoader] = useState(true);
    const {id} = useParams();
    
    useEffect(()=>{
        const db = getFirestore()
        const dbQuery = doc(db, "items", id)
        getDoc(dbQuery)
         .then(resp => setItems ( { id : resp.id, ...resp.data() } ) )
         .catch((err) => {console.log(err)})
         .finally(() => setLoader(false))
         
     },[id])

    return(
        <div>
            {loader ?
            <Loader/>
            :    

            <ItemDetail product = {items} />

            }
        </div>
        )
    }
