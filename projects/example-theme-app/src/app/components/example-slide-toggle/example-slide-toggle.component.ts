import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-example-slide-toggle',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatCheckboxModule, MatSlideToggleModule],
  standalone: true,
  templateUrl: './example-slide-toggle.component.html',
  styleUrl: './example-slide-toggle.component.scss',
})
export class ExampleSlideToggleComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
