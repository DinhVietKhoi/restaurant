import React, { useEffect } from 'react'
import TitleSection from '../components/TitleSection'
import '../sass/introduce.scss'
function Introduce({breadCrumbHandle}) {
    useEffect(() => {
        breadCrumbHandle({
            content: 'Giới thiệu',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    },[])
    return (
        <div className='introduce'>
            <div className='introduce__container container'>
                <TitleSection title="GIỚI THIỆU" />
                <div className='introduce__group grid'>
                    <div className='row'>
                        <div className='introduce__content col c-6 l-12' style={{marginBottom:20}}> 
                            <p style={{marginBottom:20}}>
                                RESTAURANT - Nhà hàng ẩm thực hiện đại kết hợp với truyền thống, tạo nên tính mới lạ cho thực khách.
                                <br></br>
                                Được ra đời vào năm 2021 với tiêu chí "Khách hàng là trên hết" nên chúng tôi luôn tự hào về cách phục vụ cũng như các món ăn mà chúng tôi làm ra. Nhà hàng chúng tôi luôn luôn đặt khách hàng lên hàng đầu, tận tâm phục vụ, mang lại cho khách hàng những trãi nghiệm tuyệt với nhất.
                                <br></br>
                                Các món ăn với công thức độc quyền sẽ mang lại hương vị mới mẻ cho thực khách.
                                <br></br>
                                Restaurant xin chân thành cảm ơn.
                            </p>
                            <span>&#128516;&#128516; HÃY ĐẾN RESTAURANT ĐỂ THƯỞNG THỨC NGAY BẠN NHÉ! &#128516;&#128516;</span>
                        </div>
                        
                        <img
                            className='col c-6 l-12'
                            src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/about_image.jpg?1672455206343'
                            alt='img'
                        >
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce