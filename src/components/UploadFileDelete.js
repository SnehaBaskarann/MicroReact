// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button} from 'react-bootstrap';

// function DeleteMobile() {
//     const handleDelete = async (id) => {
//         try {
//             const response = await axios.delete(`http://localhost:5277/api/Mobile/DeletemobileDetails/${id}`);
//             if (response.status === 204) {
//                 // Successfully deleted
//                 //onDeleteSuccess(id); // This will update the parent component's state
//                 alert('Pet accessory deleted successfully!');
//             }
//         } catch (error) {
//             if (error.response && error.response.status === 404) {
//                 alert('Pet accessory not found.');
//             } else {
//                 alert('An error occurred while deleting the pet accessory.');
//             }
//         }
//     };
 
   
   
 
//     return (
//       <Button variant="danger" onClick={handleDelete}>Delete </Button>
       
//     );
// };
    
    
import React, { useState } from 'react';
import axios from 'axios';

const DeleteMobile = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await axios.delete(`http://localhost:5277/api/Mobile/DeletemobileDetails/${id}`);
      console.log(response.data); // Assuming you want to log the response
    } catch (error) {
      setError(error.response.data.message); // Assuming the error message is provided in the response
    }
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Deleting...' : 'Delete Mobile Details'}
      </button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};


 
export default DeleteMobile;