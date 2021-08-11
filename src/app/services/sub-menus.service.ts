import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubMenusService {

  apiUrl: string = "";
  pathUrl: string = "";
  subMenus: any = {

  }

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/subMenus';
  }

  listarTodosSubMenus() {
    
    console.log(this.http.get(this.apiUrl));

    return this.http.get(this.apiUrl);

  }

}

