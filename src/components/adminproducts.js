import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminProducts() {
  const [prods, setprods] = useState([]);

  async function getdata(){
    let alldata = await axios.get('http://localhost:5000/products/');
    setprods(alldata.data);
  }

  useEffect(() => {
    getdata();
  }, []);

  function showdata() {
    if (prods.length > 0) {
      return (
        <>
        <div style={{width:150,margin:'auto'}}>
        <a href="/addproduct" className="btn btn-info  "  >Add New Item</a>
        </div>
        <div className="row " >
          
          {prods.map((prod) => <div class="card m-5" style={{width: 400}}>
  <img src={prod.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prod.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="btn btn-group">
    <a href={`/productdetails/`+prod.id} class="btn btn-primary">Show Details</a>
    <a href={`/deleteproduct/`+prod.id} class="btn btn-danger">delete</a>
    <a href={`/editeproduct/`+prod.id} class="btn btn-success">Edite</a>
    </div>
  </div>
</div>)}
        </div>
        </>
      );
    }
  }

  return <div>{showdata()}</div>;
}

export default AdminProducts;