import React from 'react'
import FrontBanner from '../components/HomePage/FrontBanner'
import WhyUs from '../components/HomePage/WhyUs'
import Pricing from '../components/HomePage/Pricing'
import Navbar from '../components/Navbar'

export default function HomePage() {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <FrontBanner></FrontBanner>
                <WhyUs></WhyUs>
                <Pricing></Pricing>
            </div>
        </>
    )
}
