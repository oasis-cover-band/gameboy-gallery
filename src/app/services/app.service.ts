import { Injectable } from '@angular/core';
import { Collection } from '../classes/collection';
import { FileReaderService } from './file-reader.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { NFT } from '../classes/nft/nft';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  favIcon: HTMLLinkElement | null = document.querySelector('#favIcon');
  currentFavIconFrame: number = 0;
  favIconFrames: number = 6;
  
  collections: Collection[

  ] = [
    {
      name: 'Kool Pixels',
      directory: '/assets/collections/kool_pixels/',
      size: 100,
      items: [],
      statistics: {}
    }
  ]
  constructor(
    private fileReaderService: FileReaderService
  ) {
    this.animateFavIcon();
  }

  loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loadCollections(): void {
    this.collections.forEach((collection: Collection, collectionIndex: number) => {
      this.loadCollection(collection, collectionIndex);
    });
  }

  loadCollection(collection: Collection, collectionIndex: number): void {
    for (let collectionItemIndex = 0; collectionItemIndex < collection.size; collectionItemIndex++) {
      this.collections[collectionIndex].items.length = this.collections[collectionIndex].size;
      this.loadItemsFromCollectionDirectoryIntoCollection(collectionIndex, collectionItemIndex);
      this.loadCollectionStatistics(collectionIndex);
      
    }
  }

  loadItemsFromCollectionDirectoryIntoCollection(collectionIndex: number, collectionItemIndex: number): void {
    this.loadJSONIntoItems(collectionIndex, collectionItemIndex);
  }

  loadJSONIntoItems(collectionIndex: number, collectionItemIndex: number): void {
    const tempSubscription: Subscription = this.fileReaderService.getText('../..' + this.collections[collectionIndex].directory + collectionItemIndex +'.json').subscribe(
      (textOutput: string) => {
        let emptyNFT: NFT = {
          metadata: {}
        }
        this.collections[collectionIndex].items[collectionItemIndex] = emptyNFT;
        this.collections[collectionIndex].items[collectionItemIndex].metadata = JSON.parse(textOutput);
        if (collectionIndex < this.collections.length && collectionItemIndex < this.collections[collectionIndex].size) {
          setTimeout(() => {
            this.loaded.next(true);
          }, 7500);
        }
        tempSubscription.unsubscribe();
    });
  }
  loadCollectionStatistics(collectionIndex: number): void {
    const tempSubscription: Subscription = this.fileReaderService.getText('../..' + this.collections[collectionIndex].directory + 'collectionStatistics.json').subscribe(
      (textOutput: string) => {
        let emptyNFT: NFT = {
          metadata: {}
        }
        this.collections[collectionIndex].statistics = JSON.parse(textOutput);
        tempSubscription.unsubscribe();
    });
  }

  
  animateFavIcon() {
    setInterval(() => {
      if (this.currentFavIconFrame < this.favIconFrames) {
        this.currentFavIconFrame++;
        this.changeFavIcon();
      } else {
        this.currentFavIconFrame = 0;
      }
    }, 500);
  }

  changeFavIcon() {
    if (this.favIcon !== null) {
      this.favIcon.href = '../assets/logo-pngs/logo (' + this.currentFavIconFrame + ').png';
    }
  }

}
