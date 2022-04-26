import React from 'react'
import { useParams } from 'react-router-dom'
import BlogPage from '../../pages/BlogPage'
import CommunityPage from '../../pages/CommunityPage'
import DocsPage from '../../pages/DocsPage'
import Login from '../../pages/Login'
import ProductPage from '../../pages/ProductPage'
import Navbar from '../Community/Navbar'
import Tutorials from '../Community/Tutorials/Tutorials'
import HomeNav from '../Navbar'
import TopicDetail from './TopicDetail'

export default function Layout(props) {

    const { page } = useParams()
    return (
        <>
            {(page === 'community') ? <Navbar></Navbar> : (page === 'login') ? <></> : <HomeNav></HomeNav>}
            {/* {(page === 'community') ? <Navbar></Navbar> : <HomeNav></HomeNav>} */}
            {(page === 'blog') ? <BlogPage></BlogPage> : <></>}
            {(page === 'postdetails') ? <TopicDetail></TopicDetail> : <></>}
            {(page === 'product') ? <ProductPage></ProductPage> : <></>}
            {(page === 'docs') ? <DocsPage></DocsPage> : <></>}
            {(page === 'tutorials') ? <Tutorials></Tutorials> : <></>}
            {(page === 'community') ? <CommunityPage></CommunityPage> : <></>}
            {(page === 'login') ? <Login></Login> : <></>}
        </>
    )
}
