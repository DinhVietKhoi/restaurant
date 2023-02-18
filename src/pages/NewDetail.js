import React, { useContext, useEffect, useState } from 'react'
import foodObject from '../data/FoodAll'
import news from '../data/NewsData'
import { DataContext } from '../App'
import '../sass/newDetail.scss'
import { Link } from 'react-router-dom'
import TitleSection from '../components/TitleSection'
function NewDetail({breadCrumbHandle}) {

  const [productCurrent, setProductCurrent] = useState()
    useEffect(() => {
        setProductCurrent(news && news.filter(e => e.slug == window.location.pathname))
    }, [window.location.pathname])
  
    useEffect(() => {
        productCurrent&&breadCrumbHandle({
            content: 'Tin Tức',
            linkContent:'tin-tuc',
            contentMain: productCurrent[0].title,
            type: 2,
        })
    
    productCurrent&&console.log(productCurrent[0].title)
    }, [productCurrent])
  return (
    <div className='newDetail'>
      <div className='NewDetail__container container'>
        
        {
          productCurrent && <TitleSection title={productCurrent[0].title} />
        }
        <div className='newDetail__body'>
          <div className='newDetail__info'>
            <div className='time'>
              <i className="fa-solid fa-clock"></i>
              <strong>Ngày: 
                
              </strong>
              <span>
                  {
                    productCurrent && productCurrent[0].time
                  }
                </span>
            </div>
            <div className='user'>
              <i className="fa-solid fa-user"></i>
              <strong>Người viết:
                
              </strong>
              <span>
                  {
                    productCurrent && productCurrent[0].user
                  }
                </span>
            </div>
          </div>
          <div className='newDetail__content'>
            <img alt="" src={productCurrent && productCurrent[0].image}></img>
            <p>
                {
                  productCurrent && productCurrent[0].content
                }
            </p>
          </div>
          <div className='newDetail__update'><span>Bài viết chưa được hoàn thiện...!!!</span></div>
        </div>
      </div>
    </div>
  )
}

export default NewDetail