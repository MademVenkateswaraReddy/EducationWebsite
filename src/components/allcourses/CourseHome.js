import React from 'react'
import { Back } from '../common/back/Back'
import { CoursesCard } from './CoursesCard'
import { OnlineCourse } from './OnlineCourse'
import { online } from '../../dummyData'

export const CourseHome = () => {
    return (
        <div>
            <Back title='Explore Courses' />
            <CoursesCard />
            <OnlineCourse online={online} />
        </div>
    )
}
