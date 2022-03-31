
import React, { useState } from 'react';
import { Aside } from './AsideAdmin'
import AsideControl from './AsideControl';
import { AsideDocente } from './AsideDocente';
import { Content } from './Content'
import { Footer } from './Footer'
import Header from './Header'

export const Index = (props) => {


    return (
        <div  >
            <Header></Header>
            {props.tipo == 'Admin'? <Aside></Aside> : <AsideDocente></AsideDocente> }
            <Content></Content>
            <AsideControl></AsideControl>
            <Footer></Footer>
        </div>
    )
}
