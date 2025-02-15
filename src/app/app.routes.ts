import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'project', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    // ... other routes
    { path: '**', redirectTo: 'home' } // Wildcard route for unknown paths
];
