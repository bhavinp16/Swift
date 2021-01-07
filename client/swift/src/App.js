import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settgs from './pages/Settgs';


function App() {
  return (
		<Fragment>
			<Router>
				<div className="container">
					<Switch>
						<Route exact path="/" />   
							{/*here exact added so / this will not render in /chat or /settings also as / is also present there  */}
						<Route path="/chat" component={Home}/>
						<Route path="/settings" component={Settgs} />
					</Switch>
				</div>

			</Router>
		</Fragment>
  );
}

export default App;
