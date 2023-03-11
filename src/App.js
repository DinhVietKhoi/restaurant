import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import BreadCrumb from './components/BreadCrumb.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ScrollTop from './components/ScrollTop.js';
import Home from './pages/Home.js';
import Introduce from './pages/Introduce.js';
import NotFound from './pages/NotFound.js';
import './sass/app.scss'
import FoodCollection from './pages/FoodCollection.js';
import ProductDetail from './pages/ProductDetail.js';
import Contact from './pages/Contact.js';
import NewCollection from './pages/NewCollection.js';
import NewDetail from './pages/NewDetail.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddCart from './components/AddCart.js';
import foodObject from './data/FoodAll'
import Cart from './pages/Cart.js';
import Payment from './pages/Payment.js';
import Order from './pages/Order.js';

export const DataContext = createContext()

function App() {
  const [typeFood, setTypeFood] = useState('all')
  const [checkLocal,setCheckLocal] = useState(false)
  const changeTypeFoodHandle = (a) => {
    setTypeFood(a)
  }
  const [breadCrumb, setBreadCrumb] = useState('')
  const breadCrumbHandle = (a) => {
    setBreadCrumb(a)
  }
  useEffect(() => {
    window.scroll({
      top: 0,
      left:0,
  })
  }, [breadCrumb])
  const [productDetailInfo, setProductDetailInfo] = useState('')
  const setProductDetailInfoHandle = (a) => {
    setProductDetailInfo(a)
  }
  const [productCart,setProductCart] = useState([{id:'',number:''}])
  
  const addProductCartHandle = (id, number) => {
    setCheckLocal(true)
    if (id > 0) {
      let productCartFake = productCart;
      const index = productCartFake.findIndex(e => e.id === id)
      if (index === -1) {
        setProductCart(pre => [...pre, { id: id, number: number }])
      }
      else {
        productCartFake[index] = {id:productCartFake[index].id,number: number + productCartFake[index].number}
        setProductCart(productCartFake);
      }
    }
    else {
      let productCartFake = productCart;
      const index = productCartFake.findIndex(e => e.id === idProduct)
      if (index === -1) {
        setProductCart(pre => [...pre, { id: idProduct, number: number }])
      }
      else {
        productCartFake[index] = {id:productCartFake[index].id,number: number + productCartFake[index].number}
        setProductCart(productCartFake);
      }
    }
    toast("Đã thêm sản phẩm vào giỏ hàng!!")
    setToggleAddCart1(!toggleAddCart1)
  }
  const [numberProduct,setNumberProduct] = useState(0)
  const [toggleAddCart, setToggleAddCart] = useState(false)
  const [toggleAddCart1, setToggleAddCart1] = useState(false)
  const [idProduct, setIdProduct] = useState();
  const toggleAddCartHandle = (a) => {
    setIdProduct(a)
    setToggleAddCart(!toggleAddCart)
  }
  const [sumMoney,setSumMoney] = useState(0)
  useEffect(() => {
    let numberFake = 0;
    productCart && productCart.map(e => {
        if (e.number > 0 && typeof e.number === 'number') {
            numberFake+=e.number
        }
    })
    let productCartFake = productCart && productCart.filter(e =>e.number > 0 && typeof e.number==='number')
    if (productCartFake.length !== productCart.length) {
      setProductCart(productCartFake)
    }
    setNumberProduct(numberFake)
    setSumMoney(0)
    foodObject && foodObject.map(e => {
      productCart && productCart.map(y => {
        if(e.id===y.id){
          setSumMoney(pre=>pre+=e.price*y.number)
        }
      })
    })
  }, [productCart, toggleAddCart1, foodObject, foodObject])
  const changleNumberProduct = (id, a) => {
    setToggleAddCart1(!toggleAddCart1)
    let position;
    let productCartfake = productCart

    if (a === '+') {
      position = productCart.findIndex(e=>e.id===id)
      productCartfake[position].number += 1
    }
    else if (a === '-') {
      position = productCart.findIndex(e=>e.id===id)
      productCartfake[position].number -=1
    }
    else if (a === 'x') {
      position = productCart.findIndex(e=>e.id===id)
      productCartfake[position].number =0
    }
    setProductCart(productCartfake)
  console.log(productCart)
    setCheckLocal(true)
  console.log(checkLocal)
}
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('productCart'))!==null) {
      setProductCart(JSON.parse(localStorage.getItem('productCart')))
    }
  }, [])
  useEffect(() => {
    if(checkLocal===true)
      localStorage.setItem('productCart', JSON.stringify(productCart));
  },[productCart,checkLocal,toggleAddCart1])
  return (
    <BrowserRouter>
      <DataContext.Provider value={{changleNumberProduct,sumMoney, toggleAddCart1, numberProduct,productDetailInfo, setProductDetailInfoHandle, productCart, addProductCartHandle,toggleAddCartHandle}}>
        <div className="App" >
          {
          toggleAddCart&&<AddCart />
          }
          <ToastContainer
            position="top-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable={false}
            theme="light"
            autoClose={500}
          />
          <ScrollTop />
          <Header changeTypeFoodHandle={changeTypeFoodHandle} />
          <BreadCrumb breadCrumb={breadCrumb} />
          <Routes>
            {/* <Route path='/' element={<Home breadCrumbHandle={breadCrumbHandle} />} /> */}
            <Route path='/restaurant' element={<Home breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/mon-an/*' element={<ProductDetail breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/mon-an' element={<FoodCollection breadCrumbHandle={breadCrumbHandle} changeTypeFoodHandle={changeTypeFoodHandle} typeFood={typeFood} />} />
            <Route path='/gioi-thieu' element={<Introduce breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/tin-tuc' element={<NewCollection breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/tin-tuc/*' element={<NewDetail breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/lien-he' element={<Contact breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/gio-hang' element={<Cart breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/thanh-toan' element={<Payment breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='/dat-ban' element={<Order breadCrumbHandle={breadCrumbHandle} />} />
            <Route path='*' element={<NotFound breadCrumbHandle={breadCrumbHandle} />} />
          </Routes>
          <Footer />
          </div>
        </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
