import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { DataContext } from '../App'
import '../sass/product.scss'
function Product({ classProps,name,price,discount,img,slug,id }) {
    
    const [classHeart, setclassHeart] = useState(false)
    const heartHandle = () => {
        setclassHeart(!classHeart)
    }
    const convertDiscount = (a,b) => {
        return (a-((a*b)/100)).toFixed(3)
    }
    const data = useContext(DataContext)
    const setProductDetailInfoHandle = () => {
        window.scrollTo(0,0)
        data.setProductDetailInfoHandle(id)
    }
    
    // const toggleBoxCart = () => {
    //     setProductCart
    // }
    const handleCart = (a) => {
        if (a >0) {
            data.toggleAddCartHandle(a);
        }
        else {
            data.addProductCartHandle(id,1)
        }
    }
    return (
        <div className={`product ${classProps}`}>
            <div className='product__container'>
                <div className='product__body' >
                    <div className='product__img'>
                        <Link to={slug} onClick={setProductDetailInfoHandle}>
                            <img
                                src={img}
                                alt="hinh-mon-an"
                                loading="lazy"
                            >
                            </img>
                        </Link>
                            <div className='product__overlay'>
                                <Link onClick={setProductDetailInfoHandle} to={slug} className="product__overlay__scale">
                                </Link>
                                <div className='product__overlay__icon'>
                                    <i onClick={()=>handleCart(id)} className="fa-solid fa-eye"></i>
                                    <i onClick={handleCart} className="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        
                        <div className={`product__like ${classHeart===true?'active':''}`} onClick={heartHandle}>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        {
                        discount>0&&<div className='product__discount'>
                                        <span>- {discount}%</span>
                                    </div>
                        }
                    </div>
                    <div className='product__title'>
                        <p>{name}</p>
                        <div className='product__price'>
                            {
                                discount > 0 ? <>
                                    {/* <span>{ convertDiscount(price,discount)}₫</span> */}
                                    <span> { price.toFixed(3) }₫</span>
                                </>
                                    :
                                    <span>{price.toFixed(3)}₫</span>
                            }
                        </div>
                    </div>
                    <div className='product__show'>
                        <Link onClick={setProductDetailInfoHandle} to={slug}>Xem chi tiết</Link>
                    </div>
                </div>      
            </div>
        </div>
    )
}

export default Product