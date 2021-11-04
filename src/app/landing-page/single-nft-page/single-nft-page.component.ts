import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-single-nft-page',
  templateUrl: './single-nft-page.component.html',
  styleUrls: ['./single-nft-page.component.scss']
})
export class SingleNftPageComponent implements OnInit {

  collectionIndex!: number;
  collectionItemIndex!: number;
  collectionDirectory!: string;
  metadata!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.collectionIndex = params.collectionIndex;
      this.collectionItemIndex = params.collectionItemIndex;
      this.collectionDirectory = this.appService.collections[this.collectionIndex].directory;
      this.metadata = this.appService.collections[this.collectionIndex].items[this.collectionItemIndex].metadata;
    });
  }

}
