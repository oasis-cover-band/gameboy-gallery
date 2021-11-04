import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerBackgroundComponent } from './computer-background.component';

describe('ComputerBackgroundComponent', () => {
  let component: ComputerBackgroundComponent;
  let fixture: ComponentFixture<ComputerBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
