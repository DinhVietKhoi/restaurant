import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NotFound({breadCrumbHandle}) {
    useEffect(() => {
        breadCrumbHandle({
            content: '404 không tìm thấy trang',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    },[])
    return (
        <div className='notFound'>
            <div
                className='notFound__container container'
                style={{ display: 'flex', flexDirection: 'column',alignItems:'center',color:"#ffffff",padding:'40px 0' }}
            >
                <h1 style={{fontSize:52,padding:0,margin:0,fontWeight:400}}>404</h1>
                <h4 style={{marginBottom:40,fontWeight:400}}>Trang này đang bị lỗi bạn vui lòng quay trở lại trang chủ</h4>
                <Link to='/restaurant' style={{marginBottom:30,padding:'10px 20px',color:"#ffffff",backgroundColor:"#d79f50",borderRadius:'10px'}}>Về trang chủ</Link>
            </div>
        </div>
    )
}

export default NotFound