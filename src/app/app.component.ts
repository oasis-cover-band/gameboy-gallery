import {
  Component, AfterViewInit
} from '@angular/core';
import {
  routerAnimations
} from 'src/animations';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimations]
})
export class AppComponent implements AfterViewInit {
  
  constructor(
    private appService: AppService
  ) {

  }

  ngAfterViewInit(): void {
    this.appService.loadCollections();
  }
}
