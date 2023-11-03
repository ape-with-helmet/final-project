import './Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import axios from "axios";


function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const pricePerItem = 7349;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = quantity * pricePerItem;



  useEffect(() => {
    fetch("http://localhost:8080/getallcart", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
    console.log(data)
  },[])
  


  return (
    <>
      <section className="vh-100 martin1" style={{ backgroundcolor: "#fdccbc" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-200">
            <div className="col">
              <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

              <div className="card mb-4">
                <div className="card-body p-5">

                  <div className="row align-items-center">
                    
                    <div className="col-md-2 d-flex justify-content-center Namee">
                      <div>
                        <p className="small text-muted  ">Name</p>
                        <p className="lead fw-normal  " style={{ fontSize: "15px" }}>LCB TRIUMPH SPEED 400 VOYAGER BASHPLATE</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center ModelNo">
                      <div>
                        <p className="small text-muted  ">Model No</p>
                        <p className="lead fw-normal =" style={{ fontSize: "15px" }}>SKU: ENG12868</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Quantityy">
                      <div>
                        <p className="small text-muted">Quantity</p>
                        <div className="input-group">
                          <button
                            type="button"
                            className="btn btn-link px-40 "
                            onClick={decreaseQuantity}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash pop" viewBox="0 0 16 16">
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                            </svg>
                          </button>
                          <span
                            className="fii "
                            style={{ width: '3rem', textAlign: 'center' }}
                          >{quantity}</span>
                          <button
                            type="button"
                            className="btn btn-link px-40"
                            onClick={increaseQuantity}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus pop" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                            </svg>
                          </button>
                        </div>


                      </div>
                    </div>

                    <div className="col-md-2 d-flex justify-content-center Pricee">
                      <div>
                        <p className="small text-muted ">Price</p>
                        <p className="lead fw-normal  ">₹{pricePerItem}</p>

                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center Tootal">
                      <div>
                        <p className="small text-muted ">Total</p>
                        <p className="lead fw-normal ">₹{totalPrice}</p>

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
                        className="lead fw-normal">₹{totalPrice}</span>
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