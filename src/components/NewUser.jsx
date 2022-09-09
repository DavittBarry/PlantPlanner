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
      const url ="http://localhost:8080/api/users";
      const {data: res} = await axios.post(url,data);
      navigate("/login")
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
      <div class="home">
          <div className="NewUser">

          
    <div class="row justify-content-center">
    <Link to="/login">
      <button type="button">
        Sign in
      </button>
    </Link>
    </div>
    
    <div class="row justify-content-center">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="First Name"
          name='firstName'
          onChange={handleChange}
          value={data.firstName}
          required
          />
          <br/>
          <input
          type="text"
          placeholder="Last Name"
          name='lastName'
          onChange={handleChange}
          value={data.lastName}
          required
          />
          <br/>
          <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={handleChange}
          value={data.email}
          required
          />
          <br/>
          <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleChange}
          value={data.password}
          required
          />
          <br/>
          {error && <div>{error}</div>}
          <button type="submit">Sign Up</button>
      </form>
    </div>



          </div>
        </div>


  );
}

export default NewUser;