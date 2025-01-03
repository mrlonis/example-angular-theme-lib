import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  standalone: true,
  selector: 'app-example-radio-buttons',
  imports: [MatRadioModule],
  templateUrl: './example-radio-buttons.component.html',
  styleUrls: ['./example-radio-buttons.component.scss'],
})
export class ExampleRadioButtonsComponent {}
