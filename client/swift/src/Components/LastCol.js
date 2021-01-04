import React, { Fragment } from 'react'
import Navbar from './Navbar'

function LastCol() {
    return (	
        <Fragment>		
        <div className="w-3/6">
            <Navbar/>
            <div className="container mt-12">
                last
            </div>   
        </div>
        </Fragment>
    )
}

export default LastCol
