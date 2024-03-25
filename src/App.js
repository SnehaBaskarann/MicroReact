import './App.css';
import { BrowserRouter as Router, Routes, Route , BrowserRouter} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/login';
import HomePage from './Home';
import Dashboard from './components/Dashboard';
import UploadFile from './components/UploadFile';
import UploadformUpdate from './components/UploadFileUpdate';
import DeleteMobile from './components/UploadFileDelete';
import Payment from './components/Payment';
import BillGeneration from './components/BillGeneration';
import CartHome from './components/CartHome';
import Viewcart from './components/Viewcart';
import Container from "react-bootstrap/Container";
import { useState,createContext, } from 'react';
import CustomerDetails from './components/CustomerDetails';


export const cartContext=createContext();





function App() {
  const [cart,setCart]=useState([]);
  return (
  
    // <>
    // <BrowserRouter>
    // <cartContext.Provider value={{cart,setCart}}>
      
    // <Container fluid className='container'>
      
    //   <Routes>
        
    //     <Route path="/Home" element={<CartHome/>}/>
    //     <Route path="/Cart" element={<Viewcart/>}/>
        
    //   </Routes>
       
    // </Container>
    // </cartContext.Provider>
    
    

    // <div className="App">
     
    //         <Routes>
    //           <Route path="/customer" element={<CustomerDetails/>}/>
    //           <Route path="/Dashboard" element={<Dashboard/>}/> 
    //           <Route path="/" element={<HomePage/>}/>
    //           <Route path="/sign-in" element={<Login/>} />
    //           <Route path="/sign-up" element={<Register/>}/>
    //           <Route path="/UploadFile" element={<UploadFile/>}/>
    //           <Route path="/Uploadform" element={<UploadformUpdate/>}/>
    //         </Routes>
   
    // </div>
    // </BrowserRouter>
    // </>

    <Router>
      <Container fluid className='container'>
        <cartContext.Provider value={{ cart, setCart }}>
          <Routes>
            <Route path="/Home" element={<CartHome />} />
            <Route path="/Cart" element={<Viewcart />} />
          </Routes>
        </cartContext.Provider>
      </Container>

      <div className="App">
        <Routes>
          <Route path="/customer" element={<CustomerDetails />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/UploadFile" element={<UploadFile />} />
          <Route path="/Uploadform" element={<UploadformUpdate />} />
          <Route path="/DeleteMobile" element={<DeleteMobile/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/bill" element={<BillGeneration/>} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
