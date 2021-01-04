import React from 'react'
import { Link } from 'react-router-dom'

function FirstCol() {
    return (
        <div className="bg-gray-800 w-1/6">

            <div className="flex justify-between m-2">
                <Link to="/settings" >
                    <i className="text-xl text-gray-500 material-icons">settings </i>
                </Link>
                
                <button type="button" id="droplist1">
                    <i className="text-xl text-gray-500 material-icons">subject</i>
                </button>
                
            </div>
            
            
        </div>
    )
}

export default FirstCol
