import React, { useContext, useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import { Swiper,SwiperSlide } from 'swiper/react'
import foodObject from '../data/FoodAll'
import news from '../data/NewsData'
import Product from '../components/Product'
import TitleSection from '../components/TitleSection'
import { DataContext } from '../App'
import '../sass/productDetail.scss'
import menu0 from '../assets/menuBanner/menu0.webp'
import { toast } from 'react-toastify'
import voucher from '../assets/voucher.webp'
import { Link } from 'react-router-dom'

function ProductDetail({ breadCrumbHandle }) {
    const data = useContext(DataContext)
    
    const [productCurrent, setProductCurrent] = useState()
    useEffect(() => {
        setProductCurrent(foodObject && foodObject.filter(e => e.slug == window.location.pathname))
        setNumberProduce(1)
    }, [window.location.pathname])
    useEffect(() => {
        productCurrent&&breadCrumbHandle({
            content: 'Tất cả món ăn',
            linkContent:'mon-an',
            contentMain: productCurrent[0].name,
            type: 2,
        })
    }, [productCurrent])
    const [numberProduct, setNumberProduce] = useState(1)
    const changeNumberProductHandle = (a) => {
        if (a === '+') {
            setNumberProduce(pre=>pre+=1)
        }
        else if (a === '-' && numberProduct > 1) {
            setNumberProduce(pre=>pre-=1)
        }
    }
    const [imageMain,setImageMain] = useState(1)
    const imageMainHandle = (a)=>{
        setImageMain(a)
    }
    const setProductDetailInfoHandle = (id) => {
        window.scrollTo(0,0)
        data.setProductDetailInfoHandle(id)
    }
    const handleCoppyVoucher = (a) => {
        if (a === 1) {
            navigator.clipboard.writeText("FREESHIP")
        toast("Đã sao chép mã giảm giá!!")
                
        }
            else if (a === 2) {
            navigator.clipboard.writeText("RESTAURANT1")
            toast("Đã sao chép mã giảm giá!!")
        }
                else if (a === 3) {
                    navigator.clipboard.writeText("RESTAURANT2")
            toast("Đã sao chép mã giảm giá!!")
        } 
    }
    // const [arrVoucher, setArrVoucher] = useState([{ a1: { a: false }, a2: {a:false},a3:{a:false} }])
    // useEffect(() => {
    //     let setTimeoutArrVoucher;
    //     clearTimeout(setTimeoutArrVoucher)
    //     setTimeoutArrVoucher = setTimeout(() => {
    //         setArrVoucher([{ a1: { a: false }, a2: {a:false},a3:{a:false} }])
    //     }, 3000);
    //     return (
    //         clearTimeout(setTimeoutArrVoucher)
    //     )
    // },[checkCopy])
    return (
        <div className='productDetail'>
            <div className='productDetail__container container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col c-9 l-12'>
                            <div className='grid'>
                                <div className='row-gutter-big'>
                                    <div className='col-gutter-big c-5 l-12'>
                                        <div className='productDetail__image'>
                                            <div className='image__main'>
                                                <img 
                                                src={productCurrent&&imageMain===1?productCurrent[0].image:menu0}
                                                alt="img"></img>
                                            </div>
                                                <div className='image__small'>
                                                    <div onClick={()=>imageMainHandle(1)} className={`image ${imageMain===1&&'active'}`}>
                                                        <img  src={productCurrent&&productCurrent[0].image} alt="img"></img>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                    <div onClick={()=>imageMainHandle(2)} className={`image ${imageMain===2&&'active'}`}>
                                                        <img  src={menu0} alt="img"></img>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-gutter-big c-7 l-12'>
                                        <div className='grid'>
                                            <div className='row'>
                                                <div className='col c-12'>
                                                    <div className='productDetail__info'>
                                                        <h4 className='name'>
                                                            {
                                                                productCurrent&&productCurrent[0].name
                                                            }
                                                        </h4>
                                                        <span className='price'>{productCurrent&&productCurrent[0].price}.000₫</span>
                                                        <div className='productDetail__number'>
                                                            <span>Số lượng</span>
                                                            <div className='number__control'>
                                                                <span onClick={()=>changeNumberProductHandle('-')}>-</span>
                                                                <span>{numberProduct}</span>
                                                                <span onClick={()=>changeNumberProductHandle('+')}>+</span>
                                                            </div>
                                                        </div>
                                                        <div className='cart'>
                                                            <span className='add__cart' onClick={()=>data.addProductCartHandle(productCurrent[0].id,numberProduct)}>THÊM VÀO GIỎ HÀNG</span>
                                                            <Link to='/dat-ban' className='add__cart'>ĐẶT BÀN Ở ĐÂY</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-gutter-big c-12'>
                                                    <div className='productDetail__voucher'>
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
                                                        <ul className='list'>
                                                            <li className='item'>
                                                                <div className='group'>
                                                                    <span>Click để được nhận mã freeship</span>
                                                                    <button className="active" onClick={()=>handleCoppyVoucher(1)}></button>
                                                                </div>
                                                                
                                                            </li>
                                                            <li  className='item'> 
                                                            <div className='group'>
                                                                <span>Click để được nhận mã giảm 20.000₫</span>
                                                                <button onClick={()=>handleCoppyVoucher(2)}></button>
                                                                </div>
                                                            </li>
                                                            <li className='item'>
                                                            <div className='group'>
                                                                <span>Click để được nhận mã giảm 50.000₫</span>
                                                                <button onClick={()=>handleCoppyVoucher(3)}></button>
                                                            </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-gutter-big c-12'>
                                        <div className='productDetail__content'>
                                            <h1>Mô tả món ăn</h1>
                                            <div className='descibe__item'>
                                                <div className='describe'>
                                                    <p>
                                                        {
                                                            productCurrent&&productCurrent[0].describe
                                                    }
                                                    </p>
                                                </div>
                                                <div className='ingredient'>
                                                    <h4>Thành phần:</h4>
                                                    <p>
                                                    {
                                                            productCurrent&&productCurrent[0].ingredient
                                                    }
                                                    </p>

                                                </div>
                                                <div className='timeFinish'>
                                                    <h4>Thời gian nấu:</h4>
                                                    <p>{
                                                            productCurrent&&productCurrent[0].timeFinish
                                                    } phút</p>

                                                </div>
                                                <div className='ration'>
                                                    <h4>Khẩu Phần:</h4>
                                                    <p>
                                                    {
                                                            productCurrent&&productCurrent[0].ration
                                                        } người ăn
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-gutter-big c-12 product-fix'>
                                        <TitleSection title="Sản phẩm cùng loại" />
                                        <Swiper
                                            breakpoints={{
                                                1400: {
                                                    slidesPerView: 5,
                                                    
                                                },
                                                1200: {
                                                    slidesPerView: 4,
                                                },
                                                576: {
                                                    slidesPerView: 2,
                                                },
                                                0: {
                                                    slidesPerView: 1,
                                                }
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            modules={[Pagination]}
                                        >
                                            {
                                                foodObject.map((e,index) => [
                                                    e.type=='monchinh'&&<SwiperSlide>
                                                        <Product
                                                                    id={e.id}
                                                                    key={e}
                                                                    name={e.name}
                                                                    price={e.price}
                                                                    discount={e.discount}
                                                                    img={e.image}
                                                                    slug={e.slug}
                                                                />
                                                            </SwiperSlide>
                                                ])
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-gutter-big c-3 l-12'>
                            <div className='grid'>
                                <div className='row'>
                                    <div className='col c-12'>
                                        <div className='boxControl productDetail__suggest'>
                                            <h4>Có thể bạn đang tìm</h4>
                                            <div className='grid'>
                                                <ul className='row'>
                                                    {
                                                        foodObject && foodObject.map((e, index) => [
                                                            index < 7 &&index%2==0 && <li key={e} className='col c-12'>
                                                                <div className='item grid'>
                                                                    <div className='row'>
                                                                        <Link to={e.slug} onClick={()=>setProductDetailInfoHandle(e.id) } className='image col c-4'>
                                                                            <img src={e.image} alt='image'></img>
                                                                        </Link>
                                                                        <div className='info col c-8'>
                                                                            <div>
                                                                                <Link to={e.slug} onClick={()=>setProductDetailInfoHandle(e.id) }>{e.name}</Link>
                                                                                <span>{e.price}.000₫</span>
                                                                            </div>
                                                                            <span onClick={()=>data.addProductCartHandle(e.id,1)}>Thêm món</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ])
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col c-12'>
                                        <div className='boxControl productDetail__news'>
                                            <h4>Thông báo mới</h4>
                                            <div className='grid'>
                                                <ul className='row'>
                                                    {
                                                        news && news.map((e, index) => [
                                                            <li key={e} className='col c-12'>
                                                                <Link to={e.slug} className='item grid'>
                                                                    <div className='row'>
                                                                        <div className='image col c-4'>
                                                                            <img src={e.image} alt='image'></img>
                                                                        </div>
                                                                        <div className='info col c-8'>
                                                                            <span>{e.title}</span>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ])
                                                    }
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail