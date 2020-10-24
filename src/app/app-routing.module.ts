import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component:  AppComponent },
  { path: ':id/projects', component:  ProjectsComponent },
  { path: 'createproject', component: ProjectComponent },
  { path: ':id/tasks', component:  TasksComponent },
  { path: ':id/createtask', component:  TaskComponent },
  { path: 'register', component:  UsersComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
