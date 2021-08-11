import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  title = 'angular-tour-of-heroes';
  subTitle: any;
  footer = "Aqui Paulo";

  public receiveSubTitle(subTitle: Event) {
    this.subTitle = subTitle;
    console.log(subTitle);

  }

  ngOnInit(): void {
    this.subTitle = "Arruda Tour Of Heroes";
  }

}