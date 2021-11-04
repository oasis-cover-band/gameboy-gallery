import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchCriteria: BehaviorSubject<string> = new BehaviorSubject<string>('empty');
  searchHidden: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }
}
