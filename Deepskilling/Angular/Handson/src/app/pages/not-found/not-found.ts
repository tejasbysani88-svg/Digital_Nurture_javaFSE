import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a routerLink="/" class="btn">Return to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      max-width: 600px;
      margin: 5rem auto;
      text-align: center;
      color: white;
    }
    h1 {
      font-size: 6rem;
      margin: 0;
      color: #f87171;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      color: #9ca3af;
      margin-bottom: 2rem;
    }
    .btn {
      background: #3b82f6;
      color: white;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 500;
    }
  `]
})
export class NotFoundComponent {}
