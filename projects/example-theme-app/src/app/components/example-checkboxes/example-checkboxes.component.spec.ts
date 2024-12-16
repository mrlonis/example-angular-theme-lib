import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleCheckboxesComponent } from './example-checkboxes.component';

describe('ExampleCheckboxesComponent', () => {
  let component: ExampleCheckboxesComponent;
  let fixture: ComponentFixture<ExampleCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCheckboxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
