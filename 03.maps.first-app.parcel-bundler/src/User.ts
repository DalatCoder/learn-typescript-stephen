import { name, address } from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = name.firstName();

    // Initialize location object
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
