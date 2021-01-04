import React from 'react'
import { Link } from 'react-router-dom';


function Col1row1() {
    return (
        <div className="flex justify-between m-2">

            <Link to="/settings" >
                <i className="text-xl text-gray-500 material-icons">settings </i>
            </Link>


            <div className="flex flex-col justify-right items-end">
                <button type="button" onClick={(()=>{
                        const elemd = document.querySelector('#dropdownm');
                        if(elemd.classList.contains('hidden')){
                            elemd.classList.remove('hidden');
                            elemd.classList.add('flex');
                        }else{
                            elemd.classList.remove('flex');
                            elemd.classList.add('hidden');
                        }
                    })}>
                    <i className="text-xl text-gray-500 material-icons">subject</i>
                </button>
    
                <div className=" hidden flex-col mt-8 absolute justify-center bg-gray-500 rounded rounded-lg p-2 mt-1 " id="dropdownm">
                    <a href="/login" className="text-gray-900 text-sm rounded hover:bg-gray-600" >Sign out</a>
                    <a href="/settings/user" className="text-gray-900 text-sm rounded hover:bg-gray-600">Status</a>
                </div>
            </div>

        </div> 
    )
}

export default Col1row1;
