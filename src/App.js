import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {
	const [{}, dispatch] = useStateValue();
	//useEffect will only run once when the app component loads if the [] is empty otherwise it runs if the variable inside [var] changes
	useEffect(() => {
		//whenever the authenticate changes this will run
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//THE USER JUST LOGGED IN/ THE USER WAS LOGGED IN
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					//THE USER LOGGED OUT
					type: 'SET_USER',
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route path='/login'>
						<Login></Login>
					</Route>
					<Route path='/checkout'>
						<Header></Header>
						<Checkout></Checkout>
					</Route>
					{/* Homepage Route always at the bottom */}
					<Route path='/'>
						<Header></Header>
						<Home></Home>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
