import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SubMenusService } from '../services/sub-menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  subMenus: any;
  isHomeActive: boolean = false;
  isSettingsActive: boolean = false;
  @Output() subTitle = new EventEmitter();
  
  constructor(private service: SubMenusService) { }

  ngOnInit(): void {
    console.log("Passou no console log OnInit")
    this.service.listarTodosSubMenus().subscribe(res =>{
      console.log(res)
      this.subMenus = res;
    });
  }

  public changeComponent(name: string){

    if(name === "Home"){
      console.log("Clicou em Home!");
      this.isSettingsActive = false;
      this.isHomeActive = true;
      this.subTitle.emit("Home");
      
    } else if(name === "Settings"){
      console.log("Clicou em Settings");
      this.isSettingsActive = true;
      this.isHomeActive = false;
      this.subTitle.emit("Settings");
    }
    

  }

  public activeHome(){
    this.isSettingsActive = false;
    this.isHomeActive = true;
  }

  public activeSettings(){
    this.isSettingsActive = true;
    this.isHomeActive = false;
  }

  

}
