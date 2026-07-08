import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-example-radio-buttons',
  imports: [MatRadioModule],
  standalone: true,
  templateUrl: './example-radio-buttons.component.html',
  styleUrl: './example-radio-buttons.component.scss',
})
export class ExampleRadioButtonsComponent {}
