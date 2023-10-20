import React from 'react'
import { blog } from '../../dummyData'
import { Title } from '../common/title/Title'

export const HBlog = () => {
    return (
        <div>
            <section className='blog'>
                <div className='container'>
                    <Title subtitle='Our Blog' title='recent from blog' />
                    <div className='grid2'>
                    {blog.slice(0,3).map((val)=>{
                return (
                <div className='items shadow'>
                    <div className='img'>
                        <img src={val.cover} alt='blog' />
                    </div>
                    <div className='text'>
                        <div className='admin flexSB'>
                            <span>
                                <i className='fa fa-user'></i>
                                <label>{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calendar-alt'></i>
                                <label>{val.date}</label>
                            </span>
                            <span>
                                <i className='fa fa-comments'></i>
                                <label>{val.com}</label>
                            </span>
                        </div>
                        <h1>{val.title}</h1>
                        <h1>{val.desc}</h1>
                    </div>
                </div>
            )})}
                    </div>
                </div>
            </section>
        </div>
    )
}
