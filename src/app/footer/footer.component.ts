import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  @Input() data_footer: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data_footer);
  }

}
