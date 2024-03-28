// import React, { useState,useEffect} from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// //import products from "../asset/Product.json";
// import axios from "axios";
// import { Product } from "./Product";
// import './CartHome.css';
// import { useContext } from "react";
// import { cartContext } from "../App";
// import { Col, Row } from "react-bootstrap";


//  const CartHome = () => {
// //   const [product,setproduct]=useState('0');
// //   useEffect(() => {
// //     axios.get('/apiGateway/GetCart').then((response) => {
// //         setproduct(response.data);  
// //         console.log(response.data);      
// //     }).catch((error) => {
// //         console.error("error occured in fetch effect")
// //     });
    
// // }, []);

//   const {cart,setCart}=useContext(cartContext);
//   const [product,setProduct] = useState([]);
  
//   useEffect(() => {
    
//     const fetchData = async () => {
      
//       try {
//         const response = await axios.get('http://localhost:5277/api/Mobile/GetAllCart');
//         setProduct(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
 
//     fetchData();
//   },[]);
//   return (
//     <Container className="product-container">
//       {product.map((product) => (
//         <Product key={product.id} product={product} cart={cart} setCart={setCart} />
//       ))}
//       </Container>   
    
//   );
// };

// export default CartHome;
















import React, { useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
//import products from "../asset/Product.json";
import axios from "axios";
import { Product } from "./Product";
import './CartHome.css';
import { useContext } from "react";
import { cartContext } from "../App";
import { Col, Row } from "react-bootstrap";


 const CartHome = () => {
//   const [product,setproduct]=useState('0');
//   useEffect(() => {
//     axios.get('/apiGateway/GetCart').then((response) => {
//         setproduct(response.data);  
//         console.log(response.data);      
//     }).catch((error) => {
//         console.error("error occured in fetch effect")
//     });
    
// }, []);

  const {cart,setCart}=useContext(cartContext);
  const [product,setProduct] = useState([]);
  const [search, setSearch] = useState("");


  const filteredProducts = product.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.model.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {
    
    const fetchData = async () => {
      
      try {
        const response = await axios.get('http://localhost:5277/api/Mobile/GetAllCart');
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  },[]);
  
  return (
    <div>
       <input
       id="searchBar"
        type="text"
        placeholder=" Search By Category"
        onChange={(e) => setSearch(e.target.value)}
      />
    <Container className="product-container">
     
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </Container>
    </div>
  );
};

export default CartHome;
