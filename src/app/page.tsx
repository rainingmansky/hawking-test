"use client";

import { useEffect, useState } from "react";
import { Header } from "./widgets";
import axios from "axios";

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  useEffect(() => {
    const handlePost = async () => {
      try {
        const response = await axios.post('/api/Admin/create')
        setIsAuthorized(response.data)
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    handlePost()
  }, []);
  return (
    <main className="flex w-full bg-main-bg h-screen">
      {isAuthorized && <Header />}
    </main>
  );
}
