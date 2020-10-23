import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/Model/project';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  project: Project =new Project();
  projectName="";

  constructor(private userservice: UserService, private projectService: ProjectService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("in create porject : "+this.userservice.user);
    this.project.createdBy=this.userservice.user.firstName;
    this.project.userId=this.userservice.user.id;
  }
  save(){
    this.project.projectName=this.projectName;
    console.log(this.project);
    
    this.projectService.saveProject(this.project)
    .subscribe(data => {
      console.log(data);
    
      this.project = new Project();
      this.gotoProjects();
    })
  }
  gotoProjects(){
    this.router.navigate(['/projects']);
  }

}
