import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNftPageComponent } from './single-nft-page.component';

describe('SingleNftPageComponent', () => {
  let component: SingleNftPageComponent;
  let fixture: ComponentFixture<SingleNftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNftPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
