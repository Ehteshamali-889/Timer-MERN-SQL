import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:8081/')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/delete/${id}`)
      .then(res => {
        // Reload the data after successful deletion
        fetchData();
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3 '>
        <h2>Student List</h2>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Create +</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.Name}</td>
                <td>{student.Email}</td>
                <td className='d-flex gap-2'>
                  <Link to={`/read/${student.id}`} className='btn btn-sm btn-success'>View</Link>
                  <Link to={`/edit/${student.id}`} className='btn btn-sm btn-info'>Edit</Link>
                  <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
