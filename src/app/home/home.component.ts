import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  phone: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  validaCampo(name: string){
    console.log(name);
    let nameVet: string[] = name.split(" ");
    if(nameVet.length == 1){
      console.log("Não preencheu tudo");
    }

  }

}
