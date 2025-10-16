import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="layout">
      <h1>Intro a pruebas unitarias en Angular</h1>
      <p>
        Esta aplicación sirve como base mínima para ejecutar los ejemplos de pruebas
        unitarias incluidos en el repositorio.
      </p>
    </main>
  `,
  styles: [
    `
      .layout {
        margin: 2rem auto;
        max-width: 48rem;
        line-height: 1.5;
        padding: 0 1.5rem;
      }

      h1 {
        font-size: 2rem;
      }
    `,
  ],
})
export class AppComponent {}
