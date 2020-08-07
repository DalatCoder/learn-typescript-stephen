import { company, address } from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>
          Company Name: ${this.companyName}
        </h1>
        <h3>
          Catchphrase: ${this.catchPhrase}
        </h3>
      </div>
    `;
  }
}
