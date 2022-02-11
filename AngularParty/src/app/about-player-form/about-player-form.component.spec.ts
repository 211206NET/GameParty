import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AboutPlayerFormComponent } from './about-player-form.component';
import { FormsModule } from '@angular/forms';

describe('AboutPlayerFormComponent', () => {
  let component: AboutPlayerFormComponent;
  let fixture: ComponentFixture<AboutPlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPlayerFormComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]  
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
