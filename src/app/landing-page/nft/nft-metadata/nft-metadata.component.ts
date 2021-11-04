import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nft-metadata',
  templateUrl: './nft-metadata.component.html',
  styleUrls: ['./nft-metadata.component.scss']
})
export class NftMetadataComponent implements OnInit {

  @Input() metadata!: any;
  attributes: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.dir(this.metadata);
    this.mapAttributes();
  }

  mapAttributes(): void {
    for (const key in this.metadata.attributes) {
      this.attributes.push(
        this.metadata.attributes[key]
      );
    }
  }

}
