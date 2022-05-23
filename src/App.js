import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import './app.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Cart } from './components/Cart';
import CartContextProvider from './CartContext/CartContext'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div>       
          <Navbar/>
          <Routes>
            <Route path ="/" element = {<ItemListContainer/>} />
            <Route path ="/category/:category" element = {<ItemListContainer/>} />
            <Route path='/detail/:id' element = {<ItemDetailContainer/>} />
            <Route path='/cart' element = {<Cart/>} />
            <Route path= "/*" element = {<Navigate to  = "/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App