import React from 'react'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Tutorials() {
    return (
        <div className='container-fluid' style={{ backgroundColor: 'white' }}>
            <div className="row">
                <div className="col-12 text-light text-center py-5" style={{ backgroundColor: 'rgb(20, 192, 123)' }}>
                    <h1 style={{ fontSize: '48px' }}>Tutorials</h1>
                    <p style={{ fontSize: '24px' }}>Follow along with one of our 3,982 development and sysadmin tutorials.</p>
                    <div className="col-md-8 rounded-3" style={{ margin: '0 auto', backgroundColor: 'white' }}>

                        <FontAwesomeIcon icon={faSearch} color={'rgba(0,0,0,.4)'}></FontAwesomeIcon>
                        <input type="text" className='p-3 rounded-3 border-0' placeholder='Search Tutorials' style={{ width: '92%', outline: 'none' }} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6>3,982 Tutorials</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>TUTORIAL</h6>
                        <Link to={'/community/tutorials/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>How To Install Apache Tomcat 10 on Ubuntu 20.04</h2>
                                <p>Deploy Apache Tomcat 10 on Ubuntu 20.04 by installing Tomcat 10, setting up users and roles, and navigating the admin...</p>
                                <p>3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>

                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>TUTORIAL</h6>
                        <Link to={'/community/tutorials/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>How To Install Apache Tomcat 10 on Ubuntu 20.04</h2>
                                <p>Deploy Apache Tomcat 10 on Ubuntu 20.04 by installing Tomcat 10, setting up users and roles, and navigating the admin...</p>
                                <p>3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>TUTORIAL</h6>
                        <Link to={'/community/tutorials/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>How To Install Apache Tomcat 10 on Ubuntu 20.04</h2>
                                <p>Deploy Apache Tomcat 10 on Ubuntu 20.04 by installing Tomcat 10, setting up users and roles, and navigating the admin...</p>
                                <p>3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>TUTORIAL</h6>
                        <Link to={'/community/tutorials/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>How To Install Apache Tomcat 10 on Ubuntu 20.04</h2>
                                <p>Deploy Apache Tomcat 10 on Ubuntu 20.04 by installing Tomcat 10, setting up users and roles, and navigating the admin...</p>
                                <p>3 days ago • By Justin Ellingwood, Savic &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
