import React, { useState } from 'react'
import '../sass/tagBanner.scss'
function TagBanner({ linkImage, title }) {
    const [classOverlay, setClassOverlay] = useState(false)
    const overlayHandle = () => {
        setClassOverlay(!classOverlay)
    }
    return (
        <div className='tag-banner'>
            <div
                className='tag-banner__container'
                onMouseEnter={overlayHandle}
                onMouseLeave={overlayHandle}
                
            >
                <img src={linkImage} alt='image'></img>
                <div className={classOverlay===true?'tag-banner__overlay active':'tag-banner__overlay'}>
                    <span>Restaurant</span>
                    <span>{title}</span>
                </div>
            </div>
        </div>
    )
}

export default TagBanner