import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Method } from './method.enum';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlashcardService {
  constructor(private http: HttpClient) { }

  interactDB(method: Method, URL: string, data: any): Observable<any> {
    if (method === Method.GET) {
      return this.get(URL, data);
    } else if (method === Method.POST) {
      return this.post(URL, data);
    } else if (method === Method.PUT) {
      return this.put(URL, data);
    } else {
      return this.delete(URL, data);
    }
  }

  private get(URL: string, data: any) {
    return this.http.get(URL + '/' + data);
  }

  private post(URL: string, data: any) {
    return this.http.post(URL, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  private put(URL: string, data: any) {
    return this.http.put(URL, data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }

  private delete(URL: string, data: any) {
    return this.http.delete(URL + '/' + data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    });
  }
}
