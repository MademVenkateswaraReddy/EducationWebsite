import React from 'react'
import { team } from '../../dummyData'

export const TeamCard = () => {
    return (
        <div>
            {team.map((val)=>(
                <div className='items shadow'>
                    <div className='img'>
                        <img src={val.cover} alt='team-pic' />
                        <div className='overlay'>
                            <i className='fab fa-facebook icon'></i>
                            <i className='fab fa-instagram icon'></i>
                            <i className='fab fa-twitter icon'></i>
                            <i className='fab fa-youtube icon'></i>
                        </div>
                    </div>
                    <div className='details'>
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
