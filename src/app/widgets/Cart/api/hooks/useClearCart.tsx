import axios from "axios";
import { useEffect, useState } from "react";

type ClearCartType = {
    Name: string, 
    Description: string
}

export const useClearCart = (): { success: boolean | undefined, error: string | undefined } => {
    const [data, setData] = useState<ClearCartType>();
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/ShoppingCart/header");
          setData(response.data);
        } catch (error) {
          if (error instanceof Error) setError(error.message);
        }
      };
      fetchData();
    }, []);
  
    return { success: data?.Name === 'Success', error };
  };
  