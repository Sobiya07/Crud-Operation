import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const PerUpdate =()=>{
    const { setid } = useParams();


    // The useParams hook is a part of the react-router-dom library in React that allows you to access URL parameters in functional components. 

    useEffect(() => {
        fetch("http://localhost:8000/person/" + setid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            passwordchange(resp.password);
            contactchange(resp.contact);
            activechange(resp.isactive);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[password,passwordchange]=useState("");
    const[contact,contactchange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const setdata={id,name,email,password,contact,active};
  
  
        fetch("http://localhost:8000/person/"+ setid,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(setdata)
        }).then((res)=>{
          alert('Saved successfully.')
          navigate('/');
        }).catch((err)=>{
          console.log(err.message)
        })
  
      }

    return(
<div>
    <div className="rwo">
        <div className="offset-lg-3 col-lg-6">
        <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ 'textAlign': 'left' }}>
              <div className='card-title'>
                <h2 className="m-3">Update</h2>
              </div>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>ID</label>
                      <input
                        value={id}
                        disabled='disabled'
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input
                        value={name} onMouseDown={e=>valchange(true)}
                        onChange={e => namechange(e.target.value)}
                        className='form-control'
                      ></input>
                        {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={e => emailchange(e.target.value)}
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Password</label>
                      <input
                        value={password}
                        onChange={e => passwordchange(e.target.value)}
                        className='form-control' type="password"
                      ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Contact No.</label>
                      <input
                        value={contact}
                        onChange={e => contactchange(e.target.value)}
                        className='form-control'
                      ></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input
                        checked={active}
                        onChange={e => activechange(e.target.checked)}
                        type='checkbox'
                        className='form-check-input'
                      ></input>
                      <label className='form-check-label'>Is Active</label>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <button className='btn btn-success' type='submit'>
                        Save
                      </button>
                      <Link to='/' className='btn btn-danger'>
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
</div>
    )
}
export default PerUpdate;