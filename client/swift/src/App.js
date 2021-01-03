import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Settgs from './pages/Settgs';


function App() {
  return (
		<Fragment>
			<Router>
			
				<Navbar/>

				<div className="container">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/settings" component={Settgs} />
					</Switch>
				</div>

			</Router>
		</Fragment>
  );
}

export default App;
