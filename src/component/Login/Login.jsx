import '../../style/Login copy.css'

import React from 'react'
import ContainerLogin from './ContainerLogin'
import FormsLogin from './FormsLogin'



const Login = () => {
    return (
        <div className="body">
            
            <div className="containerLogin">
                <ContainerLogin />
                <FormsLogin />
            </div>
        </div>
    )
}

export default Login
