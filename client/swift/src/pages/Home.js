import React from 'react';
import FirstCol from '../Components/FirstCol';
import LastCol from '../Components/LastCol';
import SecondCol from '../Components/SecondCol';

function Home() {
    return (
        <div>
            <div className="flex flex-row h-screen">    
                <FirstCol/>
                <SecondCol/>
                <LastCol/>
            </div>
        </div>
    )
}

export default Home;
