import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AssignedProject } from '../Model/assignedProject';
import { Project } from '../Model/project';
import { User } from '../Model/user';
import { AssignedprojectService } from '../services/assignedproject.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  projectId: number;
  projects: Project[];
  assignedprojects: Project;
  constructor(private projectService: ProjectService, private router: Router,private route: ActivatedRoute,
    private assginedprojectservice: AssignedprojectService,private userservice: UserService ) { }

  id:number;
  user: User;
  ngOnInit(): void {
    
    this.id =this.route.snapshot.params['id'];
     this.getProjectsList();

     this.getAssignedProjects();
     setTimeout(() =>{
      this.user=this.userservice.getLoginUser();
    
    },1000)

  }
  getProjectsList(){
    this.projectService.getProjectByUserId(this.id)
    .subscribe(data => {
      this.projects=data
    }, error=> console.log(error));
    
  }
  getAssignedProjects(){
    this.assginedprojectservice.getassignedprojects(this.id)
    .subscribe(data => {
      this.assignedprojects=data;
    },error=> console.log(error));
  }

 delete(projectId: number){
   console.log("deleting project"+projectId);
  this.projectService.deleteProject(projectId).subscribe(data =>{
    console.log(data);
    this.getProjectsList();
  }, error=> console.log(error))
 }
  

  createProject(){
    this.router.navigate(['/createproject'])
  }
 
  viewtasks(projectId: number){
    this.router.navigate([projectId,'tasks'])
  }
}
