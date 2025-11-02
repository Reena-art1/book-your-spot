import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="content">
      <div class="left-side">
        <h1>About Book Your Spot</h1>
        <p>Your go-to platform for hassle-free space reservations 🌟</p>
      </div>
      <div class="divider" role="separator" aria-label="Divider"></div>
      <div class="right-side">
        <div class="features-list">
          <h2>Key Features</h2>
          <ul>
            <li>Easy booking system</li>
            <li>Real-time availability</li>
            <li>Multiple location support</li>
            <li>Instant confirmations</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .features-list {
      padding: 1rem;
    }
    .features-list h2 {
      color: var(--gray-900);
      margin-bottom: 1rem;
    }
    .features-list ul {
      list-style: none;
      padding: 0;
    }
    .features-list li {
      color: var(--gray-700);
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    .features-list li::before {
      content: "✓";
      color: var(--bright-blue);
      position: absolute;
      left: 0;
    }
  `]
})
export class AboutComponent {}