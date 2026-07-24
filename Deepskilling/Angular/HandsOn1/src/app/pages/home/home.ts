import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  availableCount = 0;
  enrolledCount = 0;

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Fetch courses count to display live stats
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.availableCount = courses.length;
      }
    });

    this.enrolledCount = this.enrollmentService.getEnrolledCourseIds().length;

    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  /*
   * DIFFERENCE BETWEEN [property] AND [(ngModel)]:
   * 
   * [property] is a ONE-WAY data binding from the component class to the DOM.
   * If the property value in the TypeScript class changes, the DOM is updated automatically.
   * However, changes made in the DOM (like user input) do NOT flow back to the component.
   * 
   * [(ngModel)] is a TWO-WAY data binding that synchronizes the component class and the DOM.
   * Changes in the component update the DOM, and user interactions in the DOM (e.g. typing)
   * immediately update the property in the component class.
   */
}
