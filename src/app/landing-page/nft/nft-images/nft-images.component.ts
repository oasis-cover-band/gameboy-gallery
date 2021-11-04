import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nft-images',
  templateUrl: './nft-images.component.html',
  styleUrls: ['./nft-images.component.scss'],
})
export class NftImagesComponent implements OnInit {

  @Input() image0!: string;
  @Input() image1!: string;
  @Input() collectionDirectory!: string;
  @Input() routed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
