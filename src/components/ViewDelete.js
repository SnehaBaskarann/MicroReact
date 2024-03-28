import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteMobileButton from "./UploadFileDelete";
import {Link} from 'react-router-dom'; 


const Deleteone = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5277/api/Mobile/GetAllCart"
                );
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteSuccess = async () => {
        // Fetch data again after deletion
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5277/api/Mobile/GetAllCart"
                );
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    };

    return (
        <>
           <div><Navbar/>
            <div style={{ padding: "20px" }}>
               
                <div className="App">
                    <div
                        className="d-flex flex-wrap justify-content-evenly"
                        style={{ columnGap: "160px", marginTop: "20px" }}
                    >
                        {posts.map((post) => (
                            <div
                                className="card m-4"
                                style={{ width: "18rem",  backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                                key={post.id}
                            >
                                <img
                                    src={post.imageUrl}
                                    className="card-img-top"
                                    alt={post.petname}
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    {/* <h5 className="card-title">User Id: {post.id}</h5> */}
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Id: {post.id}
                                    </h6>
                                    <p className="card-text">
                                        Name: {post.name}
                                    </p>
                                    <p className="card-text">
                                        Model:{post.model}
                                    </p>
                                    <p className="card-text">Price: {post.price}</p>

                                    <div className="card-footer">
                                        {/* <small className="text-muted">Price: {post.price}</small> */}
                                    </div>
                                    {/* Integrate DeletePetitionButton component */}
                                    {<DeleteMobileButton
            
                                        mobileId={post.id}
                                        onDeleteSuccess={handleDeleteSuccess}
                                    />}
                                     

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};


export default Deleteone;