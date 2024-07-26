"use client"
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

interface Hotel {
  name: string;
  price: number;
  country: string;
  city: string;
  distance: number;
  image: string;
}

function ProductsList () {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    fetch("/hotels.json")
    .then(response => response.json())
    .then(data => setHotels(data));
  }, []);

    return (
      <div className="grid grid-cols-1 gap-6 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-2 mb-6 col-span-full">
          Lista de Hoteles
        </h1>
        {hotels.map((hotel, index) => (
          <ProductCard key={index} hotel={hotel} />
        ))}
      </div>
    );
}

export default ProductsList;