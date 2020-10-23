import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignedProject } from 'src/app/Model/assignedProject';
import { User } from 'src/app/Model/user';
import { AssignedprojectService } from 'src/app/services/assignedproject.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  createTaskForm: FormGroup;

  assignedProject: AssignedProject = new AssignedProject();

  id: number;
  currentDate:  Date = new Date();
  // taskName: string;
  // priority: string;
  // status: string;
  // due: Date = new Date();
  // assignId: string;
  // taskStatus: string;

  projectId: number;
  

  statuses= ["Todo","Done","Doing"];
  priorities=["High","Medium","Low"];
  taskStatuses=["At Risk","On Track","Off Track"];
  
  user: User;
  constructor(private router: Router,private route: ActivatedRoute, private userservice: UserService, 
    private taskservice: TaskService, private assignedProjectService: AssignedprojectService) { }

  ngOnInit(): void {
    this.projectId =this.route.snapshot.params['id'];
    this.createTaskForm = new FormGroup({
      'taskName': new FormControl(null, Validators.required),
      'priority': new FormControl("Low"),
      'status': new FormControl("Doing"),
      'due': new FormControl("2020-10-22", Validators.required),
      'assignId': new FormControl(Validators.required),
      'projectId': new FormControl(this.projectId),
      'taskStatus': new FormControl("Off Track"),
    })

    
     setTimeout(() =>{
      this.user=this.userservice.getLoginUser();
      console.log("at create form: "+this.user.firstName);
    },1000)
  }
  
  onSubmit(){
    // console.log(this.createTaskForm.value);
    this.taskservice.saveTask(this.createTaskForm.value)
    .subscribe(data => console.log("Task saved sucessfully"), error => console.log(error));
    this.assignedProject.projectId=this.projectId;
    this.assignedProject.userId=this.createTaskForm.value.assignId;
    this.assignedProject.assignedBy=this.user.firstName;
    // console.log(this.assignedProject);
    this.assignedProjectService.saveAssignedProject(this.assignedProject)
    .subscribe(data => {console.log("saved to assigned project sucessfully")}, error => console.log(error))
    this.gotoTasks();
  
  }
  gotoTasks(){
    this.router.navigate([this.projectId,'tasks']);
  }

}
