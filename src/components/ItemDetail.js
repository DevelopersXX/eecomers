import { ItemCount } from "./ItemCount"
import './Styles/ItemDetail.css'
import { useState } from "react";
import OptionButtons from "./Buttons";
import { useCartContext } from "../CartContext/CartContext";


const ItemDetail = ({product}) => {
  const [inputType, setInputType]= useState('button')

  const handleInter = () =>{
    setInputType ('input')
  }

  const {addCart, cartList} = useCartContext()

  // function onAdd (quantity) {
  //   addCart({...product, quantity})
  // }

  function onAdd (quantity) {
    console.log(`${quantity} ${product.name}`)
    addCart({...product, quantity})
  }

 
  return (
    
    <section className='container sproduct my-5 pt-5 me-5'>
     <div className='row mt-50'>
        <div className='col-lg-5 col-md-12 col-12'>
          <img className='img-fluid pb-1' src={product.img}  width={400} alt="" />
        </div>

        <div className='col-lg-6 col-md-12 col-12 mt-5'>        
          <h3 className='py-4'>{product.name}</h3>
          <h2>${product.price}</h2>
          <h4 className='m-5 mb-5'>Detalle del producto</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Pariatur, doloremque quibusdam id iure assumenda natus voluptates
            culpa at unde quis illo. Dolores cum ea velit aspernatur dignissimos
            reprehenderit? Consectetur, quisquam.
  </span>
          {
            inputType === 'button' ?
              <ItemCount 
                initial={1} 
                stock={product.stock} 
                onAdd={onAdd}
                handleInter={handleInter}/>
            :
            <OptionButtons/>
          }
        </div>
      </div>
    </section>
  )
}

export default ItemDetail
