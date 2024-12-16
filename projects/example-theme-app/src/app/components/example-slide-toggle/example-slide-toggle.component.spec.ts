import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleSlideToggleComponent } from './example-slide-toggle.component';

describe('ExampleSlideToggleComponent', () => {
  let component: ExampleSlideToggleComponent;
  let fixture: ComponentFixture<ExampleSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleSlideToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
