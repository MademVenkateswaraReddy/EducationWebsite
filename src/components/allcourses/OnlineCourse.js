import React from 'react'
import {Title} from '../common/title/Title'

export const OnlineCourse = ({online}) => {
    return (
        <div>
            <section className='online'>
                <div className='container'>
                    <Title subtitle='COURSES' title='Browse Our Online Courses' />
                    <div className='content grid3'>
                        {online.map((val)=>(
                            <div className='box'>
                                <div className='img'>
                                    <img src={val.cover} alt='cover-pic4' />
                                    <img src={val.hoverCover} className='show' alt='cover-pic5' />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
