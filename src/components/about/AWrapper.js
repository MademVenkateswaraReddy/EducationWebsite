import React from 'react'
import { awrapper } from '../../dummyData'

export const AWrapper = () => {
    return (
        <div>
            <section className='awrapper'>
                <div className='container grid'>
                    {awrapper.map((val)=>(
                        <div className='box flex'>
                            <div className='img'>
                                <img src={val.cover} alt='cover-pic2' />
                            </div>
                            <div className='text'>
                                <h1>{val.data}</h1>
                                <h3>{val.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
