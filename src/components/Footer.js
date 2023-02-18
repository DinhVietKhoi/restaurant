import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/footer.scss'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col c-5 l-12'>
                            <ul className='footer__logo'>
                                <li>
                                    <Link to="/">
                                        <img src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/logo.png?1672455206343" alt="logo"></img>
                                    </Link>
                                </li>
                                <li>
                                    <p>Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.</p>
                                </li>
                                <li className='footer__address'>
                                    Cửa hàng chính
                                </li>
                                <li>
                                    <strong>
                                        Địa chỉ: 
                                    </strong>
                                    <span>70 Lữ Gia, phường 15, quận 11, TP.HCM</span>
                                </li>
                                <li>
                                    <strong>Điện thoại:</strong>
                                    <a className="footer__number" href='tel:19006750'> 1900 6750</a>
                                </li>
                                <li>
                                    <strong>Email:</strong>
                                    <a className="footer__email" href='mailto:support@sapo.vn'> support@sapo.vn</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col c-7 l-12'>
                            <div className='grid'>
                                <div className='row'>
                                    <div className='col c-4 l-6'>
                                        <ul>
                                            <li>
                                                <span>HƯỚNG DẪN</span>
                                            </li>
                                            <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                                            <li><Link to="/">Hướng dẫn thanh toán</Link></li>
                                            <li><Link to="/">Đăng ký thành viên</Link></li>
                                            <li><Link to="/">Hỗ trợ khách hàng</Link></li>
                                        </ul>
                                    </div>
                                    <div className='col c-4 l-6'>
                                        <ul>
                                            <li>
                                                <span>CHÍNH SÁCH</span>
                                            </li>
                                            <li><Link to="/">Chính sách thành viên</Link></li>
                                            <li><Link to="/">Chính sách thanh toán</Link></li>
                                            <li><Link to="/">Hướng dẫn mua hàng</Link></li>
                                            <li><Link to="/">Bảo mật thông tin cá nhân</Link></li>
                                            <li><Link to="/">Quà tặng tri ân</Link></li>
                                            
                                            
                                        </ul>
                                    </div>
                                    <div className='col c-4 l-12'>
                                        <ul>
                                            <li className='footer__social'>
                                                <span>MẠNG XÃ HỘI</span>
                                                <div >
                                                    <Link to='/'>
                                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/zalo.svg?1672455206343" alt='img'></img>
                                                    </Link>
                                                    <Link to='/'>
                                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/facebook.svg?1672455206343" alt='img'></img>
                                                    </Link>
                                                    <Link to='/'>
                                                        <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/youtube.svg?1672455206343" alt='img'></img>
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className='footer__pay'>
                                                <span>HÌNH THỨC THANH TOÁN</span>
                                                <div >
                                                    <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_1.png?1672455206343" alt='img'></img>
                                                    <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_2.png?1672455206343" alt='img'></img>
                                                    <img src="https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/payment_3.png?1672455206343" alt='img'></img>
                                                </div>
                                            </li>
                                            
                                        </ul>
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

export default Footer