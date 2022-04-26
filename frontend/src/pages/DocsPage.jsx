import React from 'react'
import Topics from '../components/Docs/Topics'

function DocsPage() {
    return (

        <div className="container-fluid">

            <div className='row'>
                <div className="col-md-3 py-3">
                    <Topics></Topics>
                </div>
            </div>
        </div>
    )
}

export default DocsPage