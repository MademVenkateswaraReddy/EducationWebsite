import React from 'react'
import { Back } from '../common/back/Back'

export const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3929353.8896644763!2d80.7610164!3d15.89546195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697365578299!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    return (
        <div>
            <Back title='Contact Us' />
            <section className='contact padding'>
                <div className='container shadow flexSB'>
                    <div className='left row'>
                        <iframe src={map}></iframe>
                    </div>
                    <div className='right row'>
                        <h1>Contact Us</h1>
                        <p>Ullam sit neque atque molestias placeat?</p>
                        <div className='items grid2'>
                            <div className='box'>
                                <h4>ADDRESS: </h4>
                                <p>198 west 21st street, suite 751 New York NY</p>
                            </div>
                            <div className='box'>
                                <h4>Email: </h4>
                                <p>info@gmail.com</p>
                            </div>
                            <div className='box'>
                                <h4>Phone: </h4>
                                <p>+123 456 7898</p>
                            </div>
                        </div>
                        <form>
                            <div className='flexSB'>
                                <input type='text' placeholder='Name' />
                                <input type='email' placeholder='Email' />
                            </div>
                            <input type='text' placeholder='Subject' />
                            <textarea cols='30' rows='10'>
                                Create a message here ...
                            </textarea>
                            <button className='primary-btn'>SEND MESSAGE</button>
                        </form>
                        <h3>Follow Us Here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBLE</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
