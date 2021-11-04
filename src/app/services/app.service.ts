import { Injectable } from '@angular/core';
import { Collection } from '../classes/collection';
import { FileReaderService } from './file-reader.service';
import { Subscription } from 'rxjs';
import { NFT } from '../classes/nft/nft';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // fileReader = new FileReader();
  collections: Collection[

  ] = [
    {
      name: 'Kool Pixels',
      directory: '/assets/kool_pixels/',
      size: 100,
      items: []
    }
  ]
  constructor(
    private fileReaderService: FileReaderService,
    private router: Router
  ) { }

  loadCollections(): void {
    this.collections.forEach((collection: Collection, collectionIndex: number) => {
      this.loadCollection(collection, collectionIndex);
    });
  }

  loadCollection(collection: Collection, collectionIndex: number): void {
    for (let collectionItemIndex = 0; collectionItemIndex < collection.size; collectionItemIndex++) {
      this.collections[collectionIndex].items.length = this.collections[collectionIndex].size;
      this.loadItemsFromCollectionDirectoryIntoCollection(collectionIndex, collectionItemIndex);
      
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
          this.router.navigateByUrl('home');
        }
        tempSubscription.unsubscribe();
    });
  }

}
