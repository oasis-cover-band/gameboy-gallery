import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionStatisticsPageComponent } from './collection-statistics-page.component';

describe('CollectionStatisticsPageComponent', () => {
  let component: CollectionStatisticsPageComponent;
  let fixture: ComponentFixture<CollectionStatisticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionStatisticsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionStatisticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
