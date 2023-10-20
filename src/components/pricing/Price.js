import React from 'react'
import { Back } from '../common/back/Back'
import { PriceCard } from './PriceCard'
import { price } from '../../dummyData'
import { Faq } from './Faq'
import { faq } from '../../dummyData'


export const Price = () => {
    return (
        <div>
            <Back title='Choose The Right Plan' />
            <section className='price padding'>
                <div className='container grid'>
                    <PriceCard price={price} />
                </div>
            </section>
            <Faq faq={faq} />
        </div>
    )
}
