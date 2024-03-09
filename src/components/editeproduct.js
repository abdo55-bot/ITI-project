import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"



function EditeProduct(){
    let[edite,setedite]=useState({id:0,title:'',price:0,description:'',imageUrl:''})
  let {id}=useParams();
  async function getdetails(){
    let alldata=await axios.get(`http://localhost:5000/products/${id}`)
    setedite(alldata.data);
  }
  useEffect(()=>{getdetails()},[]);
  let navigate= useNavigate();

  function handelchange(event){
    setedite({...edite,[event.target.name]:event.target.value})

}

function handelsubmit(){
    axios.put(`http://localhost:5000/products/${id}`,edite)
    navigate("/adminproducts")

 }





    return(
        <>
        <div>
        <form className="col-4" onSubmit={handelsubmit}>
                <div>
                    <label className="form-lable" style={{float:"left"}}>id</label>
                    <input type="number" name="id" value={edite.id} className="form-control" onChange={handelchange}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>title</label>
                    <input type="text" name="title" value={edite.title} className="form-control" onChange={handelchange}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>price</label>
                    <input type="number" name="price" value={edite.price} className="form-control" onChange={handelchange}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>description</label>
                    <input type="text" name="description" value={edite.description} className="form-control" onChange={handelchange}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>imageurl</label>
                    <input type="text" name="imageUrl" value={edite.imageUrl} className="form-control" onChange={handelchange}/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>

            </form>

        </div>
        </>
    )
}

export default EditeProduct;