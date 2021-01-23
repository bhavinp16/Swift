import React from 'react'
import Chatoptionschat from './Chatoptionschat'


function Chatoptions({rooms}) {

    return (
        <div className="overflow-y-auto shadow-lg">
            {rooms.map(room => (<Chatoptionschat key={room.id} id={room.id} name={room.data.name} />
            ))}
        </div>
    )
}

export default Chatoptions
