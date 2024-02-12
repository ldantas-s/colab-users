import { UserResponse } from './UserResponse';

export class User {
  static createUser(responseUser: UserResponse): User {
    return new User(
      responseUser.login.uuid,
      { first: responseUser.name.first, last: responseUser.name.last },
      responseUser.email,
      responseUser.cell,
      responseUser.registered.date,
      responseUser.login.username,
      {
        large: responseUser.picture.large,
        medium: responseUser.picture.medium,
      },
      responseUser.nat,
      {
        state: responseUser.location.state,
        city: responseUser.location.city,
        street: {
          number: responseUser.location.street.number,
          name: responseUser.location.street.name,
        },
        postCode: responseUser.location.postcode,
        coordinates: {
          latitude: responseUser.location.coordinates.latitude,
          longitude: responseUser.location.coordinates.longitude,
        },
      }
    );
  }

  constructor(
    public id: string,
    public name: Name,
    public email: string,
    public cell: string,
    public registeredAt: string,
    public userName: string,
    public picture: Picture,
    public nationality: string,
    public location: Location
  ) {}
}

type Name = { first: string; last: string };
type Picture = {
  large: string;
  medium: string;
};
type Location = {
  state: string;
  city: string;
  street: Street;
  postCode: number;
  coordinates: Coordinates;
};
type Street = {
  number: number;
  name: string;
};
type Coordinates = {
  latitude: string;
  longitude: string;
};
