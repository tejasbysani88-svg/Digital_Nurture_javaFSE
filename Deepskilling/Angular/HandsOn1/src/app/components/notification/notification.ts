import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService], // Component-level provider
  template: `
    <div class="notification-box">
      <h4>Component Scoped Notifications</h4>
      <ul>
        <li *ngFor="let msg of messages">{{ msg }}</li>
      </ul>
      <button (click)="addAlert()" class="btn btn--details">Send Scoped Alert</button>
      <p class="comment">
        <!-- Scoped notification instance explanation -->
        * Comment: Providing NotificationService inside the @Component providers array instructs Angular 
        to instantiate a new NotificationService instance scoped specifically to this component instance 
        and its children. This overrides any singleton instance provided at the root level, ensuring 
        state isolation.
      </p>
    </div>
  `,
  styles: [`
    .notification-box {
      border: 1px dashed rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.03);
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      font-size: 0.9rem;
    }
    .notification-box h4 {
      margin: 0 0 0.5rem 0;
      color: #a5f3fc;
    }
    .comment {
      font-size: 0.75rem;
      color: #9ca3af;
      margin-top: 0.5rem;
    }
  `]
})
export class NotificationComponent implements OnInit {
  messages: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.addMessage('Initial Scoped Notification loaded.');
    this.messages = this.notificationService.getMessages();
  }

  addAlert(): void {
    this.notificationService.addMessage(`Scoped Alert at ${new Date().toLocaleTimeString()}`);
    this.messages = this.notificationService.getMessages();
  }
}
