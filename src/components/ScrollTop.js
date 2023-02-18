import React, { useEffect, useState } from 'react'
import '../sass/scrollTop.scss'
function ScrollTop() {
    const [toggleShow, setToggleShow] = useState(false)
    const toggleHandle = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setToggleShow(true)
        } 
        else if (scrolled <= 300){
            setToggleShow(false)
        }
    }
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 9);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleHandle);
        return () => {
            window.removeEventListener('scroll', toggleHandle);
        }
    },[])
    return (
        <div className="scrollTop">
            <i  
                onClick={scrollToTop}
                className="fa-solid fa-chevron-left"
                style={toggleShow!==true?{display:'none'}:{display:'block'}}
            ></i>
        </div>
    )
}

export default ScrollTop