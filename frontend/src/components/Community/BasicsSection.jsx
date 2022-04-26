import React from 'react'
import { Link } from 'react-router-dom'

export default function Basics() {
    return (<div className="row my-5 mx-5 py-5">
        <h1>Dive into the Basics</h1>
        <Link to={'/tutorials'} className='col-md-5 my-3 p-5 text-light text-decoration-none bg-primary rounded-2' style={{ margin: '0 auto' }}>
            <div style={{ margin: '0 auto' }}>
                <div className="row">
                    <div className="col-1">
                        <img src="https://picsum.photos/70" style={{ width: '30px', height: '30px', }} className='rounded-3' alt="" />
                    </div>
                    <div className="col-10">
                        <h2>Introduction to the Cloud</h2>
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-11">
                        <p>Learn the basics of cloud computing and gain the skills necessary to deploy your applications and websites to the cloud.
                        </p>
                        Learn More →
                    </div>
                </div>
            </div>
        </Link>
        <Link to={'/tutorials'} className='col-md-5 my-3 p-5 text-light text-decoration-none bg-primary rounded-2' style={{ margin: '0 auto' }}>
            <div style={{ margin: '0 auto' }}>
                <div className="row">
                    <div className="col-1">
                        <img src="https://picsum.photos/70" style={{ width: '30px', height: '30px', }} className='rounded-3' alt="" />
                    </div>
                    <div className="col-10">
                        <h2>Introduction to the Cloud</h2>
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-11">
                        <p>Learn the basics of cloud computing and gain the skills necessary to deploy your applications and websites to the cloud.
                        </p>
                        Learn More →
                    </div>
                </div>
            </div>
        </Link>
    </div>
    )
}
