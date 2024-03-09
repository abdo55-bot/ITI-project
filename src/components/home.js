

function Home(){
    return(
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2304&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1428709516/photo/shopping-online-woman-hand-online-shopping-on-laptop-computer-with-virtual-graphic-icon.jpg?s=2048x2048&w=is&k=20&c=G1weAIS9G510Ye8mTY3ZUKLTgBUiHiSY3r0BZxM5Uwo=" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1429456277/photo/online-shopping-with-credit-car-or-cash-money.jpg?s=2048x2048&w=is&k=20&c=qjg7E_CcbR2BHvHi_1rE4wEQwFhtb11AgBrvVx89_II=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Home;