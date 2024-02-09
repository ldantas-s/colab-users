import { UserResponse } from '../services/UsersResponse';

export class User {
  static createUser(user: UserResponse) {
    const name = `${user.name.first} ${user.name.last}`;
    const id = user.login.uuid;
    const state = user.location.state;
    const nationality = user.nat;
    const profilePhoto = user.picture.large;
    return new User(id, name, state, nationality, profilePhoto);
  }

  constructor(
    readonly id: string,
    public name: string,
    public state: string,
    public nationality: string,
    public profilePhoto: string
  ) {}
}
