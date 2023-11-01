import React from 'react'
import './Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Cart() {
  
  return (
    <>
      <section className="vh-100" style={{backgroundcolor : "#fdccbc"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-200">
            <div className="col">
              <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

              <div className="card mb-4">
                <div className="card-body p-5">

                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                        className="img-fluid" alt="Generic placeholder"/>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Namee">
                      <div>
                        <p className="small text-muted  ">Name</p>
                        <p className="lead fw-normal  " style={{fontSize:"15px"}}>LCB TRIUMPH SPEED 400 VOYAGER BASHPLATE</p>
                        
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center ModelNo">
                      <div>
                        <p className="small text-muted  ">Model No</p>
                        <p className="lead fw-normal =" style={{ fontSize:"15px"}}>SKU: ENG12868</p>
                        
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Quantityy">
                      <div>
                        <p className="small text-muted ">Quantity</p>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Qty
                        </button>
                          <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">1</button></li>
                            <li><button class="dropdown-item" type="button">2</button></li>
                            <li><button class="dropdown-item" type="button">3</button></li>
                           
                          </ul>
                      </div>
                       

                          
                        
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Pricee">
                      <div>
                        <p className="small text-muted ">Price</p>
                        <p className="lead fw-normal  ">₹7,349</p>
                       
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Tootal">
                      <div>
                        <p className="small text-muted ">Total</p>
                        <p className="lead fw-normal ">₹7,349</p>
                       
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="card mb-5">
                <div className="card-body p-4">

                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">Order total:</span> <span
                        className="lead fw-normal">₹7,349</span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="d-flex justify-content-end">
              <a href='/'><button type="button" className="btn btn-outline-secondary btn-lg me-2">Continue shopping</button></a>
                <a href='/Pay'><button type="button" className="btn btn-secondary btn-lg">Proceed to Buy</button></a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );

}

export default Cart;