import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftImagesComponent } from './nft-images.component';

describe('NftImagesComponent', () => {
  let component: NftImagesComponent;
  let fixture: ComponentFixture<NftImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
