import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/tagCategoryFeatured.scss'

function TagCategoryFeatured({ classProps, link, name, content }) {
    return (
        <Link to="/" className={`tagCategoryFeatured ${classProps}`} style={{marginBottom:10,textDecoration:'none'}}>
            <div style={{ border:'1px solid #ffffff',borderRadius:10,padding:10}}>
                <div className='tagCategoryFeatured__box'>
                    <img src={link} alt=""></img>
                    <span style={{marginTop:10,fontSize:'24px'}}>{ name}</span>
                    <p style={{textAlign:"center",lineHeight:'2'}}>{content}</p>
                </div>
            </div>
        </Link>
    )
}

export default TagCategoryFeatured