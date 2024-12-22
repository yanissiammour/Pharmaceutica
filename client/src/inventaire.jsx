import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

function inventaire(){
 const [produit, setProduit] = useState([])

	useEffect(()=>{
		axios.get('http://localhost:8081/inventaire')
		.then(res=>setProduit(res.data))
		.catch(err=> console.log(err));
	},[])

	const handleDelete= async(id)=>{
		try{
			await axios.delete('http://localhost:8081/inventaire/'+id)
			window.location.reload();
		}catch(err){
			console.log(err)
		}
	}


	return(
		<div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
			<div className='w-75 gb-white rounded p-5'>
					<Link to="/inventaire/add" className='btn'>ADD</Link>
				<table className='table'>
					
					<thead>
						<tr>
						<th>ID</th>
						<th>nom</th>
						<th>type</th>
						<th>labo</th>
						</tr>
					</thead>
					<tbody>
						{
							produit.map((data, i)=>(
								<tr key={i}>
									<td>{data.idp}</td>
									<td>{data.nom}</td>
									<td>{data.type}</td>
									<td>{data.labo}</td>
									<button className='btn' onClick={e=>handleDelete(data.idp)}>Delete</button>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default inventaire