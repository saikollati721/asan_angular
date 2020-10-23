import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateprojectComponent } from './projects/createproject/createproject.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component:  AppComponent },
  { path: ':id', component:  AppComponent },
  { path: ':id/projects', component:  ProjectsComponent },
  { path: 'createproject', component:  CreateprojectComponent },
  { path: ':id/tasks', component:  TasksComponent },
  { path: ':id/createtask', component:  CreatetaskComponent },
  { path: 'register', component:  CreateuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
