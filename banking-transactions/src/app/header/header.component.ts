import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentTime = new Date();
  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    });
  }

  ngOnInit(): void {}
}
