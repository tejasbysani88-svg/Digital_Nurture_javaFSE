import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  isLoading = true;
  selectedCourseId: number | null = null;
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    
    // Simulate API network latency of 1.5 seconds
    setTimeout(() => {
      this.courseService.getCourses().subscribe({
        next: (data) => {
          this.courses = data;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load courses.';
          console.error(err);
        },
        complete: () => {
          this.isLoading = false;
        }
      });
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
    } else {
      this.enrollmentService.enroll(courseId);
    }
    
    this.selectedCourseId = courseId;
  }

  /*
   * WHY trackBy IMPROVES PERFORMANCE:
   * 
   * By default, when an array changes, Angular discards and re-creates all DOM elements
   * for the list items. Using trackBy instructs Angular to track items by a unique identifier
   * (e.g. course.id). If the array updates, Angular will only add, remove, or re-order
   * the specific DOM elements that actually changed, rather than re-rendering the entire list.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
