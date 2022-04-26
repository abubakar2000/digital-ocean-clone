import React from 'react'
import { Link } from 'react-router-dom'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Questions() {
    return (
        <div className='container-fluid' style={{ backgroundColor: 'white' }}>
            <div className="row">
                <div className="col-12 text-light text-center py-5" style={{ backgroundColor: 'rgb(20, 192, 123)' }}>
                    <h1 style={{ fontSize: '48px' }}>Questions</h1>
                    <p style={{ fontSize: '24px' }}>Ask a development question or answer others’ in our diverse Q&A section. For information about the DigitalOcean product, check out our Product Docs.</p>
                    <div className="col-md-8 rounded-3" style={{ margin: '0 auto', backgroundColor: 'white' }}>

                        <FontAwesomeIcon icon={faSearch} color={'rgba(0,0,0,.4)'}></FontAwesomeIcon>
                        <input type="text" className='p-3 rounded-3 border-0' placeholder='Search Questions' style={{ width: '92%', outline: 'none' }} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6>3,982 Questions</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>
                    <div className="col-9 p-1 my-2" style={{ margin: '0 auto', }}>
                        <h6 className='text-primary'>Questions</h6>
                        <Link to={'/community/questions/how-to'} className='row my-4 text-dark text-decoration-none'>
                            <div className="col-12">
                                <h2>Error when setting up MySQL migration from a droplet to a new Managed DB.</h2>
                                <p>I configured the existing mysql db on the current droplet with a user with full permissions and allowed external connection...</p>
                                <p>No answers yet • 9 days ago • By scottfriebel &nbsp;&nbsp; <Link to={'/community/tutorials/?q=apache'}><span className='bg-primary text-decoration-none p-2 rounded-3 text-light'>Apache</span></Link></p>
                            </div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}
