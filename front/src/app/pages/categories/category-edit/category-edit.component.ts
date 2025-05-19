import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center mb-6">
          <button
            routerLink="/categories"
            class="mr-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white flex items-center gap-1 transition-colors"
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back
          </button>
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
            Edit Category
          </h1>
        </div>

        <form
          class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6"
        >
          <div class="mb-5">
            <label
              for="name"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              placeholder="Category name"
            />
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Enter a descriptive name for this category
            </p>
          </div>

          <div class="mb-5">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
              placeholder="Category description"
            ></textarea>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Optional brief description of what this category represents
            </p>
          </div>

          <div class="mb-7">
            <label
              for="budgetLimit"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >Budget Limit</label
            >
            <div class="relative">
              <span
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                >$</span
              >
              <input
                type="number"
                id="budgetLimit"
                name="budgetLimit"
                class="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Maximum amount allocated for this category
            </p>
          </div>

          <div class="flex justify-end space-x-4">
            <button
              type="button"
              routerLink="/categories"
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [],
})
export class CategoryEditComponent {
  constructor(private route: ActivatedRoute) {
    // Get category ID from route params
    this.route.params.subscribe((params) => {
      const categoryId = params['id'];
      // Load category data will be implemented here
    });
  }
}
