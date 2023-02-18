import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsData from '../data/NewsData'
import NewTag from '../components/NewTag'
import '../sass/newCollection.scss'
function NewCollection({breadCrumbHandle}) {
    useEffect(() => {
        breadCrumbHandle({
            content: 'Tin Tức',
            linkContent:'',
            contentMain: '',
            type: 1,
        })
    }, [])
    return (
        <div className='newCollection'>
            <div className='newCollection__container container'>
                <div className='grid'>
                    <div className='row-gutter-big'>
                        <div className='col-gutter-big c-3'>
                            <div className='boxControl'>
                                <h4>TIN TỨC LIÊN QUAN</h4>
                                <ul className='newCollection__box'>
                                    {
                                        NewsData && NewsData.map(e => [
                                            <li key={e}>
                                                <Link to={e.slug}>
                                                    <img alt='img' src={e.image}></img>
                                                    <span>{e.title}</span>
                                                </Link>
                                                
                                            </li>
                                        ])
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='col-gutter-big c-9'>
                            <div className='newCollection__news'>
                                <div className='news__header'>
                                    <h4>TIN TỨC</h4>
                                </div>
                                <div className='grid'>
                                    <div className='row'>
                                        {
                                            NewsData && NewsData.map(e => [
                                                <div className='col c-4' key={e}>
                                                    <NewTag
                                                        imageLink={e.image}
                                                        user={e.user}
                                                        title={e.title}
                                                        content={e.content}
                                                        time={e.time}
                                                        slug={e.slug}
                                                        id={e.id}
                                                    />
                                                </div>
                                            ])
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCollection