import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ExampleButtonsComponent } from '../example-buttons';
import { ExampleCheckboxesComponent } from '../example-checkboxes';
import { ExampleInputsComponent } from '../example-inputs';
import { ExampleRadioButtonsComponent } from '../example-radio-buttons';
import { ExampleSlideToggleComponent } from '../example-slide-toggle';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    MatCardModule,
    MatDividerModule,
    ExampleButtonsComponent,
    ExampleInputsComponent,
    ExampleCheckboxesComponent,
    ExampleRadioButtonsComponent,
    ExampleSlideToggleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
