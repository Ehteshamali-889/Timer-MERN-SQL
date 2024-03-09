import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res.data);
                setValues({ ...values, name: res.data[0].Name, email: res.data[0].Email}); // Assuming you only expect one student object
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
    const [values,setValues]=useState({name:'',email:''})
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8081/edit/`+id,values)
        .then(res=>
            {
                console.log(res.data);
                navigate("/");
            }
            
        )
        .catch(err=>console.log(err))
    }
    
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Create New Student</h2>
                    <div className='mb-2'>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            value={values.name}
                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                            value={values.email}
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit