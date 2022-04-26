import React from 'react'
import { Link } from 'react-router-dom'

export default function TopicDetail() {
    return (
        <div className='row' style={{ margin: '100px' }}>
            <div className="col-3 d-none d-md-block d-lg-block d-xl-block">
                <h4 className="text-dark">
                    Topics
                </h4>
                <div className="row">
                    <Link className="text-dark m-4" style={{ textDecoration: 'none' }} to="/topic">All</Link>
                </div>
                <div className="row">
                    <Link className="text-dark m-4" style={{ textDecoration: 'none' }} to="/topic">All</Link>
                </div>
                <div className="row">
                    <Link className="text-dark m-4" style={{ textDecoration: 'none' }} to="/topic">All</Link>
                </div>
                <div className="row">
                    <Link className="text-dark m-4" style={{ textDecoration: 'none' }} to="/topic">All</Link>
                </div>
                <div className="row">
                    <Link className="text-dark m-4" style={{ textDecoration: 'none' }} to="/topic">All</Link>
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col-7">
                        <div className="row"><h5>Latest products and features at DigitalOcean: March 2022</h5></div>
                        <div className="row">
                            <div className="col-12" style={{ fontSize: '12px' }}>

                                <p>Posted: 2022-02-01 in <Link to="/userprofile" style={{ textDecoration: "none", wordSpacing: '1px' }}>Cloud Education</Link></p>


                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <img src="https://picsum.photos/500/300?random=2" alt="" style={{ width: '90%', height: '150px', borderRadius: '2%' }} />
                        <div className="row mt-1" style={{ fontSize: '12px' }}>&nbsp;&nbsp;
                            <div className="col-12" style={{ display: 'flex', lineHeight: '30px' }}>
                                <img src="https://picsum.photos/500/300?random=1" style={{ borderRadius: "50%", height: '30px', width: '30px' }} alt="" />
                                &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ fontSize: '18px' }}>By</span> &nbsp;&nbsp; Tahir Siddique
                            </div>


                        </div>
                        <div className="row mt-2">
                            <p>We're excited to share the latest from DigitalOcean, from pro...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
