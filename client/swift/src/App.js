import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Settgs from './pages/Settgs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import usercontext from './Context/usercontext';
import { auth } from './firebase';


function App() {
	const context = useContext(usercontext)
	const { user, setuser } = context;

	setuser(auth.currentUser)


	auth.onAuthStateChanged(function (user) {
		if (user) {
			setuser(user)
		}
	})


	return (
		<Fragment>
			<Router>
				<div className="container">
					<Switch>
						{!user ?
							(
								<Switch>
									<Route path="/login" component={Login} />
									<Route path="/signup" component={Signup} />
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
