import React from 'react'
import { Back } from '../common/back/Back'
import { AboutCard } from './AboutCard'
import { homeAbout } from '../../dummyData'

export const About = () => {
    return (
        <div>
            <Back title='About Us' />
            <AboutCard homeAbout={homeAbout} />
        </div>
    )
}
