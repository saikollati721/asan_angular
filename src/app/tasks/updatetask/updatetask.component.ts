import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignedProject } from 'src/app/Model/assignedProject';
import { Task } from 'src/app/Model/task';
import { User } from 'src/app/Model/user';
import { AssignedprojectService } from 'src/app/services/assignedproject.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {

  createTaskForm: FormGroup;

  assignedProject: AssignedProject = new AssignedProject();

  currentDate:  Date = new Date();
  
  constructor(private router: Router,private route: ActivatedRoute, private userservice: UserService, 
    private taskservice: TaskService, private assignedProjectService: AssignedprojectService) { }
  
  taskId: number;
  projectId: number;

 
  

  statuses= ["Todo","Done","Doing"];
  priorities=["High","Medium","Low"];
  taskStatuses=["At Risk","On Track","Off Track"];
  
  user: User;

  task: Task;
  id:number;
  ngOnInit(): void {    

    this.taskId =this.route.snapshot.params['id'];
    this.projectId =this.route.snapshot.params['projectId'];
    console.log(this.taskId  + ":" + this.projectId);
  
    this.taskservice.getTasks(this.projectId)
    .subscribe(data => {
      data.forEach(singleTask => {
        this.id = Number.parseInt(singleTask.id)
        console.log(this.id == this.taskId);
        if(this.id == this.taskId){
          this.task=singleTask;
          console.log("find task");
          
        }
       })}, error => console.log(error));
  
       setTimeout(() =>{
        this.createTaskForm = new FormGroup({
          'taskName': new FormControl(this.task.taskName, Validators.required),
          'priority': new FormControl(this.task.priority),
          'status': new FormControl(this.task.status),
          'due': new FormControl("2020-10-22", Validators.required),
          'assignId': new FormControl(this.task.assignId, Validators.required),
          'projectId': new FormControl(this.projectId),
          'taskStatus': new FormControl(this.task.taskStatus),
        })
       },200)

     
    
    }
  
    onSubmit(){
      console.log("after submission : "+this.taskId+this.createTaskForm.value);
      this.taskservice.updateTask(this.createTaskForm.value,this.taskId).subscribe(data => console.log("updated sucessfully"),error => console.log(error));
      this.router.navigate([""]);
    }
  
}
