import React from "react";

export default function Registar() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  //this is a get request - the fetch(url endpoint), but we need to make a post request
  const submit = async(e) => {
    e.preventDefault();//prevvent default form submit
    const reponse = await fetch("http://localhost:8000/api/register",{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, password})
  });

  const content = await response.json();
  console.log(content);
  

  return (
    <form onSubmit="">
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <input
        className="form-control"
        placeholder="Name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        className="form-control"
        placeholder="Email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
