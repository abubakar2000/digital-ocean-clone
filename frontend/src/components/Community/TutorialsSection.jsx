import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiip } from '../../serverConfig'

export default function TutorialsSection() {
    const [articles, setarticles] = useState([])

    useEffect(() => {
        axios.get()
        loadtutorialsData();
        return () => {
        }
    }, [axios])

    const loadtutorialsData = () => {
        axios.get(`${apiip}/community/api/tutorials/`)
            .then(res => {
                setarticles(res.data.data)
                console.log(articles);
            })
            .catch(err => {
                alert("Cannot load community articles")
            })
    }

    return (
        <div className="row">
            <div className="pricing6 container">
                <div className="container">
                    <h1>Tutorials</h1>
                    <div className="row mt-4">
                        {
                            articles.map(art => (
                                <Link key={art.title} to={'/tutorials'} className='text-dark text-decoration-none col-md-4 rounded-3 p-1'>
                                    <div style={{ fontSize: '11px' }}>
                                        <div className="card card-shadow border-0 mb-4">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center">
                                                    <img src="https://picsum.photos/200" style={{ width: '100%', height: '200px' }} alt="" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 mt-3"><h4 className='text-primary'>{art.category[0].title}</h4></div>
                                                    <div className="col-12"><h4 className='bold'>{art.title}</h4></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="row my-5">
                        <h2>Looking for more? Check out all of our tutorials here.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
