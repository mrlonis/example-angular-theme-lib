import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleRadioButtonsComponent } from './example-radio-buttons.component';

describe('ExampleRadioButtonsComponent', () => {
  let component: ExampleRadioButtonsComponent;
  let fixture: ComponentFixture<ExampleRadioButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRadioButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
