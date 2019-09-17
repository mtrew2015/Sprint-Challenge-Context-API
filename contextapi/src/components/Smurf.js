import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/index';

const Smurf = ({ smurf }) => {
	const { dispatch } = useContext(SmurfContext);

	return (
		<div>
			<p>Name:{smurf.name}</p>
			<p>Age:{smurf.age}</p>
			<p>Height:{smurf.height}</p>
		</div>
	);
};

export default Smurf;
