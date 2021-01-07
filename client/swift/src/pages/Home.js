import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstCol from '../Components/FirstCol';
import LastCol from '../Components/LastCol';
import SecondCol from '../Components/SecondCol';

function Home() {
    return (
        <div>
            <div className="flex flex-row h-screen">
                <FirstCol />
                <SecondCol />
                <Switch>
                    <Route path="/chat/:userid" component={LastCol} />
                </Switch>
               
            </div>
        </div>
    )
}

export default Home;
