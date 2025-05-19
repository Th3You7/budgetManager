import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/shared/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    <div
      [class.dark]="isDarkMode()"
      class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <app-navbar
        [isDarkMode]="isDarkMode()"
        (toggleDarkMode)="toggleDarkMode()"
      ></app-navbar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  isDarkMode = signal(false);

  constructor() {
    // Check if user prefers dark mode
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.isDarkMode.set(true);
    }

    // Get saved preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.isDarkMode.set(savedDarkMode === 'true');
    }

    // Setup effect to save preference changes
    effect(() => {
      localStorage.setItem('darkMode', String(this.isDarkMode()));
    });
  }

  toggleDarkMode() {
    this.isDarkMode.update((current) => !current);
  }
}
