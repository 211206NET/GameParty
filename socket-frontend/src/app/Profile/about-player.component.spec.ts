import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlayerComponent } from './about-player.component';

describe('AboutPlayerComponent', () => {
  let component: AboutPlayerComponent;
  let fixture: ComponentFixture<AboutPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
