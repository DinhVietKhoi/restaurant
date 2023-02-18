import React from 'react'
function TitleSection({title}) {
    return (
        <div className='titleSection' style={{ display: "flex", alignItems: 'center',margin:'0 auto 20px auto',justifyContent:'center' }}>
            <img src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/dish.png' alt="dish"></img>
            <span style={{ margin: "0 20px", fontFamily: ' "Dancing Script", cursive', fontSize: '48px', color: '#ffffff',textAlign:'center' }}>{title}</span>
            <img style={ {transform:'rotateY(180deg)'}} src='https://bizweb.dktcdn.net/100/469/097/themes/882205/assets/dish.png' alt="dish"></img>
        </div>
    )
}

export default TitleSection