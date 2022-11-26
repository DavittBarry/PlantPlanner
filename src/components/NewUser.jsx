import { useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function NewUser() {
  const[data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [error, setError]= useState("")
  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) =>{
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const url ="https://localhost:8080/api/users";
      const {data: res} = await axios.post(url,data);
      navigate("/Accountcreation")
      console.log(res.message)
    }catch(error){
      if(error.response &&
         error.response.status >= 400 &&
         error.response.status <= 500
         ){
          setError(error.response.data.message)
         }
    }
  }

  return (
      <div class="introduction slideshow-container text-center">
          <div className="container">

          
    <div class="row justify-content-center">
      <h3>If you have an account, please sign in:</h3>
    <Link to="/login">
      
      <button className="p-2 btn btn-success" type="button">
        <h6>
        Sign in
        </h6>
      </button>
    </Link>
    </div>
    
    <div class="row justify-content-center p-2">
      <form onSubmit={handleSubmit}>
        <h3>Otherwise, create an account here:</h3>
        <input
          className="p-2"
          type="text"
          placeholder="First Name"
          name='firstName'
          onChange={handleChange}
          value={data.firstName}
          required
          />
          <br/>
          <br/>
          <input
          className="p-2"
          type="text"
          placeholder="Last Name"
          name='lastName'
          onChange={handleChange}
          value={data.lastName}
          required
          />
          <br/>
          <br/>
          <input
          className="p-2"
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleChange}
          value={data.email}
          required
          />
          <br/>
          <br/>
          <input
          className="p-2"
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleChange}
          value={data.password}
          required
          />
          <br/>
          {error && <div>{error}</div>}
          <br/>
          <button className="p-2 btn btn-success" type="submit">
            <h6>Sign Up</h6></button>
      </form>
    </div>



          </div>
        </div>


  );
}

export default NewUser;