import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

const PerView =()=>{
    const { setid } = useParams();

    const [setdata, setdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/person/" + setid).then((res) => {
            return res.json();
        }).then((resp) => {
            setdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    
    return(
<div>
    <div className="container">
        <div className="card row" style={{ "textAlign": "left" }} >
            <div className="card-title">
                <h2>Details</h2>
            </div>
            <div className="card-body">
            </div>
            {setdata && <div>
                <h4>The Person name is: <b>{setdata.name}</b> ({setdata.id})</h4>
                <h5>Email is : {setdata.email}</h5>
                <h5>Contact is : {setdata.contact}</h5>
                <Link className="btn btn-danger" to="/">Back to Listing</Link>
                </div>}
        </div>
    </div>
</div>
    )
}
export default PerView;