import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }
  Getclientdetails()
  {
    return this.http.get("http://catodotest.elevadosoftwares.com//Client/GetAllClientDetails");
  }
  Addnewclient(input:any)
  {
    return this.http.post("http://catodotest.elevadosoftwares.com/Client/InsertClient",input)
  }
}
