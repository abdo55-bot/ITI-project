import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handellogin(event) {
    if (document.getElementById("e").value === "user" &&document.getElementById("p").value === "user") {
      navigate("/products");
    }else if(document.getElementById("e").value === "admin" &&document.getElementById("p").value === "admin"){
        navigate('/adminproducts')
    }
  }

  return (
    
    <div className="col-4 m-auto mt-5">
        <h1 className="alert alert-info">sign Now</h1>
        <label For="e" className="form-label" > email</label>
      <input type="text" id="e"   className="form-control" placeholder="write your email hare..."/>
      <label For="p" className="form-label" > password</label>
      <input type="text" id="p"   className="form-control"placeholder="write your password hare..."/>
      <button onClick={handellogin} className="btn btn-primary m-3">Login</button>
    </div>
  );
}

export default Login;