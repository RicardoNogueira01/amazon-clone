import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push('/');
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//it successfuly created a new user with email and password
				//if user is authenticated then change the url to the homepage
				if (auth) {
					history.push('/');
				}
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<Link to='/'>
				<img
					className='login__logo'
					src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ampercent.com%2Fwp%2Fwp-content%2Fuploads%2FAmazon-Logo.png&f=1&nofb=1'></img>
			</Link>

			<div className='login__container'>
				<h1>Sign-in</h1>
				<form>
					<h5>Email</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>

					<button
						onClick={signIn}
						type='submit'
						className='login__signInButton'>
						Sign in
					</button>
				</form>

				<p> Amazon Fake Clone conditions </p>
				<button onClick={register} className='login__registerButton'>
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
