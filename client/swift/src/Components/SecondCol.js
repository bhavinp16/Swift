import React, { useState, useEffect } from 'react'
import Chatoptions from './Chatoptions'
import Secondcoltopbar from './Secondcoltopbar'
import db from '../firebase';

function SecondCol() {

    const [rooms, setrooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms')
            .onSnapshot((snapshot) => {
                setrooms(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="flex flex-col border border-gray-300 w-2/6 h-full">
            <Secondcoltopbar rooms={rooms} setrooms={setrooms} />
            <Chatoptions rooms={rooms} />
        </div>
    )
}

export default SecondCol
