import React from 'react'
import Chatoptions from './Chatoptions'
import Secondcoltopbar from './Secondcoltopbar'

function SecondCol() {
    return (
        <div className="flex flex-col border border-gray-300 w-2/6 h-full">
            <Secondcoltopbar />
            <Chatoptions />
        </div>
    )
}

export default SecondCol
