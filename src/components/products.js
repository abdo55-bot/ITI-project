import axios from "axios";
import React, { useEffect, useState } from "react";



function Products() {
  let [prods, setprods] = useState([]);


  async function getdata(){
    let alldata = await axios.get('http://localhost:5000/products');
    setprods(alldata.data);
  }

  let [searchtext,setsearchtext]=useState('')
function handelsearctextchange(event){
    setsearchtext(event.target.value)
}


async function search(){
  let searchreasult=await axios.get(`http://localhost:5000/products?q=${searchtext}`)
  setprods(searchreasult.data);
}

  useEffect(() => {
    getdata();
  }, []);

  function showdata() {
    if (prods.length > 0) {
      return (
        <div className="row " >
          {prods.map((prod) => <div class="card m-5" style={{width: 400}}>
  <img src={prod.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={`/productdetails/`+prod.id}  class="btn btn-primary">Show Details</a>
  </div>
</div>)}
        </div>
      );
    }else{
      return(
        <h1>there is no products to display</h1>
      )
    }
  }
  

  



  return( <div>
    <div className="btn-group m-3">
    <input type="text" className="form-control" onChange={handelsearctextchange}/>
    <button className="btn btn-secondary"  onClick={search}><i className="bi bi-search"></i></button>
</div>
    
    
    {showdata()}
    
    </div>
  )
}

export default Products;