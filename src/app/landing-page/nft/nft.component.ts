import { Component, OnInit, Input, AfterViewInit, HostBinding } from '@angular/core';
import { fadeAnimations } from 'src/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss'],
  animations: [fadeAnimations]
})
export class NftComponent implements OnInit, AfterViewInit {

  @HostBinding('class.routed') @Input() routed: boolean = false;
  @Input() collectionItemIndex!: number;
  @Input() collectionIndex!: number;
  @Input() collectionDirectory!: string;
  @Input() metadata!: any;
  @HostBinding('class.rendered') rendered: boolean = false;

  constructor(
    private router: Router,
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.collectionIndex) {
        this.routed = true;
      }
      this.collectionIndex = params.collectionIndex;
      this.collectionItemIndex = params.collectionItemIndex;
      this.collectionDirectory = this.appService.collections[this.collectionIndex].directory;
      this.metadata = this.appService.collections[this.collectionIndex].items[this.collectionItemIndex].metadata;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.rendered = true;
    }, (500 * this.collectionItemIndex) * this.collectionIndex);
  }

  home(): void {
    this.router.navigateByUrl('home');
  }
}
