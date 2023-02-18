import React from 'react'
import { useEffect } from 'react'
import TitleSection from '../components/TitleSection'
import voucher from '../assets/voucher.webp'
import '../sass/cart.scss'
import foodObject from '../data/FoodAll'
import { useContext } from 'react'
import { DataContext } from '../App'
import { Link } from 'react-router-dom'
function Cart({ breadCrumbHandle }) {
    const data = useContext(DataContext)
    
    useEffect(() => {
        breadCrumbHandle({
            content: 'Giỏ hàng',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    }, [])
    return (
        <div className='cart'>
            <div className='cart__container container'>
                <TitleSection title='Giỏ hàng của bạn' />
                {
                    data.productCart && data.productCart.length < 1
                        ?
                        <div className='cart__empty'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span style={{textAlign:'center'}}>Không có sản phẩm nào trong giỏ hàng của bạn!!!</span>
                        </div>
                        :
                        <div className='grid'>
                            <div className='row'>
                                <div className='col c-8 l-12'>
                                    <table>
                                        <thead>
                                            <tr>
                                            <th className='l-0'>STT</th>
                                            <th>Ảnh sản phẩm</th>
                                            <th className='l-0'>Thông tin sản phẩm</th>
                                            <th className='l-0'>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th >Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                
                                                data.productCart && data.productCart.map((y,index)=> [
                                                foodObject && foodObject.map(e=> [
                                                    e.id == y.id && <tr key={e}>
                                                        <td className='l-0'>{index+1}</td>
                                                        <td className='img'>
                                                            <img src={e.image} alt=''></img>
                                                        </td>
                                                        <td className='cart__info l-0' style={{margin:'0 10px'}}>
                                                            <h4 className='name' style={{margin: 0,marginBottom:10,fontSize:12}}>
                                                                { e.name}
                                                            </h4>
                                                            <span style={{color:"#d69c52",cursor:'pointer'}} onClick={()=>data.changleNumberProduct(e.id,'x')}>Xóa</span>
                                                                
                                                        </td>
                                                        <td className='cart__control l-0' style={{color:"#d69c52"}}>
                                                            <span>{e.price}.000₫</span>
                                                        </td>
                                                        <td className='cart__number'>
                                                            <div className='number__control' style={{ margin: 0}}>
                                                                <span style={{ margin: 0,padding:'5px 12px',color:'#ffffff', cursor:'pointer',backgroundColor:"#d69c52"}} onClick={()=>data.changleNumberProduct(e.id,'-')}>-</span>
                                                                <span style={{margin: '0 10px', fontSize:14,padding:'5px 12px',border:'1px solid #d69b4c'}}>{y.number}</span>
                                                                <span style={{margin: 0, padding:'5px 12px',color:'#ffffff', cursor:'pointer',backgroundColor:"#d69c52"}} onClick={()=>data.changleNumberProduct(e.id,'+')}>+</span>
                                                            </div>
                                                        </td>
                                                        <td className='sum'>
                                                            <span style={{color:"#d69c52"}}>{new Intl.NumberFormat('en-DE').format(y.number * e.price)}.000₫</span>
                                                        </td>
                                                    </tr>
                                                    ])
                                                ])
                                            }
                                        </tbody>
                                    </table>
                                    <div className='cart__sum' style={{marginTop:30,marginBottom:30}}>
                                        <div className='grid'>
                                            <div className='row'>
                                                <div className='col c-8 l-6'></div>
                                                <div className='col c-4 l-6' style={{display:'flex',flexDirection:'column',justifyContent:"space-between",marginBottom:10}}>
                                                    <div style={{display:'flex',justifyContent:"space-between",marginBottom:20}}>
                                                        <span>Tổng tiền:</span>
                                                        <span style={{color:"#d69c52"}}>{new Intl.NumberFormat('en-DE').format(data.sumMoney)}.000₫</span>
                                                    </div>
                                                    <Link to="/thanh-toan" style={{textAlign:'center',color:'#ffffff',fontWeight:700,backgroundColor:"#d69c52",outline:'none',border:0,cursor:'pointer',padding:'10px 0',borderRadius:10}}>Thanh toán</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                                <div className='col c-4 l-12'>
                                    <div className='productDetail__voucher' style={{marginTop: 0,padding: '40px 20px 20px 20px'}}>
                                        <div className='image'>
                                            <img alt='img' src={voucher}></img>
                                            <span>Nhận voucher ngay !!!</span>
                                        </div>
                                        <div className='progress'>
                                            <div className='bar active'></div>
                                            <div className='bar active'></div>
                                            <span className='dot active'></span>
                                            <span className='dot active'></span>
                                            <span className='dot active'></span>
                                        </div>
                                        <ul className='list' style={{padding: 10}}>
                                            <li className='item'>
                                                <div className='group'>
                                                    <span>Click để được nhận mã freeship</span>
                                                    <button>Sao chép</button>
                                                </div>
                                                
                                            </li>
                                            <li  className='item'> 
                                            <div className='group'>
                                                <span>Click để được nhận mã giảm 20.000₫</span>
                                                <button>Sao chép</button>
                                                </div>
                                            </li>
                                            <li className='item'>
                                            <div className='group'>
                                                <span>Click để được nhận mã giảm 50.000₫</span>
                                                <button>Sao chép</button>
                                            </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
    </div>
    )
}

export default Cart