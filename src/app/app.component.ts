import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  title:any = "";
  subTitle: string = "";
  footer = "Aqui Paulo";

  public receiveSubTitle(subTitle: string) {
    this.subTitle = subTitle;
    console.log(subTitle);

  }

  ngOnInit(): void {
    this.subTitle = "Main";
    this.title = "Arruda Tour Of Heroes";
  }

}