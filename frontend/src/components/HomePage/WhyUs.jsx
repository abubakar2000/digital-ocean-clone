import React from 'react'
import chooseus1 from '../../img/chooseus1.png'
import chooseus2 from '../../img/chooseus2.png'
import chooseus3 from '../../img/chooseus3.png'

export default function WhyUs() {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="about-content" style={{ width: '100%' }}>
                        <div className="row">
                            <div className="section-title text-center">
                                <p>Best HOSTING</p>
                                <h1>Why Choose Us?</h1>
                            </div>
                        </div>
                        <div className="stats justify-content-center">
                            <div className="row">
                                <div className="col-md-4 text-center">
                                    <img src={chooseus1} alt="" />
                                    <h6>99.9% Uptime Gurantee</h6>
                                    <p>Share processes and data secure
                                        lona need to know basis</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={chooseus2} alt="" />
                                    <h6>Projects Done</h6>
                                    <p>Share processes and data secure
                                        lona need to know basis</p>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img src={chooseus3} alt="" />
                                    <h6>Happy Clients</h6>
                                    <p>Share processes and data secure
                                        lona need to know basis</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="btn btn-01" >Contact Us</a>

                    </div>
                </div>
            </div>
        </section>
    )
}
