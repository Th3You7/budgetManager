import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Categories
        </h1>
        <p class="text-gray-600 dark:text-gray-300">
          Manage your budget categories
        </p>
      </header>

      <div class="flex justify-end mb-6">
        <button
          class="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Category
        </button>
      </div>

      <div
        class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table
            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead>
              <tr class="bg-gray-50 dark:bg-gray-700/50">
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Budget Limit
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
            >
              <!-- Empty state -->
              <tr>
                <td colspan="4" class="px-6 py-10 text-center">
                  <div class="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6h.008v.008H6V6z"
                      />
                    </svg>
                    <p
                      class="font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      No categories found
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Create your first category to get started
                    </p>
                    <button
                      class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                      Create Category
                    </button>
                  </div>
                </td>
              </tr>

              <!-- Example of a row (will be shown once there's data) -->
              <!-- 
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">Groceries</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-gray-500 dark:text-gray-400">Monthly grocery expenses</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900 dark:text-white">$500.00</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex justify-end gap-2">
                    <a routerLink="/categories/1" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Edit</a>
                    <button class="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">Delete</button>
                  </div>
                </td>
              </tr>
              -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CategoriesListComponent {
  // Component logic will be added here
}
