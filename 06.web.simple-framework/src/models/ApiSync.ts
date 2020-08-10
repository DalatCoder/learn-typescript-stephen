import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.rootUrl}/${id}`);
  };

  save = (data: T): AxiosPromise => {
    const { id } = data;

    if (id) {
      // Update user
      return axios.patch(`${this.rootUrl}/${id}`, data);
    }

    // Create new user
    return axios.post(this.rootUrl, data);
  };
}
