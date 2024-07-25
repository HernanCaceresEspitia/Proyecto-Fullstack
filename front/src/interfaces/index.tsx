export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  birthDate: string; //
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegisterValues {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  birthDate: string;
}

export interface IUserContextType {
  user: Partial<IUser> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUser> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILogin) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  logOut: () => void;
}

export interface IUserResponse {
  id: number;
  email: string;
  name: string;
  lastname: string;
  token: string;
}

export interface IRoom {
  roomId: string;
  numRoom: string;
  type: IRoomType[];
  status: boolean;
  hotelId: string;
}

export interface IRoomType {
  roomTypeId: string;
  name: string;
  capacity: number;
  totalBathrooms: number;
  totalBeds: number;
  image: string[];
  price: number;
}

export interface IHotelRegister {
  name: string;
  email: string;
  country: string;
  city: string;
  address: string;
  location: string;
  rooms: string;
  services: string;
  image: string;
}

export interface IHotel {
  hotelId: string;
  name: string;
  email: string;
  country: string;
  city: string;
  address: string;
  location: number[];
  totalRooms: number;
  availableRooms: IRoom[];
  services: string[];
  image: string[];
  rating: number;
  hotelAdminId: string;
}

export interface IHotelAdmin {
  hotelAdminId: string;
  hotelsNumber: number;
  isAdmin: boolean;
  userId: string;
}

export interface IReview {
  reviewId: string;
  userId: string;
  hotelId: string;
  comment: string;
  date: string;
  rating: number;
}

export interface IBooking {
  bookingId: string;
  date: string;
  time: string;
  status: boolean;
  userId: string;
}

export interface IBookingDetails {
  bookingDetailsId: string;
  price: number;
  checkInDate: string;
  checkOutDate: string;
  status: boolean;
  bookingId: string;
}
