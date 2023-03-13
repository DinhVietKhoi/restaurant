import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/breadCrumb.scss'
function BreadCrumb({ breadCrumb }) {
    // console.log(breadCrumb)
    return (
        <div className='breadCrumb' style={breadCrumb===''?{opacity:'0',visibility:'hidden'}:{opacity:'1',visibility:'visible'}}>
            <div className='breadCrumb__container container'>
                <Link to='/restaurant'>Trang chủ</Link>
                <i className="fa-solid fa-chevron-right"></i>
                {
                    breadCrumb.type === 1
                        ?
                        <span className='breadCrumb__current'>{breadCrumb.content}</span>
                        :
                        <>
                            <Link to={`${breadCrumb.linkContent}`} className='breadCrumb__current'>{breadCrumb.content}</Link>
                            <i className="fa-solid fa-chevron-right"></i>
                            <span className='breadCrumb__current'>{breadCrumb.contentMain}</span>
                        </>
                }
            </div>
        </div>
    )
}

export default BreadCrumb