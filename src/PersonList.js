import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
// react-router-dom is used for dynamic routing


const PersonList =() =>{
const[setdata, setdatachange]= useState(null);
const navigate = useNavigate();
// useNavigate is used to go to the previous or next pages and redirect user to a specific url

const LoadView = (id) => {
    navigate("/person/view/" + id);
}

const LoadUpdate = (id) => {
    navigate("/person/update/" + id);
}

const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
        fetch("http://localhost:8000/person/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
}

    useEffect(() =>{
        fetch("http://localhost:8000/person").then((res) =>{
            return res.json();
        }).then((resp) =>{
            setdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })  },[])

    return(
        <div>
        <div className="container ">
            <div className="card">
                <div className="card-title">
                    <h2>Student list</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="person/create" className="btn btn-success">Add</Link>
                    </div>
                    <table className="table table-bordered table-secondary ">
                        <thead className="thead-secondary ">
                            <tr >
                            <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Password</td>
                                <td>Contact No.</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>


     {/* This line uses a conditional rendering approach to  checks if setdata is truthy (not null or undefined). If it is, it proceeds to the map function. */}                   
{
    setdata &&
    setdata.map(item=>(
        
        <tr key={item.id}>
              <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td>{item.contact}</td>

<td><a onClick={() => { LoadUpdate(item.id) }}  className="btn btn-success">Update</a> 
<a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
<a onClick={() => { LoadView(item.id) }} className="btn btn-primary">View</a>
</td>

        </tr>
    ))
}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonList;