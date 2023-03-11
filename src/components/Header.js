import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DataContext } from '../App'

import '../sass/header.scss'
import menu0 from'../assets/menuBanner/menu0.webp'
import menu1 from'../assets/menuBanner/menu1.webp'
import menu2 from'../assets/menuBanner/menu2.webp'
import menu3 from'../assets/menuBanner/menu3.webp'
import menu4 from'../assets/menuBanner/menu4.webp'
import menu5 from'../assets/menuBanner/menu5.webp'
import menu6 from'../assets/menuBanner/menu6.webp'
import { useContext } from 'react'
import { useEffect } from 'react'
import foodObject from '../data/FoodAll'
function Navigation({ changeTypeFoodHandle }) {
    const data = useContext(DataContext)
    const arrImageMenu = [ menu0, menu1, menu2, menu3, menu4, menu5, menu6 ]
    const [toggleImageMenu, setToggleImageMenu] = useState(0)
    const toggleImagemenuHandle = (a) => {
        setToggleImageMenu(a)
    }
    const [numberProduct, setNumberProduct] = useState(0)

    const [numberProduce, setNumberProduce] = useState(1)
    const changeNumberProductHandle = (a) => {
        if (a === '+') {
            setNumberProduce(pre=>pre+=1)
        }
        else if (a === '-' && numberProduct > 1) {
            setNumberProduce(pre=>pre-=1)
        }
    }
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleMenuHandle = () => {
        setToggleMenu(!toggleMenu)
    }
    const [toggleMenuMini, setToggleMenuMini] = useState(false)
    const toggleMenuMiniHandle = () => {
        setToggleMenuMini(!toggleMenuMini)
    }
    return (
        <div className='header color__green' id='header'>
            <div className='header__container container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col c-3 l-12'>
                            <div className='header__logo'>
                                <Link to="/restaurant">
                                    <img src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1672455206343" alt="logo"></img>
                                </Link>
                            </div>
                        </div>
                        <div className='col c-6 l-0'>
                            <div className='header__navbar'>
                                <ul className='header__navbar__menu'>
                                    <li>
                                        <NavLink  to="/restaurant" >Trang chủ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  to="/gioi-thieu">Giới thiệu</NavLink>
                                    </li>
                                    <li className='toggleMenu'>
                                        <NavLink  to="/mon-an" > Món ăn
                                            <i className="fa-solid fa-sort-down"></i>
                                        </NavLink>
                                        <div className='header__navbar__dropdown'>
                                                <div className='navbar-dropdown__menu'>
                                                    <div className='grid'>
                                                        <div className='row'>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(1)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>KHAI VỊ</span> </li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('khaivi')}to="/mon-an">Salad</Link> </li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('khaivi')}to="/mon-an">Gỏi</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(2)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>MÓN CHÍNH</span></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monchinh')}to="/mon-an">Món bò</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monchinh')}to="/mon-an">Món gà</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monchinh')}to="/mon-an">Món heo</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monchinh')}to="/mon-an">Món cá</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(3)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>CANH - TIỀM - SUP</span></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monnuoc')}to="/mon-an/">Canh</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monnuoc')}to="/mon-an">Tiềm</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('monnuoc')}to="/mon-an">Sup</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(4)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>CƠM - MÌ - CHÁO</span></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('com')}to="/mon-an">Cơm</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('com')}to="/mon-an">Mì</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('com')}to="/mon-an">Cháo</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(5)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>BÁNH VÀ TRÁNG MIỆNG</span></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('trangmieng')}to="/mon-an">Bánh</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('trangmieng')}to="/mon-an">Tráng miệng</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className='col c-3' onMouseEnter={()=>toggleImagemenuHandle(6)} onMouseLeave={()=>toggleImagemenuHandle(0)}>
                                                                <ul>
                                                                    <li className='dropdown-menu__title'><span>ĐỒ UỐNG</span></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('douong')}to="/mon-an">Cà phê</Link></li>
                                                                    <li><Link onClick={()=>changeTypeFoodHandle('douong')}to="/mon-an">Trà sữa</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='navbar-dropdown__figure'>
                                                <img src={arrImageMenu.filter((e,index) => index == toggleImageMenu )} alt="figure"></img>
                                                </div>
                                            </div>
                                    </li>
                                    <li>
                                        <NavLink  to="/tin-tuc">Tin tức</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  to="/lien-he">Liên hệ</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col c-3 l-0'>
                            <div className='header__control'>
                                <div className='header__cart'>
                                    <Link to='/gio-hang'>
                                        <i style={{color:'#ffffff'}} className="fa-solid fa-cart-shopping"></i>
                                    </Link>
                                    <div className='number'><span>{data.numberProduct}</span></div>
                                    <div className='cart__box'>
                                        <div className='cart__box__container'>
                                            {
                                                data.numberProduct > 0
                                                    ?
                                                    <div className='have__product'>
                                                        <ul>
                                                            {
                                                                
                                                                foodObject && foodObject.map(e => [
                                                                    data.productCart && data.productCart.map(y => [
                                                                        e.id==y.id&&<li key={e}>
                                                                        <div className='img'>
                                                                            <img src={e.image} alt=''></img>
                                                                        </div>
                                                                        <div className='productDetail__info' style={{margin:'0 10px'}}>
                                                                            <h4 className='name' style={{margin: 0,fontSize:14}}>
                                                                                { e.name}
                                                                            </h4>
                                                                            <div className='productDetail__number'>
                                                                                <span style={{margin: '5px 0', fontSize:10}}>Số lượng:</span>
                                                                                <div className='number__control' style={{ margin: 0}}>
                                                                                    <span style={{ margin: 0,padding:'5px 12px',color:'#ffffff'}} onClick={()=>data.changleNumberProduct(e.id,'-')}>-</span>
                                                                                    <span style={{margin: '0 10px', fontSize:14,padding:'5px 12px',border:'1px solid #d69b4c'}}>{y.number}</span>
                                                                                    <span style={{margin: 0, padding:'5px 12px',color:'#ffffff'}} onClick={()=>data.changleNumberProduct(e.id,'+')}>+</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='control' >
                                                                            <span>{e.price}.000₫</span>
                                                                            <span onClick={()=>data.changleNumberProduct(e.id,'x')}>Xóa</span>
                                                                        </div>
                                                                    </li>
                                                                    ])
                                                                ])
                                                            }
                                                        </ul>
                                                        <div className='sum'>
                                                            <span>Tổng tiền:</span>
                                                            <span>{new Intl.NumberFormat('en-DE').format(data.sumMoney)}.000₫</span>
                                                        </div>
                                                        <Link to='/thanh-toan' className='payment' style={{marginBottom:20,backgroundColor:'red'}}>Thanh Toán</Link>
                                                        <Link to='/gio-hang' className='payment'>Giỏ hàng</Link>
                                                    </div>
                                                    :
                                                    <div className='not__product'>
                                                        <i className="fa-solid fa-cart-shopping"></i>
                                                        <span>Không có sản phẩm nào trong giỏ hàng !!!</span>
                                                    </div>
                                            }
                                            
                                        </div>
                                    </div>
                                </div>
                                <Link to='/dat-ban' className='header__booking'>
                                    <span>Đặt bàn</span>
                                </Link>
                            </div>
                        </div>
                        <div className='col c-0 l-12'>
                            <div className='grid' style={{backgroundColor:"#0e2825"}}>
                                <div className='row' style={{padding:'10px 20px'}}>
                                    <div className='col l-6'>
                                        <i onClick={toggleMenuMiniHandle} style={{color:'#ffffff',cursor:'pointer'} } className="fa-solid fa-bars"></i>
                                    </div>
                                    <div className='col l-6 header-res__control' style={{display:'flex',justifyContent:'flex-end'}}>
                                        <div className='header__cart' style={{margin:0}}>
                                            <Link to='/gio-hang' style={{position:"relative"}}>
                                                <i style={{color:'#ffffff'}} className="fa-solid fa-cart-shopping"></i>
                                                <div className='number'><span>{data.numberProduct}</span></div>
                                            </Link>
                                        </div>
                                        <div className='header__booking m-0'>
                                            <span style={{color:'#ffffff'}}>Đặt bàn</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header__menu-mini c-0 l-12' style={{ position: "fixed", top: 0, left: 0, zIndex: 102,width:250,pointerEvents:'none'}}>
                {
                    toggleMenuMini===true&&<div onClick={toggleMenuMiniHandle} className='menu-mini__overlay' style={{pointerEvents:'auto', position: "fixed", width: '100vw', height: '100vh', backgroundColor: 'rgba(4,4,5,.8)', zIndex: -1, top: 0, left: 0 }}></div>
                }
                <div className={`collection menu-mini__body ${toggleMenuMini===true?'active':'invalid'}`} style={{pointerEvents:'auto',backgroundColor:'#143b36',height:'100vh',overflowY:'auto',minHeight:'100vh',padding:0}}>
                    <div className='menu-mini__logo' style={{padding:20,width:'100%',borderBottom:'2px solid #ffffff'}}>
                        <Link to="/restaurant">
                            <img style={{width:"172px"}} src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1672455206343" alt="logo"></img>
                        </Link>
                    </div>
                    <ul className='collection__menu menu-mini__list' style={{ flexDirection: 'column', padding:10}}>
                        <li>
                            <NavLink to="/restaurant">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
                        </li>
                        <li className='collection-menu__dropdown'>
                            <div className='dropdown'>
                                <NavLink onClick={() => changeTypeFoodHandle('all')} to='/mon-an' style={toggleMenu === true ? { color: '#d69c52' } : { color: '#ffffff' }}>Món ăn </NavLink>
                            <div className={`dropdown__icon ${toggleMenu===true?'active':'invalid'}`} onClick={toggleMenuHandle}>
                                <div></div>
                                <div></div>
                            </div>
                            </div>
                            <div style={{paddingLeft:10} } className={`dropdown__list-type ${toggleMenu===true?'active':'invalid'}`}>
                                <ul className='' >
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('khaivi') }>Khai vị</Link></li>
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('monchinh') }>Món chính</Link></li>
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('monnuoc') }>Canh - Tiềm - Sup</Link></li>
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('com') }>Cơm - Mì - Cháo</Link></li>
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('trangmieng') }>Bánh và tráng miệng</Link></li>
                                <li><Link style={{ fontSize: 10}} to='/mon-an' onClick={()=>changeTypeFoodHandle('douong') }>Đồ uống</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink  to="/tin-tuc">Tin tức</NavLink>
                        </li>
                        <li>
                            <NavLink  to="/lien-he">Liên hệ</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation