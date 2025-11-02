import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="content">
      <div class="left-side">
        <h1>Welcome to Book Your Spot</h1>
        <p>Find and reserve your perfect spot with ease! 🎯</p>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <div class="pill-group">
          <a class="pill">
            <span>Browse Locations</span>
          </a>
          <a class="pill">
            <span>View Schedule</span>
          </a>
          <a class="pill">
            <span>My Bookings</span>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}