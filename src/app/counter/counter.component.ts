import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <div class="counter">
      <h2>{{ label }}</h2>
      <p class="value">{{ value }}</p>
      <button type="button" (click)="increment()">Incrementar</button>
      <button type="button" (click)="reset()" [disabled]="value === initialValue">
        Reiniciar
      </button>
    </div>
  `,
})
export class CounterComponent {
  initialValue = 0;
  value = this.initialValue;
  label = 'Visitas al sitio';

  increment(): void {
    this.value += 1;
  }

  reset(): void {
    this.value = this.initialValue;
  }
}
