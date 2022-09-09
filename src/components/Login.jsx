import { useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'



function Login() {
  const[data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError]= useState("")


  const handleChange = ({currentTarget: input}) =>{
    setData({...data, [input.name]: input.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const url ="http://localhost:8080/api/auth";
      const {data: res} = await axios.post(url,data);
      localStorage.setItem("token", res.data);
      window.location = "/"
      
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
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
          <button type="submit">Sign In</button>
      </form>
    </div>
    <br/>
    <div class="row justify-content-center">
    <h1>New here?</h1>
    <Link to="/NewUser">
      <button type="button">
        Sign Up
      </button>
    </Link>
    </div>

          </div>
        </div>


  );
}

export default Login ;