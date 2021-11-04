import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimations } from '../../animations';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [ fadeAnimations ]
})
export class SearchBarComponent implements OnInit {

  @ViewChild('inputElement') inputElement!: ElementRef;
  placeholderText = 'Enter your Search';
  searchHidden: BehaviorSubject<boolean> = this.searchService.searchHidden;
  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  alertSearchService(event: any): void {
    this.searchService.searchCriteria.next(this.inputElement.nativeElement.value);
  }

}
