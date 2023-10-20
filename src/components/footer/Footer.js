import React from 'react'
import { blog } from '../../dummyData'

export const Footer = () => {
    return (
        <div>
            <section className='newletter'>
                <div className='container flexSB'>
                    <div className='left row'>
                        <h1>Newsletter -Stay tune and get the latest updates</h1>
                        <p>far far away, behind the world mountaines.</p>
                    </div>
                    <div className='right row'>
                        <input type='text' placeholder='Enter Email Address' />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className='container padding'>
                    <div className='box logo'>
                        <h1>ACADEMIA</h1>
                        <span>online education & learning</span>
                        <p>LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum LOrem Ipsum v LOrem Ipsum LOrem Ipsum LOrem Ipsum</p>
                        <i className='fa fa-facebook-f icon'></i>
                        <i className='fa fa-instagram icon'></i>
                        <i className='fa fa-twitter icon'></i>
                    </div>
                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className='box link'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className='bxo'>
                        <h3>Recent Post</h3>
                        {blog.slice(0,3).map((val)=>{
                            return (
                            <div className='items flexSB'>
                                <div className='img'>
                                    <img src={val.cover} alt='blog' />
                                </div>
                                <div className='text'>
                                    <span>
                                        <i className='fa fa-user'></i>
                                        <label>{val.type}</label>
                                    </span>
                                    <span>
                                        <i className='fa fa-calendar'></i>
                                        <label>{val.date}</label>
                                    </span>
                                    <h4>{val.date}</h4>
                                </div>
                            </div>
                        )})}
                    </div>
                    <div className='boc last'>
                        <h3>Have a Queation?</h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                203 Fake ST. Mount View, san fransiisco california, USA
                            </li>
                            <li>
                                <i className='fa fa-phone-alt'></i>
                                +123 456 7898
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'></i>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className='legal'>
                <p>Copyright @2022 All rights reserved | This template is made with <i className='fa fa-heart'> by Goraka.</i></p>
            </div>
        </div>
    )
}
