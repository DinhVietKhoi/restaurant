import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import foodObject  from '../data/FoodAll'
import Product  from '../components/Product'

import '../sass/foodCollection.scss'
function FoodCollection({ breadCrumbHandle,changeTypeFoodHandle,typeFood }) {
  const [checkDropdown, setCheckDropdown] = useState(false)
  const dropDownHandle = () => {
    setCheckDropdown(!checkDropdown)
  }
    useEffect(() => {
      breadCrumbHandle({
        content: 'Tất cả món ăn',
        linkContent:'',
        contentMain: '',
        type: 1,
    })
    }, [])
  const [numberMore, setNumberMore] = useState(1)
  const IncreaseNumberMore = () => {
    setNumberMore(pre=>pre+=1)
  }
  const [productFilter, setProductFilter] = useState([])
  // console.log(foodObject)
  const [listFilter, setListFilter] = useState([])
  const addFilterhandle = (a) => {
    if (listFilter.includes(a) === false) {
      setListFilter(pre=>[...pre,a])
    }
    else {
      let listFilterFake = listFilter.filter(e => e !== a);
      setListFilter(listFilterFake)
    }
  }
  const [filterPrice, setFilterPrice] = useState(0)
  const addFilterPricehandle = (a) => {
      setFilterPrice(a)
  }
  const [sortProduct,setSortProduct] = useState('tang')
  const sortProductHandle = (a) => {
    setSortProduct(a)
  }
  useEffect(() => {
    setNumberMore(1)
    setProductFilter('')
    let productFilterFake = []
    let productFilterFinish
    foodObject.map(e => {
      if (filterPrice == 0) {
        productFilterFake=foodObject
      }
      else if (filterPrice == 1 && e.price < 100 ) {
          productFilterFake.push(e)
      }
      else if (filterPrice == 2 && e.price > 100 && e.price < 1000) {
        productFilterFake.push(e)
      }
      else if (filterPrice == 3 && e.price > 1000) {
        productFilterFake.push(e) 
      }
    })
    if (typeFood !== 'all') {
      productFilterFinish =  productFilterFake.filter(e => e.type == typeFood)
    }
    else if(typeFood=='all'){
      productFilterFinish = productFilterFake;
    }
    setProductFilter(productFilterFinish)
  }, [foodObject, filterPrice, typeFood])
  const [toggleFilter, setToggleFilter] = useState(false)
  const toggleFilterHandle = () => {
    setToggleFilter(!toggleFilter)
  }
  
  return (
    <div className='collection'>
      <div className='collection__container container'>
        <div className='grid'>
          <div className='row-gutter-big'>
            <div className='col-gutter-big c-3 l-0'>
              <div className='collection__menu boxControl'>
                <h4>DANH MỤC SẢN PHẨM</h4>
                <ul>
                  <li><Link to="/"> Trang chủ</Link></li>
                  <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
                  <li className='collection-menu__dropdown'>
                    <div className='dropdown'>
                      <Link onClick={()=>changeTypeFoodHandle('all') } to='/mon-an' style={{color:'#d69c52'}}>Các loại món ăn</Link>
                      <div className={`dropdown__icon ${checkDropdown===true?'active':'invalid'}`} onClick={dropDownHandle}>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                    <div className={`dropdown__list-type ${checkDropdown===true?'active':'invalid'}`}>
                      <ul className={typeFood}>
                        <li onClick={()=>changeTypeFoodHandle('khaivi')}>Khai vị</li>
                        <li onClick={()=>changeTypeFoodHandle('monchinh')}>Món chính</li>
                        <li onClick={()=>changeTypeFoodHandle('monnuoc')}>Canh - Tiềm - Sup</li>
                        <li onClick={()=>changeTypeFoodHandle('com')}>Cơm - Mì - Cháo</li>
                        <li onClick={()=>changeTypeFoodHandle('trangmieng')}>Bánh và tráng miệng</li>
                        <li onClick={()=>changeTypeFoodHandle('douong')}>Đồ uống</li>
                      </ul>
                    </div>
                  </li>
                  <li><Link to="/tin-tuc">Tin Tức</Link></li>
                  <li><Link to="/lien-he">Liên hệ </Link></li>
                </ul>
              </div>
              <div className='collection__filter boxControl'>
                <h4>BỘ LỌC</h4>
                <div className='filter__box'>
                    <span>
                      {
                        filterPrice==0?'Tất cả':filterPrice==1?'Dưới 100.000đ':filterPrice==2?'Từ 100.000đ - 1.000.000đ':'Trên 1.000.000đ'
                      }
                  </span>
                  {
                    listFilter && listFilter.map(e => [
                      <span key={e} onClick={()=>addFilterhandle(e)}><i className="fa fa-close"></i>{e}</span>
                    ])
                  }
                </div>
              </div>
              <div className='collection__priceList boxControl'>
                <h4>CHỌN MỨC GIÁ</h4>
                <ul>
                  <li>
                    <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='0'} value="0"></input>
                    <span>Tất cả</span>
                  </li>
                  <li>
                    <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='1'} value="1"></input>
                    <span>Dưới 100.000đ</span>
                  </li>
                  <li>
                    <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='2'} value="2"></input>
                    <span>Từ 100.000đ - 1.000.000đ</span>
                  </li>
                  <li>
                    <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='3'} value="3"></input>
                    <span>Trên 1.000.000đ</span>
                  </li>
                </ul>
              </div>
              <div className='collection__size boxControl'>
                <h4>Hương vị</h4>
                <ul>
                  <li>
                    <input checked={listFilter.includes("Mặn")} onChange={e=>addFilterhandle(e.target.value)} value='Mặn' type='checkbox'></input>
                    <span>Mặn</span>
                  </li>
                  <li>
                    <input checked={listFilter.includes("Ngọt")} onChange={e=>addFilterhandle(e.target.value)} value='Ngọt' type='checkbox'></input>
                    <span>Ngọt</span>
                  </li>
                  <li>
                    <input checked={listFilter.includes("Chua")} onChange={e=>addFilterhandle(e.target.value)} value='Chua' type='checkbox'></input>
                    <span>Chua</span>
                  </li>
                  <li>
                    <input checked={listFilter.includes("Cay")} onChange={e=>addFilterhandle(e.target.value)} value='Cay' type='checkbox'></input>
                    <span>Cay</span>
                  </li>
                </ul>
              </div>
              <div className='collection__taste boxControl'>
                <h4>KÍCH CỠ</h4>
                <ul>
                  <li>
                    <input checked={listFilter.includes("Lớn")} onChange={e=>addFilterhandle(e.target.value)} value='Lớn' type='checkbox'></input>
                    <span>Lớn</span>
                  </li>
                  <li>
                    <input checked={listFilter.includes("Vừa")} onChange={e=>addFilterhandle(e.target.value)} value='Vừa' type='checkbox'></input>
                    <span>Vừa</span>
                  </li>
                  <li>
                    <input checked={listFilter.includes("Nhỏ")} onChange={e=>addFilterhandle(e.target.value)} value='Nhỏ' type='checkbox'></input>
                    <span>Nhỏ</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='food__filter'>
              <div className={`food__filter__overlay ${toggleFilter===true?'active':'invalid'}`} onClick={toggleFilterHandle}></div>
              <div className={`food__filter__body ${toggleFilter===true?'active':'invalid'}`}>
                <i className={`${toggleFilter!==true?'fa-solid fa-filter':'fa-solid fa-x'}`} onClick={toggleFilterHandle}></i>
                <div className='food__filter__content'>
                  <div className='collection__menu boxControl'>
                  <h4>DANH MỤC SẢN PHẨM</h4>
                  <ul>
                    <li><Link to="/"> Trang chủ</Link></li>
                    <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
                    <li className='collection-menu__dropdown'>
                      <div className='dropdown'>
                        <Link onClick={()=>changeTypeFoodHandle('all') } to='/mon-an' style={{color:'#d69c52'}}>Các loại món ăn</Link>
                        <div className={`dropdown__icon ${checkDropdown===true?'active':'invalid'}`} onClick={dropDownHandle}>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div className={`dropdown__list-type ${checkDropdown===true?'active':'invalid'}`}>
                        <ul className={typeFood}>
                          <li onClick={()=>changeTypeFoodHandle('khaivi')}>Khai vị</li>
                          <li onClick={()=>changeTypeFoodHandle('monchinh')}>Món chính</li>
                          <li onClick={()=>changeTypeFoodHandle('monnuoc')}>Canh - Tiềm - Sup</li>
                          <li onClick={()=>changeTypeFoodHandle('com')}>Cơm - Mì - Cháo</li>
                          <li onClick={()=>changeTypeFoodHandle('trangmieng')}>Bánh và tráng miệng</li>
                          <li onClick={()=>changeTypeFoodHandle('douong')}>Đồ uống</li>
                        </ul>
                      </div>
                    </li>
                    <li><Link to="/tin-tuc">Tin Tức</Link></li>
                    <li><Link to="/lien-he">Liên hệ </Link></li>
                  </ul>
                </div>
                <div className='collection__filter boxControl'>
                  <h4>BỘ LỌC</h4>
                  <div className='filter__box'>
                      <span>
                        {
                          filterPrice==0?'Tất cả':filterPrice==1?'Dưới 100.000đ':filterPrice==2?'Từ 100.000đ - 1.000.000đ':'Trên 1.000.000đ'
                        }
                    </span>
                    {
                      listFilter && listFilter.map(e => [
                        <span key={e} onClick={()=>addFilterhandle(e)}><i className="fa fa-close"></i>{e}</span>
                      ])
                    }
                  </div>
                </div>
                <div className='collection__priceList boxControl'>
                  <h4>CHỌN MỨC GIÁ</h4>
                  <ul>
                    <li>
                      <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='0'} value="0"></input>
                      <span>Tất cả</span>
                    </li>
                    <li>
                      <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='1'} value="1"></input>
                      <span>Dưới 100.000đ</span>
                    </li>
                    <li>
                      <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='2'} value="2"></input>
                      <span>Từ 100.000đ - 1.000.000đ</span>
                    </li>
                    <li>
                      <input type='radio' name='radioPrice' onChange={e=>addFilterPricehandle(e.target.value)} checked={filterPrice=='3'} value="3"></input>
                      <span>Trên 1.000.000đ</span>
                    </li>
                  </ul>
                </div>
                <div className='collection__size boxControl'>
                  <h4>Hương vị</h4>
                  <ul>
                    <li>
                      <input checked={listFilter.includes("Mặn")} onChange={e=>addFilterhandle(e.target.value)} value='Mặn' type='checkbox'></input>
                      <span>Mặn</span>
                    </li>
                    <li>
                      <input checked={listFilter.includes("Ngọt")} onChange={e=>addFilterhandle(e.target.value)} value='Ngọt' type='checkbox'></input>
                      <span>Ngọt</span>
                    </li>
                    <li>
                      <input checked={listFilter.includes("Chua")} onChange={e=>addFilterhandle(e.target.value)} value='Chua' type='checkbox'></input>
                      <span>Chua</span>
                    </li>
                    <li>
                      <input checked={listFilter.includes("Cay")} onChange={e=>addFilterhandle(e.target.value)} value='Cay' type='checkbox'></input>
                      <span>Cay</span>
                    </li>
                  </ul>
                </div>
                <div className='collection__taste boxControl'>
                  <h4>KÍCH CỠ</h4>
                  <ul>
                    <li>
                      <input checked={listFilter.includes("Lớn")} onChange={e=>addFilterhandle(e.target.value)} value='Lớn' type='checkbox'></input>
                      <span>Lớn</span>
                    </li>
                    <li>
                      <input checked={listFilter.includes("Vừa")} onChange={e=>addFilterhandle(e.target.value)} value='Vừa' type='checkbox'></input>
                      <span>Vừa</span>
                    </li>
                    <li>
                      <input checked={listFilter.includes("Nhỏ")} onChange={e=>addFilterhandle(e.target.value)} value='Nhỏ' type='checkbox'></input>
                      <span>Nhỏ</span>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
            <div className='col- c-9 l-12'>
              <div className='collection__product'>
                <div className='collection-product__header'>
                  <span className='title'>{
                    typeFood === 'all' ? 'TẤT CẢ MÓN ĂN' :
                    typeFood === 'khaivi' ? 'KHAI VỊ' :
                    typeFood === 'douong' ? 'ĐỒ UỐNG' :
                    typeFood === 'monnuoc' ? 'CANH - TIỀM - SUP' :
                    typeFood === 'com' ? 'CƠM - MÌ - CHÁO' :
                    typeFood === 'monchinh' ? 'MÓN CHÍNH' :
                    'BÁNH VÀ TRÁNG MIỆNG'
                  }</span>
                  <div className='collection-product__filter'>
                    <div className='filter__dropdown'>
                      <select onChange={(e)=>sortProductHandle(e.target.value)}>
                        <option value='tang'>Giá tiền tăng dần</option>
                        <option value='giam'>Giá tiền giảm dần</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='collection-product__body'>
                  <div className='grid'>
                    <div className='row'>
                        {
                          productFilter && sortProduct == 'tang' ?
                          productFilter.sort((a,b)=>a.price-b.price).map((e, index) => [
                            index+1<=8*numberMore&&<Product
                                key={e}
                                id={e.id}
                                classProps='col c-3 l-6'
                                name={e.name}
                                price={e.price}
                                discount={e.discount}
                                img={e.image}
                                slug={e.slug}
                            />
                          ]) :
                          productFilter.sort((a,b)=>b.price-a.price).map((e, index) => [
                            index+1<=8*numberMore&&<Product
                                key={e}
                                id={e.id}
                                classProps='col c-3 l-6'
                                name={e.name}
                                price={e.price}
                                discount={e.discount}
                                img={e.image}
                                slug={e.slug}
                            />
                          ])
                      }
                      {
                        productFilter.length==0&&<span>ĐANG CẬP NHẬT MÓN ĂN...</span>
                      }
                    </div>
                  </div>
                  <div className='collection-product__getMore'>
                    {
                      numberMore<(productFilter.length/8)&&<span onClick={IncreaseNumberMore}>Xem thêm...</span>
                    }
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

export default FoodCollection