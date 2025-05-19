import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav
      class="bg-white dark:bg-gray-800 shadow mb-4 transition-colors duration-200"
    >
      <div
        class="container mx-auto px-4 py-3 flex items-center justify-between"
      >
        <a
          routerLink="/"
          class="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h3.375a1.125 1.125 0 001.125-1.125V15.75c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v4.125c0 .621.504 1.125 1.125 1.125h3.375a1.125 1.125 0 001.125-1.125V9.75"
            />
          </svg>
          BudgetManager
        </a>
        <div class="flex items-center gap-6">
          <a
            routerLink="/"
            routerLinkActive="text-blue-600 dark:text-blue-400 font-semibold"
            [routerLinkActiveOptions]="{ exact: true }"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >Home</a
          >
          <a
            routerLink="/budgets"
            routerLinkActive="text-blue-600 dark:text-blue-400 font-semibold"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >Budgets</a
          >
          <a
            routerLink="/categories"
            routerLinkActive="text-blue-600 dark:text-blue-400 font-semibold"
            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >Categories</a
          >
          <button
            (click)="toggleDarkMode.emit()"
            class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              *ngIf="!isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-gray-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              *ngIf="isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-yellow-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  @Input() isDarkMode = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
}
