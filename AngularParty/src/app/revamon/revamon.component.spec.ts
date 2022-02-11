import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevamonComponent } from './revamon.component';

describe('RevamonComponent', () => {
  let component: RevamonComponent;
  let fixture: ComponentFixture<RevamonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevamonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
