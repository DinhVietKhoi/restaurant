import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import '../sass/contact.scss'
function Contact({ breadCrumbHandle }) {
    
    useEffect(() => {
        breadCrumbHandle({
            content: 'Liên hệ',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    }, [])
    const submitHandle = (e) => {
        e.preventDefault();
        toast("Chức năng đang được phát triển!!")

    }
    return (
        <div className='contact'>
            <div className='contact__container container'>
                <div className='grid'>
                    <div className='row'>
                        <div className='col c-6 l-12'>
                            <div className='boxControl'>
                                <h4>NHÀ HÀNG DOLA RESTAURANT</h4>
                                <div className='info'>
                                    <ul>
                                        <li>
                                            <p>Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất. Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách. Dola Restaurant xin chân thành cảm ơn.</p>
                                        </li>
                                        <li>
                                            <h5>Cửa hàng chính</h5>
                                        </li>
                                        <li>
                                            <strong>Địa chỉ:</strong><span>70 Lữ Gia, phường 15, quận 11, TP.HCM</span> 
                                        </li>
                                        <li>
                                            <strong>Điện thoại:</strong><a className="footer__number" href="tel:19006750"> 1900 6750</a>
                                        </li>
                                        <li>
                                            <strong>Email:</strong><a className="footer__email" href="mailto:support@sapo.vn"> support@sapo.vn</a>
                                        </li>
                                        <li  className='gohome'>
                                            <Link to="/restaurant">Về trang chủ</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col c-6 l-12'>
                            <div className='boxControl'>
                                <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                                <div className='info'>
                                    <form onSubmit={submitHandle}>
                                        <input placeholder='Họ và tên'></input>
                                        <input placeholder='Email' type='email'></input>
                                        <input placeholder='Điện thoại' type='number'></input>
                                        <textarea placeholder='Nội dung' rows='3'></textarea>
                                        <button type="submit">Gửi thông tin</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact