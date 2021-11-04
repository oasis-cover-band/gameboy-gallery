import {
  Component, AfterViewInit
} from '@angular/core';
import {
  routerAnimations
} from 'src/animations';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimations]
})
export class AppComponent implements AfterViewInit {
  
  constructor(
    private appService: AppService,
    private router: Router
  ) {

  }

  ngAfterViewInit(): void {
    this.router.navigateByUrl('');
    this.appService.loadCollections();
  }

  goToStats(): void {
    this.router.navigateByUrl('stats');
  }

  goHome(): void {
    this.router.navigateByUrl('');
  }
}
