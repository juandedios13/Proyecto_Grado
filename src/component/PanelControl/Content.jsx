import React from 'react'
import {
    Outlet
  } from "react-router-dom";

export const Content = () => {
    return (
        <div className="content-wrapper">
            

            <Outlet>
                
            </Outlet> 
            <div>--</div>
        </div>



    )
}
