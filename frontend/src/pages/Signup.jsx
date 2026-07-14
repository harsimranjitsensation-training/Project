import { useState } from "react";
import { register } from "../services/authService.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function onChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit() {
    try {
      const res = await register(formData);
      alert(res.data.message);
      navigate("/signin");

      setFormData({
        userName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form action={handleSubmit}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Enter username"
          name="userName"
          onChange={onChange}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
