import React from 'react'
import { BlogCard } from './BlogCard'
import { Back } from '../common/back/Back'

export const Blog = () => {
    return (
        <div>
            <Back title='Blog Posts' />
            <section className='blog padding'>
                <div className='container'>
                    <BlogCard />
                </div>
            </section>
        </div>
    )
}
