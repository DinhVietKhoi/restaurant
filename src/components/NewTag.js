import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/newTag.scss'
function NewTag({ imageLink, user, title, content, time, slug, id }) {
    return (
        <Link to={slug} className='new'>
            <div className='new__container'>
                <div className='new__image'>
                    <img alt='img' src={imageLink} loading="lazy"></img>
                    <span>{time}</span>
                </div>
                <div className='new__content'>
                    <span>Đăng bởi: { user}</span>
                    <span>{ title}</span>
                    <p>{content}</p>
                </div>
            </div>
        </Link>
    )
}

export default NewTag