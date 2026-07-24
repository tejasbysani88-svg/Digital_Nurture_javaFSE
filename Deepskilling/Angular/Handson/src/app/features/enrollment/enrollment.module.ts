import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { authGuard } from '../../guards/auth.guard';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', component: EnrollmentFormComponent, canActivate: [authGuard] },
  { path: 'reactive', component: ReactiveEnrollmentFormComponent, canActivate: [authGuard], canDeactivate: [unsavedChangesGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EnrollmentFormComponent,
    ReactiveEnrollmentFormComponent
  ]
})
export class EnrollmentModule { }
