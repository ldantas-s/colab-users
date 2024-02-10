import { UserResponse } from '../services/UsersResponse';

export class User {
  static createUser(user: UserResponse) {
    const name = `${user.name.first} ${user.name.last}`;
    const id = user.login.uuid;
    const state = user.location.state;
    const nationality = user.nat;
    const profilePhoto = user.picture.large;
    const username = user.login.username;
    const email = user.email;
    const cell = user.cell;
    const timezone = user.location.timezone.offset;
    const registered = user.registered.date;
    const location = {
      lat: user.location.coordinates.latitude,
      lon: user.location.coordinates.longitude,
      streetName: user.location.street.name,
      streetNumber: user.location.street.number,
      city: user.location.city,
      postCode: user.location.postcode,
    };
    return new User(
      id,
      name,
      state,
      nationality,
      profilePhoto,
      username,
      email,
      cell,
      timezone,
      registered,
      location
    );
  }

  constructor(
    readonly id: string,
    public name: string,
    public state: string,
    public nationality: string,
    public profilePhoto: string,
    public username: string,
    public email: string,
    public cell: string,
    public timezone: string,
    public registered: string,
    public location: {
      streetName: string;
      streetNumber: number;
      city: string;
      postCode: number;
      lat: string;
      lon: string;
    }
  ) {}

  getRegisteredTime(): string {
    const date = new Date(this.registered);
    const year = date.getFullYear();
    const month = date.toUTCString().split(' ')[2];
    return `Registerd in ${month} ${year}`;
  }
}
