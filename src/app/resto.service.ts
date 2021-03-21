import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor() { }

  getList()
  {
    console.log("Some data");
  }
}
