import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';

import { TasksComponent } from './tasks/tasks.component';
import { TaskdetailComponent } from './tasks/taskdetail/taskdetail.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';

import { ProjectComponent } from './projects/project/project.component';
import { UsersComponent } from './users/users.component';
import { TaskComponent } from './tasks/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TasksComponent,
    TaskdetailComponent,
    CreatetaskComponent,

    ProjectComponent,
    UsersComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
