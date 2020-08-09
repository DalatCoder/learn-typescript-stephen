import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      // Update user
      return axios.patch(`${this.rootUrl}/${id}`, data);
    }

    // Create new user
    return axios.post(this.rootUrl, data);
  }
}
