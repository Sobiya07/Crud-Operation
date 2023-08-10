import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PerCreate = () => {
  const [id, idchange] = useState('');
  const [name, namechange] = useState('');
  const [email, emailchange] = useState('');
  const [password, passwordchange] = useState('');
  const [contact, contactchange] = useState('');
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate=useNavigate();


    // preventDefault----It prevents the default form submission behavior.

  const handleSubmit=(e)=>{
    e.preventDefault();
    const setdata={name,email,password,contact,active};

  


    fetch("http://localhost:8000/person",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(setdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/');
    }).catch((err)=>{
      console.log(err.message)
    })

  }


  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form className='container' onSubmit={handleSubmit}>
            <div className='card' style={{ 'textAlign': 'left' }}>
              <div className='card-title'>
                <h2 className='m-3'>Create</h2>
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
                        className='form-control' type='password'
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
  );
}
export default PerCreate;
