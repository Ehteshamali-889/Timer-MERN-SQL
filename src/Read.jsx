import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({}); // Changed initial state to an empty object
    useEffect(() => {
        axios.get(`http://localhost:8081/read/${id}`)
            .then(res => {
                console.log(res.data);
                setStudent(res.data[0]); // Assuming you only expect one student object
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3 '>
                <h2>Student Details</h2>
                <h2>{student.id}</h2>
                <h2>{student.Name}</h2>
                <h2>{student.Email}</h2>
                <Link to="/" className='btn btn-success'>Back</Link>
                <Link to={`/edit/${student.id}`} className='btn btn-danger'>Edit</Link>
            </div>
        </div>
    );
}

export default Read;
