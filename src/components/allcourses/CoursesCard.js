import React from 'react'
import { coursesCard } from '../../dummyData'

export const CoursesCard = () => {
    return (
        <div>
            <section className='coursesCard'>
                <div className='container grid2'>
                    {coursesCard.map((val)=>{
                        return(
                        <div className='items'>
                            <div className='content flex'>
                                <div className='left'>
                                    <div className='img'>
                                        <img src={val.cover} alt='cover-pic2' />
                                    </div>
                                </div>
                                <div className='text'>
                                    <h1>{val.coursesName}</h1>
                                    <div className='rate'>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <label>(5.0)</label>
                                    </div>
                                    <div className='details'>
                                        {val.courTeacher.map((details)=>(
                                            <>
                                            <div className='box'>
                                                <div className='dimg'>
                                                    <img src={details.dcover} alt='cover-pic3' />
                                                </div>
                                                <div className='para'>
                                                    <h4>{details.name}</h4>
                                                </div>
                                            </div>
                                            <span>{details.totalTime}</span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='price'>
                                <h3>{val.priceAll}/{val.pricePer}</h3>
                            </div>
                            <button className='outline-btn'>ENROLL NOW !</button>
                        </div>
                    )})}
                </div>
            </section>
        </div>
    )
}
