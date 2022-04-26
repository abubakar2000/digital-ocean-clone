import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'

export default function QuestionsDetail() {
    return (
        <>
            <Navbar></Navbar>
            <div className='container-fluid' style={{ backgroundColor: 'white' }}>
                <div className="row">
                    <div className="col-md-3 text-center py-5">

                        <h5>Contents</h5>
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                <Link to={'introduction'} className="text-dark text-decoration-none">Introduction</Link>
                            </li>
                            <li>
                                <Link to={'/community/tutorials/introduction'} className="text-dark text-decoration-none">Introduction</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8"></div>
                </div>
            </div>
        </>
    )
}
