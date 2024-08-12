import {
  ICreateBooking,
  ICreateNumberOfRoom,
  IHotelRegister,
  IRoomType,
} from "@/interfaces";

export const postHotel = async (hotel: IHotelRegister) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3000/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(hotel),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error en la solicitud: " + response.status);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postRoomType = async (roomType: IRoomType) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/roomstype", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(roomType),
  });

  const data = await response.text();
  return data;
};

export const postRoom = async (room: ICreateNumberOfRoom) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/rooms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(room),
  });
  const data = await response.json();
  return data;
};

export const getHotelById = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/hotels/${id}`, {
      cache: "no-cache",
    });
    const hotel = await response.json();
    return hotel;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getHotelsByAdminId = async (id: string) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No se encontró el token de autenticación.");
  }

  const response = await fetch(
    `http://localhost:3000/hotels/hotelAdmin/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);

  if (!response.ok) {
    throw new Error(
      `Error en la solicitud: ${response.status} - ${response.statusText}`
    );
  }
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error en la solicitud: " + response.status);
  }
};

export const getHotels = async () => {
  try {
    const response = await fetch("http://localhost:3000/hotels");
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error en la solicitud: " + response.status);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getHotelsBySearch = async (searchQuery: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/hotels/search?search=${searchQuery}`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Error en la solicitud: " + response.status);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBookingByHotel = async (hotelId: string) => {
  const response = await fetch("#");
  const data = await response.json();
  return data;
};

export const getRoomsByHotel = async (hotelId: string) => {
  const response = await fetch("#");
  const data = await response.json();
  return data;
};

export const postBooking = async (booking: ICreateBooking) => {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(booking),
  });
  const data = await response.json();
  return data;
};

export const getRoomTypesByHotelId = async (
  hotelId: string
): Promise<IRoomType[]> => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:3000/roomstype/hotel/${hotelId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Datos JSON recibidos:", data);
    if (Array.isArray(data)) {
      return data.map((item) => ({
        id: item.id,
        roomTypeId: item.roomTypeId,
        name: item.name,
        capacity: item.capacity,
        totalBathrooms: item.totalBathrooms,
        totalBeds: item.totalBeds,
        image: item.image,
        price: item.price,
      }));
    } else {
      console.error("Error: Expected array but received:", data);
      return [];
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return [];
  }
};

export const updateHotel = async (hotelId: string, hotelData: any) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hotelData),
  });

  if (!response.ok) {
    throw new Error(`Error en la actualización del hotel: ${response.status}`);
  }

  const data = await response.json();
  return data;
};
