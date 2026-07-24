import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

// Custom Synchronous Validator
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  // If the course code begins with the disallowed prefix 'XX', return validation error
  if (value && typeof value === 'string' && value.toUpperCase().startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom Asynchronous Validator
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const email = control.value;
      // If email has 'test@', resolve with error indicating email is already taken
      if (email && email.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  /*
   * WHY TYPED GETTER IS BETTER THAN CASTING IN TEMPLATE:
   * 
   * A strongly typed getter returns `FormArray` directly to the template,
   * avoiding the need to write unsafe casting expressions like `as FormArray` inside the HTML.
   * This provides full IDE autocomplete, static type checking during builds,
   * and prevents template compilation errors.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      /*
       * DIFFERENCE BETWEEN enrollForm.value AND enrollForm.getRawValue():
       * 
       * `enrollForm.value` returns an object containing the values of enabled controls only.
       * If any control in the form group is disabled, its key-value pair is omitted from the result.
       * 
       * `enrollForm.getRawValue()` returns the values of ALL controls (including disabled controls),
       * ensuring that no data is hidden or omitted from the final payload.
       */
      console.log('Reactive Form Submitted! value:', this.enrollForm.value);
      console.log('Reactive Form Raw Value:', this.enrollForm.getRawValue());
      this.submitted = true;
    }
  }

  resetForm(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.additionalCourses.clear();
    this.submitted = false;
  }
}
