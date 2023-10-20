import React from 'react'
import { Title } from '../title/Title'

export const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
                        <p>Here is some text to enter about your educational website. Detailed infromation required to fill in here includes personal and professional details. If anybody interested please contact me to add your institute details. Thank you.</p>
                        <div className='button'>
                            <button className='primary-btn'>GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                            <button>VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </div>
    )
}
