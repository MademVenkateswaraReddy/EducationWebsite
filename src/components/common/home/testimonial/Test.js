import React from 'react'
import { Title } from '../../title/Title'
import { testimonal } from '../../../../dummyData'

export const Test = () => {
    return (
        <div>
            <section className='testimonial padding'>
                <div className='container'>
                    <Title subtitle='testimonial' title='our successful students' />
                    <div className='content grid2'>
                        {testimonal.map((val)=>(
                            <div className='items shadow'>
                                <div className='box flex'>
                                    <div className='img'>
                                        <img src={val.cover} alt='test' />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className='name'>
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
