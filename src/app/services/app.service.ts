import { Injectable } from '@angular/core';
import { Collection } from '../classes/collection';
import { FileReaderService } from './file-reader.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // fileReader = new FileReader();
  collections: Collection[

  ] = [
    {
      name: 'Kool Pixels',
      directory: '../../assets/kool_pixels/',
      size: 100,
      items: []
    }
  ]
  constructor(
    private fileReaderService: FileReaderService
  ) { }

  loadCollections(): void {
    this.collections.forEach((collection: Collection, collectionIndex: number) => {
      this.loadCollection(collection, collectionIndex);
    });
  }

  loadCollection(collection: Collection, collectionIndex: number): void {
    for (let collectionItemIndex = 0; collectionItemIndex < collection.size; collectionItemIndex++) {
      this.loadItemsFromCollectionDirectoryIntoCollection(collection, collectionItemIndex);
      
    }
  }

  loadItemsFromCollectionDirectoryIntoCollection(collection: Collection, collectionItemIndex: number): void {
    this.loadImage0IntoItems(collection, collectionItemIndex);
    this.loadImage1IntoItems(collection, collectionItemIndex);
    this.loadJSONIntoItems(collection, collectionItemIndex);
  }

  loadImage0IntoItems(collection: Collection, collectionItemIndex: number): void {
    this.fileReaderService.getText(collection.directory + collectionItemIndex +'.png').then(
      (textOutput: string) => {
        collection.items[collectionItemIndex].image0 = textOutput;
    });
  }

  loadImage1IntoItems(collection: Collection, collectionItemIndex: number): void {
    this.fileReaderService.getText(collection.directory + collectionItemIndex +'.svg').then(
      (textOutput: string) => {
        collection.items[collectionItemIndex].image1 = textOutput;
    });
  }

  loadJSONIntoItems(collection: Collection, collectionItemIndex: number): void {
    this.fileReaderService.getText(collection.directory + collectionItemIndex +'.json').then(
      (textOutput: string) => {
        console.dir(textOutput);
        collection.items[collectionItemIndex].metadata = textOutput;
    });
  }

}
