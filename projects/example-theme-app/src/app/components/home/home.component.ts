import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ExampleButtonsComponent } from '../example-buttons/example-buttons.component';
import { ExampleCheckboxesComponent } from '../example-checkboxes/example-checkboxes.component';
import { ExampleInputsComponent } from '../example-inputs/example-inputs.component';
import { ExampleRadioButtonsComponent } from '../example-radio-buttons/example-radio-buttons.component';
import { ExampleSlideToggleComponent } from '../example-slide-toggle/example-slide-toggle.component';

@Component({
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
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
