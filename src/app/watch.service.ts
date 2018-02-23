import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user.model';

@Injectable()
export class WatchService {

  private serviceUrl = 'http://localhost:3000/users';


  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.serviceUrl)
  }
}
