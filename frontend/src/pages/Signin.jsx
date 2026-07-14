import { useState } from "react";
import { login } from "../services/authService";

function Signin() {

  const [formData, setFormData] = useState({
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
      const res = await login(formData);
      alert(res.data.message);
      

      setFormData({
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
        <h1>Signin</h1>
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

export default Signin;
