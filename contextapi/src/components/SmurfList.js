import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/index';
import Smurf from './Smurf';

function SmurfList() {
    const state = useContext(SmurfContext);
    console.log(state)
  
	return (
		<div>
            <p>List of Smurfs</p>
            {state.smurfs.map(smurf => {
                return(
                    <Smurf key={smurf.id} smurf={smurf}/>
                )
            })}
        </div>
	);
}

export default SmurfList;
 
