import { Component, OnInit, Input, AfterViewInit, HostBinding } from '@angular/core';
import { fadeAnimations } from 'src/animations';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.rendered = true;
    }, 2000 + (500 * this.collectionItemIndex) * this.collectionIndex);
  }

  home(): void {
    this.router.navigateByUrl('home');
  }
}
