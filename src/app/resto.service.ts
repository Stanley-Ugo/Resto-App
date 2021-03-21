import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http: HttpClient) { }

  getList()
  {
    console.log("Some data");
  }
}
