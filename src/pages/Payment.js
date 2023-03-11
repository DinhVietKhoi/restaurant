import axios from 'axios'
import React, { useState } from 'react'
import foodObject from '../data/FoodAll'
import { useContext } from 'react'
import { DataContext } from '../App'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TitleSection from '../components/TitleSection'
import '../sass/payment.scss'
import { toast } from 'react-toastify'
function Payment({ breadCrumbHandle }) {
    const data = useContext(DataContext)
    const [valueProvine,setValueProvine] = useState("empty")
    const [valueDistrict,setValueDistrict] = useState("empty")
    const [valueWard,setValueWard] = useState("empty")
    const [dataT,setDataT] = useState([])
    const [dataD,setDataD] = useState([])
    const [dataW, setDataW] = useState([])
    const [fee, setFee] = useState(0)
    const handleFee = () => {
        setFee(40)
    }
    useEffect(() => {
        breadCrumbHandle({
            content: 'Thanh toán',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
        axios.get("https://vapi.vnappmob.com/api/province",)
            .then((res) => { setDataT(res.data.results) })
            // 
    }, [])
    useEffect(() => {
        axios.get(`https://vapi.vnappmob.com/api/province/district/${valueProvine}`,)
            .then((res) => { setDataD(res.data.results) })
    }, [valueProvine])
    useEffect(() => {
            axios.get(`https://vapi.vnappmob.com/api/province/ward/${valueDistrict}`,)
                .then((res) => { setDataW(res.data.results) })
    },[valueDistrict])
    const submitHandle = (e) => {
        e.preventDefault();
        toast("Chức năng đang được phát triển!!")
    }
    const handleProvine = (e) => {
        setValueProvine(e.target.value)
        setValueDistrict('empty')
    }
    const handleDistrict= (e) => {
        setValueDistrict(e.target.value)
    }
    const handleWard = (e) => {
        setValueWard(e.target.value)
    }
    return (
        <div className='payment'>
            <div className='grid payment__container container'>
                <TitleSection title="Thanh toán"/>
                <form className='row' onSubmit={submitHandle}>
                    <div className='col c-4 l-12'>
                        <div className='payment__info__user'>
                            <span>Thông tin nhận hàng</span>
                            <label>Họ và tên:</label>
                            <input type="text" placeholder='Họ và tên'></input>
                            <label>Số điện thoại:</label>
                            <input type="number" placeholder='Số điện thoại'></input>
                            <label>Tỉnh thành:</label>
                            <select value={valueProvine} onChange={e=>{handleProvine(e)}}>
                                <option value="empty">--</option>
                                {
                                    dataT && dataT.map(e => [
                                        <option key={e} value={e.province_id}>{e.province_name}</option>
                                    ])
                                }
                            </select>
                            <label>Quận huyện:</label>
                            <select value={valueDistrict} disabled={valueProvine=='empty'&&true} onChange={e=>{handleDistrict(e)}}>
                                <option value="empty">--</option>
                                {
                                    dataD && dataD.map(e => [
                                        <option key={e} value={e.district_id}>{e.district_name}</option>
                                    ])
                                }
                            </select>
                            <label>Phường xã:</label>
                            <select value={valueWard} disabled={valueDistrict=='empty'&&true} onChange={e=>{handleWard(e)}}>
                            <option value="empty">--</option>
                                {
                                    dataW && dataW.map(e => [
                                        <option key={e} value={e.ward_id}>{e.ward_name}</option>
                                    ])
                                }
                            </select>
                            <label>Ghi chú:</label>
                            <textarea placeholder='Ghi chú' col="10"></textarea>
                        </div>
                    </div>
                    <div className='payment__pickUp col c-4 l-12'>
                        <div className='payment__pickUp'>
                            <h4>Thông tin giao hàng</h4>
                            <div className='pickUp__group'>
                                <span className='title'>Vận chuyển</span>
                                <div className='field'>
                                    <div className='input'>
                                        <input onChange={handleFee} type='radio' ></input>
                                        <span>Giao hàng tận nơi</span>
                                    </div>
                                    <span>40.000₫</span>
                                </div>
                            </div>
                            <div className='pickUp__group'>
                                <span className='title'>Thanh toán</span>
                                <div className='field'>
                                    <div className='input'>
                                        <input type='radio' ></input>
                                        <span>Thanh toán khi giao hàng (COD)</span>
                                    </div>
                                    <i className="fa-solid fa-money-bill"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payment__product col c-4 l-12'>
                        <div className='payment__product'>
                            <h4>Đơn hàng ( {data.numberProduct} sản phẩm )</h4>
                            <div className='list'>
                            {
                                data.productCart && data.productCart.map((y,index)=> [
                                foodObject && foodObject.map(e=> [
                                    e.id == y.id &&
                                    <div className='list__box' key={e}>
                                        <div className='list__info'>
                                            <img alt='img' src={e.image}></img>
                                                <p>{y.number}</p>
                                            <span>{e.name}</span>
                                        </div>
                                        <span>{e.price}.000₫</span>
                                    </div>
                                    ])
                                ])
                            }
                            </div>
                            <div className='code'>
                                <input type="text" placeholder='Nhập mã giảm giá'></input>
                                <button>Áp dụng</button>
                            </div>
                            <div className='price'>
                                <div className='price__group'>
                                    <span>Tạm tính: </span>
                                    <span style={{color:"#d69c52"}}>{new Intl.NumberFormat('en-DE').format(data.sumMoney)}.000₫</span>
                                </div>
                                <div className='price__group'>
                                    <span>Phí ship: </span>
                                    <span style={{color:"#d69c52"}}>{fee}.000₫</span>
                                </div>
                                <div className='price__group'>
                                    <span>Tổng tiền: </span>
                                    <span style={{color:"#d69c52"}}>{new Intl.NumberFormat('en-DE').format(data.sumMoney+fee)}.000₫</span>
                                </div>
                            </div>
                            <div className='payment__submit l-0'>
                                <Link to='/gio-hang'>
                                    <i className="fa-solid fa-arrow-left"></i>
                                    Trở lại giỏ hàng
                                </Link>
                                <button type='submit'>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                    <div className='col c-0 l-12'>
                        <div className='payment__submit'>
                            <button type='submit'>Thanh toán</button>
                            <Link to='/gio-hang'>
                                <i className="fa-solid fa-arrow-left"></i>
                                Trở lại giỏ hàng
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment