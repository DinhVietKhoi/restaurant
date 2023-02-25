import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Product from '../components/Product'
import TagCategoryFeatured from '../components/TagCategoryFeatured'
import TitleSection from '../components/TitleSection'
import foodObject  from '../data/FoodAll'
import news  from '../data/NewsData'

import '../sass/home.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TagBanner from '../components/TagBanner';
import NewTag from '../components/NewTag';
import FeedBack from '../components/FeedBack';
function Home({ breadCrumbHandle }) {
    const [typeFood, setTypeFood] = useState('khaivi')
    const changeTypeFoodHandle = (a) => {
        setTypeFood(a)
    }
    useEffect(() => {
        breadCrumbHandle('')
    },[])
    return (
        <>
            <div className='home'>
                <section className='home__banner'>
                    <div className='home__banner__img'>
                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/slider_1.jpg?1672455206343" alt="banner"></img>
                    </div>
                    <div className='home__banner__title'>
                        <span>Restaurant</span>
                        <span>Món ăn đa dạng</span>
                        <Link to='/mon-an' style={{color:'#ffffff'}}>Mua ngay</Link>
                    </div>
                </section>
                <section className='home__aboutUs'>
                    <div className='home__container container'>
                        <div className=' grid'>
                            <div className='row'>
                                <div className='col c-6 l-12' style={{marginBottom:20}}>
                                    <div className='home-aboutUs__content'>
                                        <h4>Về Chúng Tôi</h4>
                                        <h2>Restaurant</h2>
                                        <p>
                                        Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.
                                        </p>
                                        <Link to="/mon-an">
                                            <span>Xem Món Ăn</span>
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col c-6 l-12'>
                                    <div className='home-aboutUs__image'>
                                        <Link to="/mon-an">
                                            <img src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/about_image.jpg?1672455206343' alt="about"></img>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home__category-featured'>
                    <div className='home__container container'>
                        <TitleSection title="Danh mục nổi bật" />
                        <Swiper
                            breakpoints={{
                                992: {
                                    slidesPerView: 4,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 1,
                                }
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-edit'
                            >
                            <SwiperSlide>
                                <TagCategoryFeatured
                                    link="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_1.jpg?1672455206343"
                                    name="Món bò"
                                    content="Các món bò được chế biến tinh tế đặc biệt nhất"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TagCategoryFeatured
                                    link="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_2.jpg?1672455206343"
                                    name="Món gà"
                                    content="Các món gà được chế biến tinh tế đặc biệt nhất"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TagCategoryFeatured
                                    link="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_3.jpg?1672455206343"
                                    name="Món heo"
                                    content="Các món heo được chế biến tinh tế đặc biệt nhất"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TagCategoryFeatured
                                    link="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_4.jpg?1672455206343"
                                    name="Món cá"
                                    content="Các món cá được chế biến tinh tế đặc biệt nhất"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TagCategoryFeatured
                                    link="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/cate_5.jpg?1672455206343"
                                    name="Các món khác"
                                    content="Các món ăn được chế biến tinh tế đặc biệt nhất"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='home__menu'>
                    <div className='home__container container'>
                        <TitleSection title="Thực đơn của chúng tôi" />
                        <div className='home__menu-body'>
                        <ul className={`home-menu__list ${typeFood}`} style={{paddingBottom:10}}>
                            <li style={{minWidth: '120px'}} onClick={()=>changeTypeFoodHandle('khaivi')}>
                                <span>Khai vị</span>
                            </li>
                            <li style={{minWidth: '145px'}} onClick={()=>changeTypeFoodHandle('monchinh')}>
                                <span>Món chính</span>
                            </li>
                            <li style={{minWidth: '210px'}} onClick={()=>changeTypeFoodHandle('monnuoc')}>
                                <span>Canh - Tiềm - Sup</span>
                            </li>
                            <li style={{minWidth: '200px'}} onClick={()=>changeTypeFoodHandle('com')}>
                                <span>Cơm - Mì - Cháo</span>
                            </li>
                            <li style={{minWidth: '210px'}} onClick={()=>changeTypeFoodHandle('trangmieng')}>
                                <span>Bánh tráng miệng</span>
                            </li>
                            <li style={{minWidth: '140px'}} onClick={()=>changeTypeFoodHandle('douong')}>
                                <span>Đồ uống</span>
                            </li>
                        </ul>
                        <div className='grid'>
                            <div className='row-gutter-big'>
                                {
                                    foodObject.map(e => [
                                        e.type == typeFood &&
                                        <Product
                                            key={e}
                                            id={e.id}
                                            classProps='col-gutter-big c-3 l-6'
                                            name={e.name}
                                            price={e.price}
                                            discount={e.discount}
                                            img={e.image}
                                            slug={e.slug}
                                        />
                                    ])
                                }
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </section>
                <section className='home__favorite-food'>
                    <div className='home__container container'>
                    <TitleSection title="Món ăn được yêu thích" />
                        <Swiper
                            breakpoints={{
                                1200: {
                                    slidesPerView: 5,
                                },
                                992: {
                                    slidesPerView: 4,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                375: {
                                    slidesPerView: 2,
                                }
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                        >
                            {
                                foodObject.map((e,index) => [
                                    index<6&&<SwiperSlide>
                                                <Product
                                                    key={e}
                                                    id={e.id}
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
                </section>
                <section className='home__mini-banner'>
                    <div className='home__container container'>
                        <div className='grid'>
                            <div className='row-gutter-big' style={{paddingBottom:20}}>
                                <div className='mini-banner__item col-gutter-big c-3 l-6 m-12'>
                                    <TagBanner
                                        linkImage='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner1.png?1672455206343'
                                        title='Món ăn đa dạng' />
                                    <div className='number'>
                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke1.png?1672455206343" alt='icon'></img>
                                        <div className="number__group">
                                            <span>8+</span>
                                            <span>Cửa hàng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='mini-banner__item col-gutter-big c-3 l-6 m-12'>
                                    <TagBanner
                                        linkImage='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner2.png?1672455206343' 
                                        title='Hương vị đặc biệt' />
                                    <div className='number'>
                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke2.png?1672455206343" alt='icon'></img>
                                        <div className="number__group">
                                            <span>200+</span>
                                            <span>Nhân viên</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='mini-banner__item col-gutter-big c-3 l-6 m-12'>
                                    <TagBanner
                                        linkImage='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner3.png?1672455206343' 
                                        title='Công thức đặc quyền' />
                                    <div className='number'>
                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke3.png?1672455206343" alt='icon'></img>
                                        <div className="number__group">
                                            <span>5000+</span>
                                            <span>Khách hàng</span>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='mini-banner__item col-gutter-big c-3 l-6 m-12'>
                                    <TagBanner
                                        linkImage='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/banner4.png?1672455206343' 
                                        title='Đảm bảo chất lượng' />
                                    <div className='number'>
                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke4.png?1672455206343" alt='icon'></img>
                                        <div className="number__group">
                                            <span>50+</span>
                                            <span>Món ăn</span>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='home__new'>
                    <div className='home__container container'>
                        <TitleSection title='Tin tức' />
                        <Swiper
                            breakpoints={{
                                992: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                375: {
                                    slidesPerView: 1,
                                }
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-edit'
                        >
                            {
                                news && news.map(e => [
                                    <SwiperSlide>
                                        <NewTag
                                            imageLink={e.image}
                                            user={e.user}
                                            title={e.title}
                                            content={e.content}
                                            time={e.time}
                                            slug={e.slug}
                                            id={e.id}
                                        />
                                    </SwiperSlide>
                                ])
                            }
                            
                            
                        </Swiper>
                    </div>
                </section>
                <section className='home__feedback'>
                    <div className='home__container container'>
                        <div className='grid'>
                            <div className='row'>
                                <div className='col c-6 l-12'>
                                    <Swiper
                                        slidesPerView={1}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        className='swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-edit'
                                    >
                                        <SwiperSlide>
                                            <FeedBack
                                                avatar='https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg'
                                                name='Hồng Nhung'
                                                work='Thư ký giám đốc'
                                                content='Món ăn sang chảnh, tôi sẽ luôn ủng hộ nhà hàng Restaurant'
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <FeedBack
                                                avatar='https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg'
                                                name='Hoài Trang'
                                                work='Sinh viên trường ngân hàng'
                                                content='Món ăn sang chảnh, tôi sẽ luôn ủng hộ nhà hàng Restaurant'
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <FeedBack
                                                avatar='https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg'
                                                name='Kim Nguyên'
                                                work='Con gái chủ tịch GPT'
                                                content='Món ăn sang chảnh, tôi sẽ luôn ủng hộ nhà hàng Restaurant'
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        </>
    )
}

export default Home