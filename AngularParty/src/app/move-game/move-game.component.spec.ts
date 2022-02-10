import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveGameComponent } from './move-game.component';

describe('MoveGameComponent', () => {
  let component: MoveGameComponent;
  let fixture: ComponentFixture<MoveGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
