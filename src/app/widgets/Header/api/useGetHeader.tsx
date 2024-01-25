import axios from "axios";
import { useEffect, useState } from "react";

type HeaderDataType = {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
};

export const useGetHeader = (): {
  headerData: HeaderDataType | undefined;
  error: string | undefined;
} => {
  const [headerData, setHeaderData] = useState<HeaderDataType>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ShoppingCart/header");
        setHeaderData(response.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { headerData, error };
};
