import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Dashboard.css";
import Navbar from './Navbar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import Admin from '../components/images/Admin.jpg';







function Dashboard() {
	
  return (
	<div>
	
    <div className='sidebar'><Navbar/>
	<div class="container-fixed dashboard" id='dashboard'>
    <div class="row flex-nowrap">
		<div class="bg col-md-4 col-lg-3 min-vh-100 color">
			<div class="p-2">
			<a class="d-flex text-decoration-none align-items-center">
			<ManageAccountsIcon fontSize='large' style={{color:"HighlightText",paddingRight:5}} /><span class="fs-5 d-none d-sm-inline" style={{color:"HighlightText"}}>Admin Panel</span>
			</a>
			<hr style={{color:"white"}}></hr>
			<ul class="nav nav-pills flex-column mt-4">
				<li class="nav-item item">
				<a href="./uploadFile" class="nav-link text-white" >
				<PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Adding New Mobile</span>
				</a>
				</li>&nbsp;

				<li class="nav-item item">
				<a href="./Uploadform" class="nav-link text-white" >
				<PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Uploading New Mobile</span>
				</a>
				</li>&nbsp;
				<li class="nav-item item">
				<a href="./Deleteone" class="nav-link text-white" >
				<PhonelinkSetupIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Removing the Mobile</span>
				</a>
				</li>&nbsp;
			
				<li class="nav-item item">
					<a href="./adminorders" class="nav-link text-white">
						<ShoppingBagIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Purchasing History</span>
					</a>
				</li>
				&nbsp;
				<li class="nav-item item">
					<a href="./customer" class="nav-link text-white">
						<PeopleIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6  d-none d-sm-inline">Managing Customer</span>
					</a>
				</li>&nbsp;
				<li class="nav-item item">
					<a href="/sign-in" class="nav-link text-white">
					<LogoutIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Logout</span>
					</a>
				</li>&nbsp;
			</ul>
		</div>
        </div>
	</div>
	</div> 
	<div>
	<h3 style={{textAlign:"center", color:" rgb(66, 66, 126)", marginLeft:"35%",marginTop:"2%"}} id='dashboard'>Welcome to Admin Panel !</h3>
	<img id='imgadmin' src={Admin} alt='admin' className='admin' ></img>
	</div>
    </div>
	</div>
	
	

  )
};

export default Dashboard;

