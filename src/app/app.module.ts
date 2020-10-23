import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { CreateprojectComponent } from './projects/createproject/createproject.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdetailComponent } from './tasks/taskdetail/taskdetail.component';
import { CreatetaskComponent } from './tasks/createtask/createtask.component';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CreateprojectComponent,
    TasksComponent,
    TaskdetailComponent,
    CreatetaskComponent,
    CreateuserComponent
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
