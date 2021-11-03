import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {

  @Input() routed: boolean = false;
  @Input() itemIndex!: number;
  @Input() collectionIndex!: number;
  @Input() metadata!: {};

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    console.dir(this.metadata);
  }

}
