import { PictureAsPdf } from '@mui/icons-material';
import React from 'react'

function BillGeneration() {
  return (
    
  <div class="card" >
  <div class="card-body mx-4">
    <div class="container">
      <h4 class="my-5 mx-5" style={{fontsize:"30px", fontWeight:"bold"}}>Invoice Details</h4>
      <p >Thank you for purchasing !</p>
      <div class="row">
        <ul class="list-unstyled">
          <li class="text-black">Sneha</li>
          <li class="text-muted mt-1">#54381</li>
          <li class="text-muted my-6 mx-0 mt-2">25.03.2024</li>
          </ul>
          <hr></hr>
          <div class="col-xl-10">
            <p>Mobile Brand</p>
          </div>
          <div class="col-xl-2">
            <p class="float-end">Oneplus 
            </p>
          </div>
          <hr></hr>
      </div>
      <div class="row">
        <div class="col-xl-10">
          <p>Mobile Model</p>
        </div>
        <div class="col-xl-2">
        <p class="float-end">Nord ce3 lite 5g
          </p>
        </div>
        <hr></hr>
      </div>
      <div class="row">
        <div class="col-xl-10">
          <p>Price</p>
        </div>
        <div class="col-xl-2">
          <p class="float-end">₹ 20,000
          </p>
        </div>
        <hr style={{border: "2px solid black;"}}></hr>
      </div>
      <div class="row text-black">

        <div class="col-xl-12">
          <p class="float-end fw-bold">Tax : 5%
          </p>
        </div>
        <hr style={{border: "2px solid black;"}}></hr>
      </div>
      <div class="text-center" style={{marginTop:"90px;"}}>
        <a href="javascript:window.print()">Print the bill</a>
        <a href="./bill" to="C:\Users\sneha.baskaran\Downloads\Bill" download={PictureAsPdf}><button class="btn-danger"><i class="fa fa-download"></i>Download</button></a>
        <p></p>
      </div>

    </div>
  </div>
</div>
   
  );
}

export default BillGeneration;