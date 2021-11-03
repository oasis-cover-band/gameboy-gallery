import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})
export class NftsComponent implements OnInit {

  collections = this.appService.collections;
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      console.dir(this.collections[0].items)
    }, 500);
  }

}
