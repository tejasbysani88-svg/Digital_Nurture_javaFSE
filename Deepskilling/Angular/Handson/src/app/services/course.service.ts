import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private localCourses: Course[] = [
    { id: 1, name: 'Angular Framework', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures & Algorithms', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Web Development', code: 'CS103', credits: 3, gradeStatus: 'passed' },
    { id: 4, name: 'Database Systems', code: 'CS104', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses').pipe(
      retry(2),
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      catchError(err => {
        console.error('HTTP error in getCourses, using local fallback:', err);
        return of(this.localCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/courses/${id}`).pipe(
      catchError(err => {
        console.error('HTTP error in getCourseById, using local fallback:', err);
        const c = this.localCourses.find(item => item.id === id);
        if (c) return of(c);
        throw new Error('Failed to load course. Please try again.');
      })
    );
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>('http://localhost:3000/courses', course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`http://localhost:3000/courses/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }

  getLocalCourses(): Course[] {
    return this.localCourses;
  }

  addLocalCourse(course: Course): void {
    this.localCourses.push(course);
  }
}
