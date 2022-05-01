import React from 'react'

export default function GetInvolvedSection() {
    return (

        <div className="row py-5 my-5">
            <h1>Get Involved</h1>
            <div className="col-md-5 my-5" style={{ margin: '0 auto' }}>
                <div className="row">
                    <div className="col-2">
                        <img src="https://picsum.photos/200" style={{ width: '60px', height: '60px' }} alt="" />
                    </div>
                    <div className="col-10"><h1>Write for DOnations</h1></div>
                </div>
                <div className="row my-3"><p>Get paid to write content for DigitalOcean! You can even choose a tech-focused charity for DO to donate to when you contribute to our library of content.</p></div>
            </div>
            <div className="col-md-5 my-5 mx-1">
                <div className="row">
                    <div className="col-2">
                        <img src="https://picsum.photos/200" style={{ width: '60px', height: '60px' }} alt="" />
                    </div>
                    <div className="col-10"><h1>Write for Donations</h1></div>
                </div>
                <div className="row my-3"><p>Get paid to write content for DigitalOcean! You can even choose a tech-focused charity for DO to donate to when you contribute to our library of content.</p></div>
            </div>
        </div>
    )
}
