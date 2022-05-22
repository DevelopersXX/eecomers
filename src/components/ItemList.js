import Item from "./Item"


const ItemList = ({items}) => {
      

    return (
        items.map((prod) => <Item key= {prod.id}
                                name= {prod.name}
                                price={prod.price}
                                img=  {prod.img} 
                                id = {prod.id}/>)   
    )
}
    
 

export default ItemList