import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            // Try to get the data from the API endpoint
            try {
              // Use axios.get to make a GET request with the URL
              const response = await axios.get('https://example.com/api/data');
              // Set the data state with the response data
              setData(response.data);
            } catch (error) {
              // Handle the error if any
              console.error(error);
            }
          };
          // Call the async function
          fetchData();
        
    }, []);

    return ( "" );
}

export default Product;