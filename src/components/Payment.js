import React from 'react';
import '../components/Payment.css';
import {Link} from 'react-router-dom';

function Payment() {

    const handlePayment =()=>{
        alert('Payment successful !');
    };


  return (
    <div>
    <div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Person Name</p>
                        <input class="form-control mb-3" type="text" placeholder="Name"></input>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Card Number</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678"></input>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Expiry</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY"></input>
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***"></input>
                    </div>
                </div>
                <div class="col-12">
                    <Link to="/bill" class="btn btn-primary mb-3" onClick={handlePayment}>
                        <span class="ps-3">Pay Now</span>
                        <span class="fas fa-arrow-right"></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
  

export default Payment;