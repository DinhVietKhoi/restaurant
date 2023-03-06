import React from 'react'
import '../sass/feedBack.scss'
function FeedBack({ name,avatar,work,content}) {
    return (
        <div className='feedback'>
            <div className='feedback__container'>
                <div className='feedback__user'>
                    <div className='feedback__info'>
                        <img src={avatar} alt='img' loading="lazy"></img>
                        <div className='feedback__name'>
                            <span>{name}</span>
                            <span>{work}</span>
                        </div>
                    </div>
                    <div className='feedback__quote'>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div className='feedback__content'><p>{ content}</p></div>
            </div>
        </div>
    )
}

export default FeedBack