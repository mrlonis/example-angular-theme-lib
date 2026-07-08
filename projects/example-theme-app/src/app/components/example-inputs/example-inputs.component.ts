import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-example-inputs',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
  templateUrl: './example-inputs.component.html',
  styleUrl: './example-inputs.component.scss',
})
export class ExampleInputsComponent {}
