import { useState } from "react";
import { register } from "../services/authService.js";

function Signup() {

    const [formData, setFormData] = useState({
        userName : "",
        email : "",
        password : ""
    })

    function onChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    async function handleSubmit(){
        const res = await register(formData);
        alert(res.data.message);
    }

  return (
    <>
      <form action={handleSubmit}>
        <h1>Signup</h1>

        <input 
        type="text" 
        placeholder="Enter username"
        onChange={onChange} />  <br />

        <input 
        type="email" 
        placeholder="Enter email" 
        onChange={onChange}/> <br />

        <input 
        type="password" 
        placeholder="Enter password" 
        onChange={onChange}/> <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
