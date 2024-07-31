import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { AuthGuard } from './services/auth-guard.service';
import { TeacherComponent } from './components/teacher/teacher.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'student-view', component: StudentComponent },
    { path: 'teacher-view', component: TeacherComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
