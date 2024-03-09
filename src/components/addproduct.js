import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddProduct(){
    let[add,setadd]=useState({id:0,title:'',price:0,description:'',imageUrl:''})
    let navigate=useNavigate();
    function handeladd(event){
        add[event.target.name]=event.target.value;
    }
    function handelsubmit(){
        axios.post('http://localhost:5000/products',add)
        navigate("/adminproducts")
    }


    return(
        <>
        <div>
        <form className="col-4" onSubmit={handelsubmit}>
                <div>
                    <label className="form-lable" style={{float:"left"}}>id</label>
                    <input type="number" name="id" className="form-control" onChange={handeladd}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>title</label>
                    <input type="text" name="title" className="form-control" onChange={handeladd}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>price</label>
                    <input type="number" name="price" className="form-control" onChange={handeladd}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>description</label>
                    <input type="text" name="description" className="form-control" onChange={handeladd}/>
                </div>
                <div>
                    <label className="form-lable" style={{float:"left"}}>imageurl</label>
                    <input type="text" name="imageUrl" className="form-control" onChange={handeladd}/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>

            </form>
        </div>
        </>
    )
}

export default AddProduct;