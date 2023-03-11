import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import order from '../assets/order.webp'
import TitleSection from '../components/TitleSection'
import '../sass/order.scss'
function Order({breadCrumbHandle}) {
    useEffect(() => {
        breadCrumbHandle({
            content: 'Đặt bàn',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        toast("Chức năng đang được phát triển!!!")
    }
    return (
        <div className='order'> 
            <div style={{backgroundImage:`url(${order})`}} className='grid order__container container'>
                <div className='row'>
                    <div className='col c-8 l-12 order__box'>
                        <form className='order__form' onSubmit={handleSubmit}>
                            <TitleSection title={"Liên hệ đặt bàn"} />
                            <div className='order-form__body'>
                                <div className='group'>
                                    <fieldset>
                                        <label>Tên của bạn:</label>
                                        <input id="name" name='name' placeholder="Tên của bạn..."></input>
                                    </fieldset>
                                    <fieldset>
                                        <label>Số điện thoại của bạn:</label>
                                        <input id="phone" name='phone' placeholder="Số điện thoại..." type='number'></input>
                                    </fieldset>
                                    <fieldset>
                                        <label>Bạn đi mấy người?</label>
                                        <input id="people" name='people' placeholder="Số người..." type='number'></input>
                                    </fieldset>
                                </div>
                                <div className='group'>
                                    <fieldset>
                                        <label>Email của bạn:</label>
                                        <input id="email" name='email' placeholder="Email" type='email'></input>
                                    </fieldset>
                                    <fieldset>
                                        <label>Bạn có thể đến dùng ngày nào?</label>
                                        <input id="date" name='date' type='date'></input>
                                    </fieldset>
                                    <fieldset>
                                        <label>Thời gian bạn đến?</label>
                                        <input  id="time" name='time' type='time'></input>
                                    </fieldset>
                                </div>
                            </div>
                            <span className='note'>Khách đặt tiệc hội nghị, liên hoan vui lòng gọi trực tiếp:
                                <a href="tel:19006750">1900 6750</a>
                            </span>
                            <button type='submit'>Đặt bàn ngay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order