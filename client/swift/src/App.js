import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settgs from './pages/Settgs';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
	const [user, setuser] = useState(null);

	return (
		<Fragment>
			<Router>
				<div className="container">
					<Switch>
						{!user ?
							(
								<Switch>
									<Route path="/login" component={Login}/>
									<Route path="/signup" component={Signup}/>
								</Switch>
							) :
							(
								<>
									<Route exact path="/" />
									<Route path="/chat" component={Home} />
									<Route path="/settings" component={Settgs} />
								</>
							)}
					</Switch>
				</div>

			</Router>
		</Fragment>
	);
}

export default App;
