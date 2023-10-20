import React from 'react'
import { Hero } from './Hero'
import { AboutCard } from '../../about/AboutCard'
import { homeAbout } from '../../../dummyData'
import { HAbout } from './HAbout'
import { Test } from './testimonial/Test'
import { HBlog } from '../../blog/HBlog'
import { HPrice } from './testimonial/HPrice'

export const Home = () => {
    return (
        <div>
            <Hero />
            <AboutCard homeAbout={homeAbout} />
            <HAbout />
            <Test />
            <HBlog />
            <HPrice />
        </div>
    )
}
