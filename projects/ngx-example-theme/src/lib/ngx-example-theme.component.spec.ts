import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxExampleThemeComponent } from './ngx-example-theme.component';

describe('NgxExampleThemeComponent', () => {
  let component: NgxExampleThemeComponent;
  let fixture: ComponentFixture<NgxExampleThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxExampleThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxExampleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
