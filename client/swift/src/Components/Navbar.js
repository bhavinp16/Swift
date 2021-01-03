import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="flex flex-row bg-blue-900 h-12 w-full px-5 py-2 items-center justify-between">
            <Link to="/" className="mx-4 text-lg text-blue-100" >Swift </Link>
            <div className="flex w-1/5 justify-around">
                <Link to="/" className="flex text-blue-300 " >Home </Link>
                <Link to="/settings" className="flex text-blue-300">Settings </Link>
            </div>
            
        </header>
    )
}

export default Navbar
