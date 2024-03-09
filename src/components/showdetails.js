import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetailsProducts(){
  let[details,setdetails]=useState({id:0,title:'',price:0,description:'',imageUrl:''})
  let {id}=useParams();
  async function getdetails(){
    let alldetails=await axios.get(`http://localhost:5000/products/${id}`)
    setdetails(alldetails.data);
  }

  useEffect(()=>{getdetails()},[])




  return(
    <>
    <div style={{display:"flex"}}>
     <img src={details.imageUrl} className="m-4"  style={{width:400}} />
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
      <th scope="row">{details.id}</th>
      <td>{details.title}</td>
      <td>{details.description}</td>
      <td>{details.price}</td>
    </tr>
    <tr>
      
      <td colspan="2">TOTAL</td>
      <td colSpan="2">{details.price}$</td>
    </tr>
  </tbody>
</table>


    </div>
    <a href="/products"className="btn btn-primary m-3" >Back to our products</a>
    <a href="/products"className="btn btn-success m-3 " style={{float:"right"}}>Add to cart</a>
    </>
  )
}

export default  DetailsProducts;