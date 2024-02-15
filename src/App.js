import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import CartContext
import CartContext from './context/CartContext'
//import useState
 
import {useState} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
// import Products from './components/Products'
// import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
 
import './App.css'
// import ProductItemDetails from './components/ProductItemDetails'
 
const App = () => {
  // Maintain state for cartList
  const [cartList, setCartList] = useState([])
  const addCartItem = product => {
    // Use the spread operator to copy the current cartList and add the new product
    setCartList(prevCartList => [...prevCartList, product])
  }
 
  const deleteCartItem = () => {}
  return (
    <BrowserRouter>
      <CartContext.Provider value={{cartList, addCartItem, deleteCartItem}}>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/products' element={<ProtectedRoute></ProtectedRoute>} />
          <Route
            path='/products/:id'
            element={<ProtectedRoute></ProtectedRoute>}
          />
          <Route path='/cart' element={<ProtectedRoute></ProtectedRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}
 
export default App
 