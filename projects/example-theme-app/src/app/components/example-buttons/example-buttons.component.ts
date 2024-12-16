import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-example-buttons',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './example-buttons.component.html',
  styleUrl: './example-buttons.component.scss',
})
export class ExampleButtonsComponent {}
