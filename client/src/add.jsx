import React, { useState } from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function CreateStudent(){
    const [Nom,setNom]=useState('')
    const [Type,setType]=useState('')
    const [Labo,setLabo]=useState('')
    const navigate = useNavigate();

    function handeleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:8081/add',{Nom,Type,Labo})
      .then(res=>{
        console.log(res);
        navigate('/');
      }).catch(err=> console.log(err));
    }

  return(
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-conter'>
            <Link to="/" className='btn btn-success'>Go Back</Link>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handeleSubmit} >
          <h2>Add Student</h2>
          <div className='mb-2'>
            <label htmlFor="">Nom</label>
            <input type="text" placeholder="Entrer Nom" className="form-control"
              onChange={e=>setNom(e.target.value)}/>
          </div>
          <div className='mb-2'>
                  <label htmlFor="">Type</label>
                  <input type="text" placeholder="Entrer Type" className="form-control" 
                    onChange={e=>setType(e.target.value)}/>
              </div>
              <div className='mb-2'>
                  <label htmlFor="">Labo</label>
                  <input type="text" placeholder="Entrer Labo" className="form-control" 
                    onChange={e=>setLabo(e.target.value)}/>
              </div>
                <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent