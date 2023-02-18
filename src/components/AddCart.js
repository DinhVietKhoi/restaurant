import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { DataContext } from '../App'

function AddCart({id}) {
    const data = useContext(DataContext)
    const [numberProduct, setNumberProduce] = useState(1)
    const changeNumberProductHandle = (a) => {
        if (a === '+') {
            setNumberProduce(pre=>pre+=1)
        }
        else if (a === '-' && numberProduct > 1) {
            setNumberProduce(pre=>pre-=1)
        }
    }
    return (
        <div
            className='addCart'
            style={{ color:"#ffffff",display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 102, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh'}}
            
        >
            <div 
                style={{ color:"#ffffff",display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 103, position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: "rgba(8,24,22,.7)" }}
                onClick={()=>data.toggleAddCartHandle(0)}
            ></div>
            <div
                style={{ zIndex: 104, display: 'flex', alignItems: 'center', width: 700, height: 350, padding: 20, backgroundColor: '#143b36', border: '1px solid #d69c52', position: 'relative' }}
                
                className='addCart__body'
            >

                <i
                    onClick={()=>data.toggleAddCartHandle(0)}
                    
                    style={{ cursor:'pointer', position: 'absolute', top: 10, right: 10 }} className="fa-solid fa-xmark"></i>
                <div className='addCart__img' style={{marginRight:30,flex:2}}>
                    <img style={{width:'100%',backgroundSize:'contain'}} src='https://bizweb.dktcdn.net/thumb/large/100/469/097/products/untitled1f119f567b16045a78f61d.jpg' alt=""></img>
                </div>
                <div className='productDetail__info' style={{flex:3}}>
                    <h4 className='name' style={{fontSize:24}}>
                    Canh mướp hương nhồi thịt heo
                    </h4>
                    <span className='price'>168.000₫</span>
                    <div className='productDetail__number'>
                        <span>Số lượng</span>
                        <div className='number__control'>
                            <span onClick={()=>changeNumberProductHandle('-')}>-</span>
                            <span>{numberProduct}</span>
                            <span onClick={()=>changeNumberProductHandle('+')}>+</span>
                        </div>
                    </div>
                    <div className='cart'>
                        <span className='add__cart' onClick={()=>data.addProductCartHandle(0,numberProduct)}>THÊM VÀO GIỎ HÀNG</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCart