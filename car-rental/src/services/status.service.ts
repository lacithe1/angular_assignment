import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Status[]>('/api/condition').toPromise();
  }
}