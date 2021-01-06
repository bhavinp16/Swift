import React from 'react'
import Chatoptions from './Chatoptions'
import Secondcoltopbar from './Secondcoltopbar'

function SecondCol() {
    return (
        <div className="border border-gray-300 w-2/6">
            <Secondcoltopbar type='Friends' chatnos='124' />
            <Chatoptions/>
        </div>
    )
}

export default SecondCol
