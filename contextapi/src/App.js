import React, { useEffect, useReducer } from 'react';
import { SmurfProvider } from './contexts/index'
import { initialState, reducer } from './reducers';
import axios from 'axios';
import './App.css';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';

function App() {
    const [ state, dispatch ] = useReducer(reducer, initialState);

	const getSmurfs = () => {
		dispatch({ type: 'FETCH_START' });
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getSmurfs();
	}, []);

	return (
		<div>
            <h1>Smurfs with Context API</h1>
			<SmurfProvider value={(dispatch,state)}>
				<SmurfForm />
				<SmurfList />
			</SmurfProvider>
		</div>
	);
}

export default App;
