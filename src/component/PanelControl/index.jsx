
import React from 'react'
import { Aside } from './Aside'
import { Content } from './Content'
import { Footer } from './Footer'
import Header from './Header'

export const Index = () => {
    return (
        <div>
            <Header></Header>
            <Aside></Aside>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}
