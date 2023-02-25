import React, { useEffect, useState } from 'react'
import ScrollToTop from 'react-scroll-to-top';
import '../sass/scrollTop.scss'
function ScrollTop() {
    
    return (
        <div className="scrollTop">
            <ScrollToTop smooth />
        </div>
    )
}

export default ScrollTop