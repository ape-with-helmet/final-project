import React, { useEffect, useRef } from "react";
import LoadingBar from 'react-top-loading-bar'
import './Ps.css'
import { useNavigate } from "react-router-dom";

const PaymentSuccessful = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    ref.current.continuousStart()
    setTimeout(() => {
      ref.current.complete()
      navigate('/');
    }, 10000);
});

  return (
    <>
      <LoadingBar color='#f11946' ref={ref} />
      <div className="pay">
        <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" className='paymentImage' alt="" />
        <h2>Payment Done!!!</h2>
        <p>Thank you for your purchase. Your payment was successful.</p>
        <p>Have a nice day.</p>
      </div>
    </>
  );
};

export default PaymentSuccessful;