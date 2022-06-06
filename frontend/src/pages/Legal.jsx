import axios from 'axios';
import react, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { apiip } from '../serverConfig';

const Legal = () => {
    const [Content, setContent] = useState("")
    useEffect(() => {
        axios.get(`${apiip}/core/api/legal/`)
            .then(_ => {
                // if(_.data.data.status === "ok"){
                setContent(_.data.data.content)
                console.log("-----");
                console.log(Content);
                console.log("-----");
                // }
            })
            .catch(_ => {
            })
    }, [axios])
    return (
        <div>
            <Navbar></Navbar>
            <div style={{ height: '15vh' }} ></div>
            <div className='container'>
                <div dangerouslySetInnerHTML={{ __html: Content }} />
            </div>
        </div>
    )
}

export default Legal;