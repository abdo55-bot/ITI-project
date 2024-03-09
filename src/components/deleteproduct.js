import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteProduct(){
    let[prouducts,setproducts]=useState({id:0,title:'',price:0,description:'',category:'',imageUrl:''})
    let {id}=useParams();
    let navigate=useNavigate();
    async function datadelete(){
        let alldetails=await axios.get(`http://localhost:5000/products/${id}`)
        setproducts(alldetails.data);
      }
      function handeldelete(){
        axios.delete(`http://localhost:5000/products/${prouducts.id}`);
        navigate('/adminproducts')
     
     }
     useEffect(()=>{datadelete()},[])


    return(
        <>
        <h1 className="alert alert-danger">are you sure you want to delete?</h1>
        <div style={{display:"flex"}}>
        <img src={prouducts.imageUrl} className="m-4"  style={{width:400}} />
     <table class="table table-bordered m-5" style={{width:800 ,float:"right"}}>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
 
    <tr>
      <th scope="row">{prouducts.id}</th>
      <td>{prouducts.title}</td>
      <td>{prouducts.description}</td>
      <td>{prouducts.price}</td>
    </tr>
    <tr>
      
      <td colspan="2">TOTAL</td>
      <td colSpan="2">{prouducts.price}$</td>
    </tr>
  </tbody>
</table>

        </div>
        <button className="btn btn-danger" onClick={handeldelete}>delete</button>
        </>
    )
}

export default DeleteProduct;