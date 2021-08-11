import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

    //pathUrl: this.apiUrl + "subMenus";
    //console.log(this.pathUrl);
    //console.log(this.apiUrl);
    console.log(this.http.get(this.apiUrl));

    return this.http.get(this.apiUrl);

  }

}

