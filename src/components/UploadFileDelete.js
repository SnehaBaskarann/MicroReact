import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

 
const DeleteMobileButton = ({ mobileId, onDeleteSuccess }) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5277/api/Mobile/DeletemobileDetails/${mobileId}`);
            if (response.status === 200) {
                // Call the onDeleteSuccess callback if provided
                onDeleteSuccess && onDeleteSuccess();
                alert('Mobile deleted successfully !');
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response.data);
                alert('Failed to delete the mobile');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };
 
    return (
        <Button className='btn btn-danger' onClick={handleDelete}>Delete</Button>
        
    );
};
 
export default DeleteMobileButton;