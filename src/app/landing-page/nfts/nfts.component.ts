import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { fadeAnimations } from 'src/animations';
import { SearchService } from 'src/app/search.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss'],
  animations: [fadeAnimations]
})
export class NftsComponent implements OnInit {

  loaded: BehaviorSubject<boolean> = this.appService.loaded;
  collections = this.appService.collections;
  searchCriteria: BehaviorSubject<string> = this.searchService.searchCriteria;
  constructor(
    private appService: AppService,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  goToNFT(collectionIndex: number, collectionItemIndex: number) {
    this.router.navigate(['view-nft', collectionIndex, collectionItemIndex]);
  }
}
