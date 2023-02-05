import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'



function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")


  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/"

    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className="introduction slideshow-container text-center">
      <div className="">

        <div>
          <h3>Account created successfully! Log in with your details below to begin:</h3>
        </div>
        <br />
        <div className="row">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name='email'
              onChange={handleChange}
              value={data.email}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name='password'
              onChange={handleChange}
              value={data.password}
              required
            />
            <br />
            {error && <div>{error}</div>}
            <button type="submit">Sign In</button>
          </form>
        </div>
        <br />

      </div>

    </div>


  );
}

export default Login;