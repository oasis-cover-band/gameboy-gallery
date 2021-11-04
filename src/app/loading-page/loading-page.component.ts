import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  firstRandom = Math.floor(Math.random() * 100);
  secondRandom = Math.floor(Math.random() * 100);
  thirdRandom = Math.floor(Math.random() * 100);
  fourthRandom = Math.floor(Math.random() * 100);
  fifthRandom = Math.floor(Math.random() * 100);
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
