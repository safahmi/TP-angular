import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-icon',
  templateUrl: './sorting-icon.component.html',
  styleUrls: ['./sorting-icon.component.scss'],
})
export class SortingIconComponent implements OnInit {
  @Input()
  sortingOrder = 0;

  constructor() {}

  ngOnInit(): void {}
}
