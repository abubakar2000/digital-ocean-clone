import React from 'react'

import bgC2 from '../../img/bgC2.svg'

export default function Front(props) {
    // ShowBackground = props.ShowBackground
    return (
        <div className="row" style={{ backgroundImage: props.ShowBackground ? `url(${bgC2})` : 'none', backgroundPosition: '140% -140%', backgroundRepeat: 'no-repeat', height: '100vh' }}>
            <div className={`col-${props.ShowBackground !== true ? '9' : '7'} text-center`} style={{ margin: '0 auto', marginTop: '150px' }}>
                <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>Welcome to the
                    Frontend Community!</h1>
                <p className='py-5 mx-5'>
                    DigitalOcean’s community offers thousands of
                    tutorials, videos, and answers to questions on a wide
                    range of topics. Unsure where to start?
                </p>
            </div>
        </div>
    )
}
