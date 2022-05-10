import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import bg from '../img/bg.jpg'
import droplet_basics from '../img/droplet_basics.svg'
import green_checkmark from '../img/green_checkmark.svg'
import droplet_premium from '../img/droplet_premium.svg'

export default function ProductPage() {
    
    return (
        <div className='container-fluid'>
            <div className="row front-bg text-light" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
                <div className="col-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="col-10 text-center py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <h1 style={{ fontSize: '80px', color: 'white', fontWeight: 'bold' }}>Simple, affordable virtual machines</h1>
                </div>
                <div className="col-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="col-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="col-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <p>
                        Get dependable uptime with our 99.99% SLA, simple security tools, and predictable monthly pricing with DigitalOcean's virtual machines, called Droplets.
                    </p>
                </div>
                <div className="col-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="col-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', margin: '0 auto' }}>
                    <button className="btn btn-primary rounded-1 btn-md text-ligt py-2 m-1">Signup with email</button>
                    <button className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1">
                        <img src="https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg" alt='' width="20" /> Sign In with Gmail
                    </button>
                    <button className="btn btn-light rounded-3 btn-md text-ligt py-2 m-1">
                        <img src="https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg" alt='' width="20" /> Sign In with Github
                    </button>
                </div>
                <div className="col-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
                <div className="col-12 py-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            </div>
            <div className="pricing6">
                <div className="container-fluid">
                    <div className="row mt-4 text-center">
                        <h1 className='my-5' style={{ fontSize: '48px' }}>
                            Comprehensive, cost-effective cloud computing
                        </h1>
                        <div className="col-md-4" style={{ fontSize: '11px' }}>
                            <div className="card card-shadow border-0 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center">
                                        <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-12 align-self-center">
                                            <h4>
                                                <Link to='/postdetails' className='text-decoration-none text-dark' style={{ fontSize: '24px' }}>
                                                    What is FaaS? Function as a Service explained
                                                </Link>
                                            </h4>
                                            <p>
                                                Function as a Service, or FaaS, is a subset of serverless computing that’s focused on event-driven triggers. Learn the benefits of FaaS and when it may be the right choice for you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <Link to='/productdetails' className='text-decoration-none bold'>Read More {'>>'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ fontSize: '11px' }}>
                            <div className="card card-shadow border-0 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center">
                                        <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-12 align-self-center">
                                            <h4>
                                                <Link to='/postdetails' className='text-decoration-none text-dark' style={{ fontSize: '24px' }}>
                                                    What is FaaS? Function as a Service explained
                                                </Link>
                                            </h4>
                                            <p>
                                                Function as a Service, or FaaS, is a subset of serverless computing that’s focused on event-driven triggers. Learn the benefits of FaaS and when it may be the right choice for you.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <Link to='/productdetails' className='text-decoration-none bold'>Read More {'>>'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" style={{ fontSize: '11px' }}>
                            <div className="card card-shadow border-0 mb-4">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center">
                                        <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                    </div>
                                    <div className="row my-5">
                                        <div className="col-lg-12 align-self-center">
                                            <h4>
                                                <Link to='/postdetails' className='text-decoration-none text-dark' style={{ fontSize: '24px' }}>
                                                    What is FaaS? Function as a Service explained
                                                </Link>
                                            </h4>
                                            <p>
                                                Function as a Service, or FaaS, is a subset of serverless computing that’s focused on event-driven triggers. Learn the benefits of FaaS and when it may be the right choice for you.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <Link to='/productdetails' className='text-decoration-none bold'>Read More {'>>'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4 text-center">
                        <h1 className='my-5' style={{ fontSize: '48px' }}>
                            Simple enough for any user, powerful enough for fast-growing businesses
                        </h1>
                        <div className="col-md-8 pt-5" style={{ fontSize: '11px', margin: '0 auto', backgroundColor: 'rgb(239, 242, 251)', borderRadius: "30px" }}>
                            <div className="row">

                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_basics} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4>Basic</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '14px', }}>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4 bg-primary text-light" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_premium} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4 className='text-light'>Premium</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '18px', }}>
                                                <p>Upgrade to Premium Droplets for faster performing Intel, AMD processors, & NVMe SSDs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 pt-5 my-5" style={{ fontSize: '11px', margin: '0 auto', backgroundColor: 'rgb(239, 242, 251)', borderRadius: "30px" }}>
                            <div className="row">

                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_basics} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4>Basic</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '14px', }}>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_basics} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4>Basic</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '14px', }}>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_basics} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4>Basic</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '14px', }}>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ fontSize: '11px', border: '50px' }}>
                                    <div className="card card-shadow border-0 mb-4" style={{ borderRadius: "30px" }}>
                                        <div className="card-body p-4">
                                            <div className="row">
                                                <div className="col-2">
                                                    <img src={droplet_basics} alt="" />
                                                </div>
                                                <div className="col-6">
                                                    <h4>Basic</h4>
                                                    <p>For simple applications</p>
                                                </div>
                                            </div>
                                            <div className="row" style={{ textAlign: 'left', fontSize: '14px', }}>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                                <p><img src={green_checkmark} alt="" /> &nbsp;&nbsp;Low-traffic web servers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
