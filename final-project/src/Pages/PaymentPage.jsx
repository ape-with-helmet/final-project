import React from 'react'
import './PaymentPage.css'
import pic1 from '../resources/svgs/icons-pay-edited.png'
function PaymentPage() {
  return (
    <>
      <br/><br/>
      <div className="row rwp">
        <div className="col-75 clp7">
          <div className="container conp">
            <form action="/action_page.php">

              <div className="row rwp">
                <div className="col-6 clp5">
                  <h3>Billing Address</h3>
                  <label className="lb" for="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input className="in" type="text" id="fname" name="firstname" placeholder="abc" />
                  <label className="lb" for="email"><i className="fa fa-envelope"></i> Email</label>
                  <input className="in" type="text" id="email" name="email" placeholder="abc@email.com" />
                  <label className="lb" for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input className="in" type="text" id="adr" name="address" placeholder="Flat-XX,Build-YY,Street-ZZZ" />
                  <label className="lb" for="city"><i className="fa fa-institution"></i> City</label>
                  <input className="in" type="text" id="city" name="city" placeholder="City" />

                  <div className="row rwp">
                    <div className="col-6 clp5">
                      <label className="lb" for="state">State</label>
                      <input className="in" type="text" id="state" name="state" placeholder="State" />
                    </div>
                    <div className="col-6 clp5">
                      <label className="lb" for="zip">Zip</label>
                      <input className="in" type="text" id="zip" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-6 clp5">
                  <h3>Payment</h3>
                  <label className="lb" for="fname">Accepted Cards</label>
                  <div className="icon-container jajajaja">
                    <span><img src={pic1} alt='credit card' className='icon-cards'/></span>
                  </div>
                  <label className="lb" for="cname">Name on Card</label>
                  <input className="in" type="text" id="cname" name="cardname" placeholder="abc xyz" />
                  <label className="lb" for="ccnum">Credit card number</label>
                  <input className="in" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                  <label className="lb" for="expmonth">Exp Month</label>
                  <input className="in" type="text" id="expmonth" name="expmonth" placeholder="Month" />
                  <div className="row rwp">
                    <div className="col-6 clp5">
                      <label className="lb" for="expyear">Exp Year</label>
                      <input className="in" type="text" id="expyear" name="expyear" placeholder="Year" />
                    </div>
                    <div className="col-6 clp5">
                      <label className="lb" for="cvv">CVV</label>
                      <input className="in" type="text" id="cvv" name="cvv" placeholder="XXX" />
                    </div>
                  </div>
                </div>

              </div>
              <label className="lb">
                <input className="in" type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
              </label>
              <button className="in btnp" xtype="submit">Continue the Payment</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage