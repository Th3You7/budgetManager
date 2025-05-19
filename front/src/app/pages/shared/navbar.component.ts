import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  @Input() isDarkMode = false;
  @Output() toggleDarkMode = new EventEmitter<void>();
}
