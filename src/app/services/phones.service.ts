import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhonesService {
  constructor(private http: HttpClient) {

  }

  requestPhones() { 
    return this.http.get('http://localhost:3000/phones');
  }

  requestPhoneById(id) {
    return this.http.get(`http://localhost:3000/phones/${id}`);
  }

  requestPhoneDelete(id) {
    return this.http.delete(`http://localhost:3000/phones/${id}`);
  }

  requestPhoneAdding(phone) {
    return this.http.post('http://localhost:3000/phones', phone);
  }

  requestPhoneEdditing(id, editedPhone) {
    return this.http.put(`http://localhost:3000/phones/${id}`, editedPhone);
  }
}