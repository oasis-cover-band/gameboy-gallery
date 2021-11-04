import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-statistics-page',
  templateUrl: './collection-statistics-page.component.html',
  styleUrls: ['./collection-statistics-page.component.scss']
})
export class CollectionStatisticsPageComponent implements OnInit {

  // NOT PROGRAMMATIC
  statistics = this.appService.collections[0].statistics;
  collectionStatistics: any = [];
  collectionStatisticsName: any = [];
  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.dir(this.collectionStatistics);
    for (const key in this.statistics) {
      console.dir(
        this.statistics[key]);
      this.collectionStatistics.push(
        this.statistics[key]
      );
      this.collectionStatisticsName.push(
        key
      );
      // this.collectionStatistics[0].push(
      //   this.statistics[key].valueOf()
      // );
    }
  }

  home(): void {
    this.router.navigateByUrl('home');
  }
}
