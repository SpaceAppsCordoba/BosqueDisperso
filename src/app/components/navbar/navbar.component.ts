import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  mobile: string = '';
  constructor() { }

  ngOnInit(): void {
    this.mobile = '';
  }
  change(){
    if (this.mobile == 'is-active'){
      this.mobile = '';
    }else{
      this.mobile = 'is-active';
    }
  }
}
