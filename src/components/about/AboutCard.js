import React from 'react'
import { Title } from '../common/title/Title'
import { AWrapper } from './AWrapper'
import { awrapper } from '../../dummyData'

export const AboutCard = ({homeAbout}) => {
    return (
        <div>
            <section className='aboutHome'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <img src='./images/about.webp' alt='about-pic' />
                    </div>
                    <div className='right row'>
                        <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
                        <div className='items'>
                            {homeAbout.map((val)=>(
                                <div className='item flexSB'>
                                    <div className='img'>
                                    <img src={val.cover} alt='cover-png' />
                                    </div>
                                    <div className='text'>
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <AWrapper awrapper={awrapper} />
        </div>
    )
}
