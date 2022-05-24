import { createContext, useContext, useState} from "react";


export const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    
    const [cartList, setcartList] = useState([])

    function inCart(id){
        return cartList.some(product => product.id === id)
    }

    function addCart (item){
        if (inCart(item.id)){
            let i = cartList.findIndex(products => products.id === item.id)
            const newCartList = cartList
            newCartList[i].quantity += item.quantity
            setcartList(newCartList)
        }else{
            setcartList([
                ...cartList,
                item
            ])
        }
    };

    // const deleteItem = (id) => {
    //     const newCart = [...cartList];
    //     let index = newCart.findIndex((products) => products.id === id);
    //     newCart.splice(index, 1);

    //     setcartList([...newCart])
    // }

    function deleteItem(id) {
        const newCartList = cartList;
        let i = newCartList.findIndex((product) => product.id === id);
        newCartList.splice(i,1);
        setcartList([...newCartList]);
    }

    const deleteCart = () =>{
        setcartList ([])
    };

    return(
        <CartContext.Provider value={ {
            cartList,
            addCart,
            deleteItem,
            deleteCart        
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
