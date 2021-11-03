import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nft-images',
  templateUrl: './nft-images.component.html',
  styleUrls: ['./nft-images.component.scss']
})
export class NftImagesComponent implements OnInit {

  @Input() images!: {
    image0: string,
    image1: string
  };
  constructor() { }

  ngOnInit(): void {
    console.dir(this.images.image0);
  }

}
