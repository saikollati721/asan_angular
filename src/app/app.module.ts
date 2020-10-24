import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';

import { TasksComponent } from './tasks/tasks.component';
import { TaskdetailComponent } from './tasks/taskdetail/taskdetail.component';

import { ProjectComponent } from './projects/project/project.component';
import { UsersComponent } from './users/users.component';
import { TaskComponent } from './tasks/task/task.component';
import { UpdatetaskComponent } from './tasks/updatetask/updatetask.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TasksComponent,
    TaskdetailComponent,

    ProjectComponent,
    UsersComponent,
    TaskComponent,
    UpdatetaskComponent
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
