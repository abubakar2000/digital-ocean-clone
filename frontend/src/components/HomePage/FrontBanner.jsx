import React from 'react'
import banner_image from "../../img/banner_image.png";


export default function FrontBanner() {
    return (
        <section className="home-section" id="home">
            <div className="shape-01">
            </div>
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-md-7">
                        <div className="home-content">
                            <h4>We provide</h4>
                            <h2>PREMIUM HOSTING</h2>
                            <p className='text-dark text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard dummy
                                text ever since the 1500s.</p>
                            <button onClick={() => {
                                window.scroll({
                                    top:window.scrollBy({
                                        top:1*window.innerHeight,
                                        behavior:"smooth"
                                    })
                                })
                            }} className='btn btn-primary btn-lg get-started text-ligt'>Get Started</button>
                            <button 
                            onClick={() => {
                                window.scroll({
                                    top:window.scrollBy({
                                        top:2*window.innerHeight,
                                        behavior:"smooth"
                                    })
                                })
                            }}
                            className='btn btn-outline-primary btn-lg text-dark know-more'>Know More</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={banner_image} style={{ width: 'auto', height: 'auto' }} alt="" />
                    </div>
                </div>
            </div>
        </section>

    )
}
