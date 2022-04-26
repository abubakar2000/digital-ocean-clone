import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
    return (
        <div className="container">
            <div className="row py-5" style={{ margin: '0 auto' }}>
                <h1>Featured Posts</h1>
                <div className="pricing6">
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-md-4 rounded-3 p-1" style={{ fontSize: '11px' }}>
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center">
                                            <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="my-3">
                                                    <img src="https://picsum.photos/200" className='rounded-circle' style={{ width: '20px', height: '20px' }} alt="" />
                                                    &nbsp;&nbsp;
                                                    <Link to="/profile" className='text-decoration-none'>Tahir Siddique</Link>
                                                    &nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>on</span>&nbsp;
                                                    <Link to='/category' className='text-decoration-none'>Cloud Education</Link>
                                                    &nbsp;&nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>• 2022-02-01</span>
                                                </div>
                                            </div>
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
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 rounded-3 p-1" style={{ fontSize: '11px' }}>
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center">
                                            <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="my-3">
                                                    <img src="https://picsum.photos/200" className='rounded-circle' style={{ width: '20px', height: '20px' }} alt="" />
                                                    &nbsp;&nbsp;
                                                    <Link to="/profile" className='text-decoration-none'>Tahir Siddique</Link>
                                                    &nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>on</span>&nbsp;
                                                    <Link to='/category' className='text-decoration-none'>Cloud Education</Link>
                                                    &nbsp;&nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>• 2022-02-01</span>
                                                </div>
                                            </div>
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
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 rounded-3 p-1" style={{ fontSize: '11px' }}>
                                <div className="card card-shadow border-0 mb-4">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center">
                                            <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="my-3">
                                                    <img src="https://picsum.photos/200" className='rounded-circle' style={{ width: '20px', height: '20px' }} alt="" />
                                                    &nbsp;&nbsp;
                                                    <Link to="/profile" className='text-decoration-none'>Tahir Siddique</Link>
                                                    &nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>on</span>&nbsp;
                                                    <Link to='/category' className='text-decoration-none'>Cloud Education</Link>
                                                    &nbsp;&nbsp;<span className='text-dark' style={{ fontWeight: 'bold' }}>• 2022-02-01</span>
                                                </div>
                                            </div>
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
