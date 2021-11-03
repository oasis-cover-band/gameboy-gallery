import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameboyPageComponent } from './gameboy-page.component';

describe('GameboyPageComponent', () => {
  let component: GameboyPageComponent;
  let fixture: ComponentFixture<GameboyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameboyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameboyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
