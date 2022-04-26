import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Questions from './Questions/Questions'
import Tutorials from './Tutorials/Tutorials'

export default function CommunityPages(props) {
    const { page } = useParams()


    return (
        <>

            <Navbar></Navbar>
            {(page === 'tutorials') ? <Tutorials></Tutorials> : <Questions></Questions>}

        </>
    )
}
