import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
function home(){

	return(
		<div>
		<Link to="/inventaire" className='btn btn-success'>Inventaire</Link>
		<Link to="/listeClient" className='btn btn-success'>Liste Client</Link>
		<Link to="/transaction" className='btn btn-success'>Transaction</Link>
		</div>
	)

}

export default home