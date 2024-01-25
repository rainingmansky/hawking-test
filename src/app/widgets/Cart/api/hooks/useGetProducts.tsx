import axios from "axios";
import { useEffect, useState } from "react";

type CartProductsType = {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: [
    {
      FileName: string;
      FileExtension: string;
      Image: string;
    }
  ];
};

export const useGetProducts = (): {
  products: CartProductsType[] | undefined;
  error: string | undefined;
} => {
  const [products, setProducts] = useState<CartProductsType[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ShoppingCart/products");
        setProducts(response.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { products, error };
};
