import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { CourseCardComponent } from './course-card';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { vi } from 'vitest';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let enrollmentService: EnrollmentService;

  const mockCourse: Course = {
    id: 1,
    name: 'Angular Testing',
    code: 'CS102',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CourseCardComponent],
      providers: [EnrollmentService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    enrollmentService = TestBed.inject(EnrollmentService);
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course name in h3', () => {
    fixture.detectChanges();
    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Element.textContent).toContain('Angular Testing');
  });

  it('should emit enrollRequested on button click', () => {
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.query(By.css('.btn--enroll')).nativeElement;
    enrollButton.click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  it('should log changes on ngOnChanges', () => {
    const logSpy = vi.spyOn(console, 'log');
    const changes: SimpleChanges = {
      course: new SimpleChange(null, mockCourse, true)
    };
    component.ngOnChanges(changes);
    expect(logSpy).toHaveBeenCalledWith('Course input changed in CourseCardComponent:', changes);
  });
});
