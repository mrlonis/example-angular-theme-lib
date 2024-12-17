import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Task {
  name: string;
  completed: boolean;
  color: string;
  subtasks: Task[];
}

@Component({
  standalone: true,
  selector: 'app-example-checkboxes',
  imports: [CommonModule, FormsModule, MatCheckboxModule],
  templateUrl: './example-checkboxes.component.html',
  styleUrls: ['./example-checkboxes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCheckboxesComponent {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' } as Task,
      { name: 'Accent', completed: false, color: 'accent' } as Task,
      { name: 'Warn', completed: false, color: 'warn' } as Task,
    ] as Task[],
  } as Task;

  allComplete = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    return this.task.subtasks.filter((t) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
