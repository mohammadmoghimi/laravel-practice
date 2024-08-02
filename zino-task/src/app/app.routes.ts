import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'student', component: StudentComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
