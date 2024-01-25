import axios from "axios";
import { useEffect, useState } from "react";

type SummaryType = {
  TotalProducts: number;
  Discount: number;
  Total: number;
};

export const useGetSummary = (): {
  summary: SummaryType | undefined,
  error: string | undefined
} => {
  const [summary, setSummary] = useState<SummaryType>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/ShoppingCart/baskedsummary");
        setSummary(response.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { summary, error };
};
