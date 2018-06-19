import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

  public getAuteur() : string {
    return "didier" ;
  }

  constructor() { }
}
