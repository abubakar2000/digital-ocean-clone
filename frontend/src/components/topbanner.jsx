import React from 'react'
import { Link } from 'react-router-dom'

function TopBanner(props) {
    return (
        <div className='text-light row m-0 p-0 d-none d-md-flex d-lg-flex d-xl-flex"' style={{ background: 'rgb(8, 27, 75)', }}>
            <div className="col-9 d-none d-lg-flex d-md-flex">
                <div className="row m-2">
                    <p>Learn how Frontend delivers 200% ROI for your business →</p>
                </div>
            </div>
            <div className="col-3 d-none d-lg-flex">
                <div className="row m-2">
                    <div className="col-3">
                        <Link to={'/blog'} className="text-light">Blog</Link>
                    </div>
                    <div className="col-3">
                        <Link to={'/docs'} className="text-light">Docs</Link>
                    </div>
                    <div className="col-3">
                        <Link to={'/blog'} className="text-light">Sales</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TopBanner
