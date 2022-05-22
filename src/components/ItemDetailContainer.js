import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getFetch} from './Data/getFetch'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)

    
    const {id} = useParams()
    
    useEffect(()=>{
        getFetch(id)//fetch que llama a la api
            .then((res) => {setProduct(res)})
            .catch((err) => {console.log(err)})
            .finally(() => setLoader(false))
            
    },[])

    return(
        <div>
            {loader ?
            <h2>Loading...</h2>
            :    

            <ItemDetail product = {product} />

            }
        </div>
        )
    }
