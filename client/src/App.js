import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.css';
import LoadingScreen from './components/LoadingPage/LoadingPage';
import Start from './components/Start/Start';
import Questions from './components/Questions/Questions';
import Error from './components/Error/404';

function App() {

	const [Loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1500);
	}, []);

	return (
		<>
			{Loading === true ?
				(
					<div className="app">
						<Switch>
							<Route path="/" exact component={Start} />
							<Route path="/questions" exact component={Questions} />
							<Route component={Error} />
						</Switch>
					</div>
				) : (
					<LoadingScreen />
				)}
		</>
	);
}

export default App;
