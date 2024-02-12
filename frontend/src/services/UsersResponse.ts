export interface UsersApiResponse {
  results: UserResponse[];
}

export interface UserApiResponse {
  results: UserResponse;
}

export interface UserResponse {
  id: string;
  name: Name;
  email: string;
  cell: string;
  registeredAt: string;
  userName: string;
  picture: Picture;
  nationality: string;
  location: Location;
}

export interface Name {
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
}

export interface Location {
  state: string;
  city: string;
  street: Street;
  postCode: number;
  coordinates: Coordinates;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}
