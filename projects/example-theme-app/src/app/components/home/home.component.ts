import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ExampleButtonsComponent } from '../example-buttons/example-buttons.component';
import { ExampleInputsComponent } from '../example-inputs';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [MatCardModule, MatDividerModule, ExampleButtonsComponent, ExampleInputsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
