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
      <div className="introduction slideshow-container my-auto mx-auto text-center">
          <div>
          
    <div className="row">
    <form onSubmit={handleSubmit}>
        <h3 class="container">It looks like you are not logged in. </h3>
        <h3 class="container">To see your plants, make an account or log in:</h3>
          <input
          className="p-3"
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
          className="p-3"
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleChange}
          value={data.password}
          required
          />
          <br/>
          <br/>
          {error && <div>{error}</div>}
          <button className="p-2 btn btn-success" type="submit"><h6>Sign In</h6></button>
      </form>
    </div>
    <br/>
    <div className="row justify-content-center">
    <h2>New here?</h2>
    <Link to="/NewUser">
      <button className="p-2 btn btn-success"  type="button">
        <h6>Sign Up</h6>
      </button>
    </Link>
    </div>

          </div>
        </div>


  );
}

export default Login ;