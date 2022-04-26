import React from 'react'
import { Link } from 'react-router-dom'

export default function FavoriteTopics() {
    return (
        <div className="row text-center">
            <h1>Find your favorite topics</h1>
            <h3>Explore content which covers the topics you care most about.</h3>
            <div className="row p-3" style={{ margin: '0 auto' }}>
                <Link to={'tags'} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </Link>

                <Link to={'tags'} className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </Link>

                <Link to={'tags'} className="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </Link>
            </div>

            <div className="row my-5">
                <h2>Check out even more topics you can learn more about.
                </h2>
            </div>
        </div>
    )
}
